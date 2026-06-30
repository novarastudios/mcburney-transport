"use server";

import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase/client";
import {
  contactFormSchema,
  quoteFormSchema,
  type ContactFormInput,
  type QuoteFormInput,
} from "@/lib/forms/validation";

export type FormState = {
  success: boolean;
  message: string;
};

type ContactPayload = ContactFormInput;

export type QuotePayload = QuoteFormInput;

function formatQuoteMessage(payload: QuotePayload): string {
  const loadTypes = [
    payload.ftl ? "FTL (full load)" : null,
    payload.ltl ? "LTL (part load)" : null,
  ].filter(Boolean);

  return [
    `Collection point: ${payload.collectionPoint}`,
    payload.collectionDate
      ? `Collection date: ${payload.collectionDate}`
      : null,
    `Delivery point: ${payload.deliveryPoint}`,
    `Product type: ${payload.productType}`,
    loadTypes.length ? `Load type: ${loadTypes.join(", ")}` : null,
    payload.ltlDetails
      ? `LTL pallet numbers / loading meters: ${payload.ltlDetails}`
      : null,
    `Transit time: ${payload.transitTime}`,
    payload.equipmentPreference
      ? `Equipment preference: ${payload.equipmentPreference}`
      : null,
    payload.specialRequirements
      ? `Special requirements:\n${payload.specialRequirements}`
      : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function submitForm(payload: ContactPayload): Promise<FormState> {
  const parsed = contactFormSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Please check your form details.",
    };
  }

  const data = parsed.data;

  if (data.honeypot) {
    return { success: true, message: "Thank you. We will be in touch shortly." };
  }

  if (!isSupabaseConfigured()) {
    return {
      success: false,
      message: "Unable to submit at this time. Please call our office directly.",
    };
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      success: false,
      message: "Unable to submit at this time. Please call our office directly.",
    };
  }

  const { error } = await supabase.from("form_submissions").insert({
    name: data.name,
    email: data.email,
    phone: data.phone ?? null,
    company: data.company ?? null,
    message: data.message,
    form_type: data.formType,
    created_at: new Date().toISOString(),
  });

  if (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again or contact us by phone.",
    };
  }

  return {
    success: true,
    message: "Thank you. A member of our team will be in touch shortly.",
  };
}

export async function submitQuoteForm(payload: QuotePayload): Promise<FormState> {
  const parsed = quoteFormSchema.safeParse(payload);
  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Please check your form details.",
    };
  }

  const data = parsed.data;

  return submitForm({
    name: `${data.firstName} ${data.lastName}`.trim(),
    email: data.email,
    phone: data.phone,
    company: data.collectionPoint,
    message: formatQuoteMessage(data),
    formType: "quote",
    honeypot: data.honeypot,
  });
}
