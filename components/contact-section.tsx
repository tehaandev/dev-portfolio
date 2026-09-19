"use client";

import { SectionHeading } from "@/components/section-heading";
import { useFormSubmitAction } from "@/features/form-submit-query";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const formSubmitMutation = useFormSubmitAction();
  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitted(false);
    setErrors({});
    try {
      e.preventDefault();
      if (!validateForm()) return;
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      setIsSubmitting(true);
      await formSubmitMutation.mutateAsync(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      setIsSubmitting(false);
      console.error(error);
      toast.error("Error sending message. Please try again later.");
    }
  };

  const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "Your name" },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "you@company.com",
    },
  ] as const;

  const inputClass =
    "border-input focus:border-wine placeholder:text-muted-foreground/50 w-full border-b bg-transparent py-3 text-base transition-colors duration-300 focus:outline-none";

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 md:px-10">
      <SectionHeading index="04" label="Contact">
        Let&apos;s build something{" "}
        <em className="text-muted-foreground">enduring.</em>
      </SectionHeading>

      <div className="grid grid-cols-1 gap-20 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <p className="text-muted-foreground max-w-sm text-[0.9375rem] leading-relaxed">
            Have a project in mind or want to discuss an opportunity? Write to
            me directly, or leave a note - I reply to every message.
          </p>

          <Link
            href="mailto:hello@tehaan.dev"
            className="link-draw mt-10 inline-block pb-1 font-serif text-3xl md:text-4xl">
            hello@tehaan.dev
          </Link>

          <dl className="mt-16 space-y-6">
            {[
              {
                label: "GitHub",
                value: "@tehaandev",
                href: "https://github.com/tehaandev",
              },
              {
                label: "LinkedIn",
                value: "in/tehaan-perera",
                href: "https://www.linkedin.com/in/tehaan-perera/",
              },
              {
                label: "Calendar",
                value: "Book a 30-minute call",
                href: "https://calendar.app.google/7VhtRKka3953z2hq5",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-baseline gap-6">
                <dt className="eyebrow w-24 shrink-0">{item.label}</dt>
                <dd>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw pb-0.5 text-sm">
                    {item.value}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {isSubmitted ? (
            <div className="border-border border-t pt-10">
              <p className="eyebrow mb-4">Received</p>
              <h3 className="font-serif text-4xl">Thank you.</h3>
              <p className="text-muted-foreground mt-4 max-w-sm text-[0.9375rem] leading-relaxed">
                Your message is on its way. I&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-10">
              {fields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="eyebrow block">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={formState[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    aria-invalid={!!errors[field.name]}
                    className={inputClass}
                  />
                  {errors[field.name] && (
                    <p className="text-destructive mt-2 text-xs">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="eyebrow block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="A brief overview of your project or inquiry"
                  rows={4}
                  aria-invalid={!!errors.message}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p className="text-destructive mt-2 text-xs">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-foreground text-background hover:bg-foreground/85 group inline-flex items-center gap-3 px-7 py-4 text-[0.8125rem] tracking-wide transition-colors duration-300 disabled:opacity-60">
                {isSubmitting ? "Sending…" : "Send message"}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-500 ease-(--ease-lux) group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
