"use client";

import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/section-heading";
import { useFormSubmitAction } from "@/features/form-submit-query";
import { CheckCircle2, ChevronRight } from "lucide-react";
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

  const validateField = (name: string, value: string) => {
    if (!value.trim())
      return `${name[0].toUpperCase()}${name.slice(1)} is required`;
    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value))
      return "Email is invalid";
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    for (const [name, value] of Object.entries(formState)) {
      const error = validateField(name, value);
      if (error) newErrors[name] = error;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate inline as each field is left, not only on submit
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) setErrors((prev) => ({ ...prev, [name]: error }));
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
    "bg-secondary placeholder:text-muted-foreground/70 focus:ring-wine aria-invalid:ring-destructive w-full rounded-xl px-4 py-3 text-[1.0625rem] transition-shadow duration-200 focus:ring-2 focus:outline-none aria-invalid:ring-2";

  const links = [
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
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 md:px-8">
      <SectionHeading label="Contact">
        Let&apos;s build something{" "}
        <span className="text-muted-foreground">enduring.</span>
      </SectionHeading>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <FadeIn className="md:col-span-5">
          <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
            Have a project in mind or want to discuss an opportunity? Write to
            me directly, or leave a note. I reply to every message.
          </p>

          <Link
            href="mailto:hello@tehaan.dev"
            className="link mt-6 inline-block text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
            hello@tehaan.dev
          </Link>

          <ul className="surface mt-10 overflow-hidden">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:bg-border hover:bg-secondary/60 active:bg-secondary relative flex items-center gap-4 px-5 py-3.5 transition-colors after:absolute after:right-0 after:bottom-0 after:left-5 after:h-px [li:last-child_&]:after:hidden">
                  <span className="w-20 shrink-0 text-[0.9375rem]">
                    {item.label}
                  </span>
                  <span className="text-muted-foreground flex-1 truncate text-[0.9375rem]">
                    {item.value}
                  </span>
                  <ChevronRight className="text-muted-foreground/60 h-4 w-4 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={60} className="md:col-span-6 md:col-start-7">
          <div className="surface p-6 md:p-8">
            {isSubmitted ? (
              <div className="animate-in fade-in zoom-in-95 py-10 text-center duration-500">
                <CheckCircle2 className="text-wine mx-auto h-12 w-12" />
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.022em]">
                  Thank you.
                </h3>
                <p className="text-muted-foreground mx-auto mt-2 max-w-xs text-[0.9375rem] leading-relaxed">
                  Your message is on its way. I&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-1.5 block text-sm font-medium">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formState[field.name]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={field.placeholder}
                      autoComplete={field.name}
                      aria-invalid={!!errors[field.name]}
                      aria-describedby={`${field.name}-error`}
                      className={inputClass}
                    />
                    <p
                      id={`${field.name}-error`}
                      className="text-destructive mt-1.5 min-h-4 text-[0.8125rem]">
                      {errors[field.name]}
                    </p>
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="A brief overview of your project or inquiry"
                    rows={5}
                    aria-invalid={!!errors.message}
                    aria-describedby="message-error"
                    className={`${inputClass} resize-none`}
                  />
                  <p
                    id="message-error"
                    className="text-destructive mt-1.5 min-h-4 text-[0.8125rem]">
                    {errors.message}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full">
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
