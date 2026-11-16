"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const initialFields: Fields = { name: "", email: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string | null>(null);

  const update = (key: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setStatus(null);
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!fields.name.trim()) next.name = "Please tell me your name.";
    if (!fields.email.trim()) {
      next.email = "Please add your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      next.email = "That email doesn't look quite right.";
    }
    if (!fields.message.trim()) {
      next.message = "Write a short message so I know what you have in mind.";
    } else if (fields.message.trim().length < 10) {
      next.message = "A little more detail would help — at least 10 characters.";
    }
    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${fields.name.trim()}`);
    const body = encodeURIComponent(
      `${fields.message.trim()}\n\n— ${fields.name.trim()}\n${fields.email.trim()}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Your email client should open with the message ready to send.");
  };

  const fieldClass = (hasError: boolean) =>
    `w-full border-b bg-transparent py-3 text-[15px] text-ink outline-none transition-colors duration-300 placeholder:text-muted/50 ${
      hasError ? "border-error" : "border-line focus:border-accent"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div>
        <label htmlFor="name" className="overline mb-2 block text-muted">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="How should I address you?"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass(Boolean(errors.name))}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-xs text-error">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="overline mb-2 block text-muted">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass(Boolean(errors.email))}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-xs text-error">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="overline mb-2 block text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell me about your idea, question, or just say hello..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass(Boolean(errors.message))} resize-none`}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-error">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-1">
        <button type="submit" className="btn-primary group">
          Send message
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>
        {status && (
          <p role="status" className="max-w-xs text-xs leading-5 text-accent">
            {status}
          </p>
        )}
      </div>

      <p className="border-t border-line pt-5 text-xs leading-5 text-muted/70">
        This form opens your email client with a prefilled message — no data is
        stored or sent anywhere from this site.
      </p>
    </form>
  );
}
