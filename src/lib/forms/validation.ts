import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  message: z.string().trim().min(10, "Please provide more detail"),
  formType: z.enum(["contact", "quote", "subcontractor", "careers"]),
  honeypot: z.string().max(0).optional(),
});

export const quoteFormSchema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name"),
  lastName: z.string().trim().min(1, "Please enter your last name"),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().optional(),
  collectionPoint: z.string().trim().min(1, "Please enter a collection point"),
  collectionDate: z.string().trim().optional(),
  deliveryPoint: z.string().trim().min(1, "Please enter a delivery point"),
  productType: z.string().trim().min(1, "Please select a product type"),
  ftl: z.boolean(),
  ltl: z.boolean(),
  ltlDetails: z.string().trim().optional(),
  transitTime: z.string().trim().min(1, "Please select a transit time"),
  equipmentPreference: z.string().trim().optional(),
  specialRequirements: z.string().trim().optional(),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type QuoteFormInput = z.infer<typeof quoteFormSchema>;
