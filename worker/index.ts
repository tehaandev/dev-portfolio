interface Env {
  ASSETS: { fetch: typeof fetch };
  EMAIL: {
    send(message: {
      from: string;
      to: string;
      replyTo: string;
      subject: string;
      text: string;
    }): Promise<unknown>;
  };
  CONTACT_EMAIL_TO: string;
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname !== "/api/contact") return env.ASSETS.fetch(request);

    if (request.method !== "POST") {
      return new Response(null, { status: 405, headers: { Allow: "POST" } });
    }
    // Next's Server Actions rejected cross-site posts; keep that protection.
    if (request.headers.get("Origin") !== url.origin) {
      return new Response(null, { status: 403 });
    }

    const formData = await request.formData().catch(() => null);
    const name = formData?.get("name");
    const email = formData?.get("email");
    const message = formData?.get("message");
    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return new Response("Invalid form data", { status: 400 });
    }

    try {
      await env.EMAIL.send({
        from: "contact@tehaan.dev",
        to: env.CONTACT_EMAIL_TO,
        replyTo: email,
        // Visitor input ends up in a mail header, so it can't contain line breaks.
        subject: `Portfolio message from ${name.replace(/[\r\n]+/g, " ")}`,
        text: `From: ${name}\nEmail: ${email}\n\n${message}`,
      });
      return new Response(null, { status: 204 });
    } catch (error) {
      console.error("Error submitting form:", error);
      return new Response("Failed to send message", { status: 502 });
    }
  },
};

export default worker;
