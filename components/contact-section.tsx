"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarDays,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useFormSubmitAction } from "@/features/form-submit-query";
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

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
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

  const contactItems = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hello@tehaan.me",
      href: "mailto:hello@tehaan.me",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Sri Lanka",
      href: null,
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "in/tehaan-perera",
      href: "https://www.linkedin.com/in/tehaan-perera/",
    },
    {
      icon: <CalendarDays className="h-5 w-5" />,
      label: "Schedule a Call",
      value: "Book a time",
      href: "https://calendar.app.google/7VhtRKka3953z2hq5",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-6xl mx-auto items-start">

          {/* Left panel */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                Contact
              </p>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
                {"Let's Work"}<br />
                Together.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Have a project in mind or want to discuss potential
                opportunities? I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-5">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <Link
                href="https://github.com/tehaandev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary border border-border/60 hover:border-primary/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tehaan-perera/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted hover:bg-primary/10 hover:text-primary border border-border/60 hover:border-primary/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right panel — form */}
          <div className="lg:col-span-3">
            <Card className="border-border/60 shadow-sm">
              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-[280px]">
                      {`Thank you for reaching out. I'll get back to you as soon as possible.`}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        Send a Message
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        {`Fill out the form below and I'll get back to you as soon as possible.`}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`border-border/70 focus-visible:ring-primary/40 ${
                          errors.name ? "border-destructive" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className={`border-border/70 focus-visible:ring-primary/40 ${
                          errors.email ? "border-destructive" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        className={`min-h-[130px] border-border/70 focus-visible:ring-primary/40 resize-none ${
                          errors.message ? "border-destructive" : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full font-semibold shadow-sm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
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
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
