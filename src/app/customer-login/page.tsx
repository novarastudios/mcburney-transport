import type { Metadata } from "next";
import { CustomerLoginForm } from "./customer-login-form";

export const metadata: Metadata = {
  title: "System Login | McBurney Transport Group",
  description: "Secure customer portal login for McBurney Transport Group users and clients.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CustomerLoginPage() {
  return <CustomerLoginForm />;
}
