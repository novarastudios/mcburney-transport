"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { submitForm } from "@/app/actions/forms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Please provide more detail"),
  honeypot: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

type ContactFormProps = {
  formType: "contact" | "quote" | "subcontractor" | "careers";
  submitLabel?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  showCompany?: boolean;
};

export function ContactForm({
  formType,
  submitLabel = "Send Enquiry",
  messageLabel = "Message",
  messagePlaceholder = "Tell us about your requirements...",
  showCompany = true,
}: ContactFormProps) {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit((values) => {
    startTransition(async () => {
      const result = await submitForm({
        ...values,
        formType,
      });
      setSuccess(result.success);
      setFeedback(result.message);
      if (result.success) {
        reset();
      }
    });
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="honeypot">Leave blank</label>
        <input id="honeypot" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" autoComplete="name" {...register("name")} />
          {errors.name ? (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
          {errors.email ? (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </div>
        {showCompany ? (
          <div className="space-y-2">
            <Label htmlFor="company">Company (optional)</Label>
            <Input id="company" autoComplete="organization" {...register("company")} />
          </div>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{messageLabel}</Label>
        <Textarea
          id="message"
          placeholder={messagePlaceholder}
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" size="lg" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="animate-spin" />
            Sending...
          </>
        ) : (
          submitLabel
        )}
      </Button>

      {feedback ? (
        <p
          role="status"
          className={`text-sm ${success ? "text-green-700" : "text-red-600"}`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
