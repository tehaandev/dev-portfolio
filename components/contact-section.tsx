"use client";

import { useFormSubmitAction } from "@/features/form-submit-query";
import { Mail, Github, Linkedin, CheckCircle } from "lucide-react";
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

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 pb-16 md:px-8 md:pb-24">
      <div className="bg-card grid grid-cols-1 items-center gap-12 rounded-xl p-8 md:grid-cols-2 md:p-16">
        {/* Left panel */}
        <div>
          <h2 className="mb-6 text-4xl leading-[1.05] font-extrabold tracking-tight">
            Let&apos;s Work <br /> Together.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you.
          </p>

          <div className="space-y-4">
            <Link
              href="mailto:hello@tehaan.dev"
              className="text-muted-foreground hover:text-primary flex items-center gap-4 transition-colors duration-200">
              <Mail className="h-5 w-5 flex-shrink-0" />
              hello@tehaan.dev
            </Link>

            <Link
              href="https://github.com/tehaandev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-4 transition-colors duration-200"
              aria-label="GitHub">
              <Github className="h-5 w-5" />
              @tehaandev
            </Link>
            <Link
              href="https://www.linkedin.com/in/tehaan-perera/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-4 transition-colors duration-200"
              aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
              in/tehaan-perera
            </Link>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="bg-secondary rounded-lg p-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="bg-primary/10 mb-5 flex h-14 w-14 items-center justify-center rounded-full">
                <CheckCircle className="text-primary h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Message Sent!</h3>
              <p className="text-muted-foreground max-w-[260px] text-sm">
                Thank you for reaching out. I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="text-muted-foreground mb-2 block text-[0.6875rem] font-bold tracking-widest uppercase">
                  Name
                </label>
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border-muted-foreground/30 focus:border-primary text-foreground placeholder:text-muted-foreground/40 w-full border-b bg-transparent px-0 py-3 text-sm transition-colors duration-200 focus:outline-none"
                />
                {errors.name && (
                  <p className="text-destructive mt-1 text-xs">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-muted-foreground mb-2 block text-[0.6875rem] font-bold tracking-widest uppercase">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="border-muted-foreground/30 focus:border-primary text-foreground placeholder:text-muted-foreground/40 w-full border-b bg-transparent px-0 py-3 text-sm transition-colors duration-200 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-destructive mt-1 text-xs">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-muted-foreground mb-2 block text-[0.6875rem] font-bold tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Brief overview of your project or inquiry..."
                  rows={4}
                  className="border-muted-foreground/30 focus:border-primary text-foreground placeholder:text-muted-foreground/40 w-full resize-none border-b bg-transparent px-0 py-3 text-sm transition-colors duration-200 focus:outline-none"
                />
                {errors.message && (
                  <p className="text-destructive mt-1 text-xs">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary-container text-on-primary-container w-full rounded-md py-4 text-xs font-bold tracking-widest uppercase transition-opacity duration-200 hover:opacity-90 disabled:opacity-60">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
