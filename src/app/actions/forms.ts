"use server";

import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase/client";

export type FormState = {
  success: boolean;
  message: string;
};

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  formType: "contact" | "quote" | "subcontractor" | "careers";
  honeypot?: string;
};

export async function submitForm(
  payload: ContactPayload,
): Promise<FormState> {
  if (payload.honeypot) {
    return { success: true, message: "Thank you. We will be in touch shortly." };
  }

  if (!isSupabaseConfigured()) {
    return {
      success: true,
      message:
        "Thank you for your enquiry. Our team will respond shortly. (Demo mode — connect Supabase to persist submissions.)",
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
    name: payload.name,
    email: payload.email,
    phone: payload.phone ?? null,
    company: payload.company ?? null,
    message: payload.message,
    form_type: payload.formType,
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
