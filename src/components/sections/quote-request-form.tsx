"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { submitQuoteForm } from "@/app/actions/forms";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const PRODUCT_TYPES = [
  "Temperature Controlled Frozen",
  "Temperature Controlled Chilled",
  "Ambient Foodstuffs",
  "Other",
] as const;

const TRANSIT_TIMES = ["24HR", "48HR"] as const;

const quoteSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  collectionPoint: z.string().min(1, "Please enter a collection point"),
  collectionDate: z.string().optional(),
  deliveryPoint: z.string().min(1, "Please enter a delivery point"),
  productType: z.enum(PRODUCT_TYPES, {
    message: "Please select a product type",
  }),
  ftl: z.boolean(),
  ltl: z.boolean(),
  ltlDetails: z.string().optional(),
  transitTime: z.enum(TRANSIT_TIMES, {
    message: "Please select a transit time",
  }),
  equipmentPreference: z.string().optional(),
  specialRequirements: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const fieldClassName =
  "flex h-11 w-full rounded-none border border-brand-black/15 bg-white px-3 py-2 text-sm text-brand-black placeholder:text-brand-muted/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mcb-red focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50";

type FormRowProps = {
  label: string;
  htmlFor?: string;
  error?: string;
  stacked?: boolean;
  children: React.ReactNode;
};

function FormRow({ label, htmlFor, error, stacked = false, children }: FormRowProps) {
  return (
    <div
      className={cn(
        "border-b border-brand-black/10 py-4 last:border-b-0",
        stacked
          ? "space-y-2"
          : "grid gap-3 sm:grid-cols-[minmax(0,11rem)_1fr] sm:items-center",
      )}
    >
      <Label
        htmlFor={htmlFor}
        className={cn(
          "text-sm font-normal text-brand-black",
          !stacked && "sm:pt-0.5",
        )}
      >
        {label}
      </Label>
      <div className="min-w-0">
        {children}
        {error ? <p className="mt-1.5 text-sm text-red-600">{error}</p> : null}
      </div>
    </div>
  );
}

export function QuoteRequestForm() {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      ftl: false,
      ltl: false,
    },
  });

  const onSubmit = handleSubmit((values) => {
    startTransition(async () => {
      const result = await submitQuoteForm(values);
      setSuccess(result.success);
      setFeedback(result.message);
      if (result.success) {
        reset();
      }
    });
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="quote-honeypot">Leave blank</label>
        <input
          id="quote-honeypot"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <FormRow label="First Name" htmlFor="firstName" error={errors.firstName?.message}>
        <Input
          id="firstName"
          autoComplete="given-name"
          className={fieldClassName}
          {...register("firstName")}
        />
      </FormRow>

      <FormRow label="Last Name" htmlFor="lastName" error={errors.lastName?.message}>
        <Input
          id="lastName"
          autoComplete="family-name"
          className={fieldClassName}
          {...register("lastName")}
        />
      </FormRow>

      <FormRow label="Email" htmlFor="email" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          className={fieldClassName}
          {...register("email")}
        />
      </FormRow>

      <FormRow label="Phone Number" htmlFor="phone">
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          className={fieldClassName}
          {...register("phone")}
        />
      </FormRow>

      <FormRow
        label="Collection Point From"
        htmlFor="collectionPoint"
        error={errors.collectionPoint?.message}
      >
        <Input
          id="collectionPoint"
          className={fieldClassName}
          {...register("collectionPoint")}
        />
      </FormRow>

      <FormRow label="Collection Date if known" htmlFor="collectionDate">
        <Input
          id="collectionDate"
          type="date"
          className={fieldClassName}
          {...register("collectionDate")}
        />
      </FormRow>

      <FormRow
        label="Delivery point to"
        htmlFor="deliveryPoint"
        error={errors.deliveryPoint?.message}
      >
        <Input
          id="deliveryPoint"
          className={fieldClassName}
          {...register("deliveryPoint")}
        />
      </FormRow>

      <FormRow
        label="Product Type"
        htmlFor="productType"
        stacked
        error={errors.productType?.message}
      >
        <select
          id="productType"
          className={fieldClassName}
          defaultValue=""
          {...register("productType")}
        >
          <option value="" disabled>
            ---
          </option>
          {PRODUCT_TYPES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormRow>

      <FormRow label="FTL (full load)" htmlFor="ftl">
        <input
          id="ftl"
          type="checkbox"
          className="h-4 w-4 accent-mcb-red"
          {...register("ftl")}
        />
      </FormRow>

      <FormRow label="LTL (part load)" htmlFor="ltl">
        <input
          id="ltl"
          type="checkbox"
          className="h-4 w-4 accent-mcb-red"
          {...register("ltl")}
        />
      </FormRow>

      <FormRow label="LTL Pallet Numbers or Loading Meters" htmlFor="ltlDetails">
        <Input id="ltlDetails" className={fieldClassName} {...register("ltlDetails")} />
      </FormRow>

      <FormRow
        label="Transit Time"
        htmlFor="transitTime"
        stacked
        error={errors.transitTime?.message}
      >
        <select
          id="transitTime"
          className={fieldClassName}
          defaultValue=""
          {...register("transitTime")}
        >
          <option value="" disabled>
            ---
          </option>
          {TRANSIT_TIMES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </FormRow>

      <FormRow label="Equipment Preference if known" htmlFor="equipmentPreference">
        <Input
          id="equipmentPreference"
          className={fieldClassName}
          {...register("equipmentPreference")}
        />
      </FormRow>

      <FormRow label="Any Special Requirements" htmlFor="specialRequirements">
        <Textarea
          id="specialRequirements"
          className="min-h-[100px] rounded-none border-brand-black/15"
          {...register("specialRequirements")}
        />
      </FormRow>

      <div className="border-t border-brand-black/10 pt-5">
        <p className="mb-3 text-sm font-medium text-brand-black">Security</p>
        <div
          className="inline-flex max-w-full items-center gap-3 rounded border border-brand-black/15 bg-[#f9f9f9] px-4 py-3"
          aria-hidden
        >
          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-brand-black/20 bg-white" />
          <span className="text-sm text-brand-black">I&apos;m not a robot</span>
          <span className="ml-4 hidden text-xs text-brand-muted sm:inline">
            reCAPTCHA
          </span>
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-10 min-w-[7.5rem] items-center justify-center rounded-sm border border-brand-black/20 bg-[#dddddd] px-8 text-sm font-medium text-brand-black transition-colors hover:bg-[#cfcfcf] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>

        {feedback ? (
          <p
            role="status"
            className={`mt-4 text-sm ${success ? "text-green-700" : "text-red-600"}`}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
