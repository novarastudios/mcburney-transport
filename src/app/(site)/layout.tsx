import { SiteShell } from "@/components/layout/site-shell";
import { CookieConsent } from "@/components/layout/cookie-consent";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteShell>
      {children}
      <CookieConsent />
    </SiteShell>
  );
}
