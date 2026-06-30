"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "mcb-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[color:var(--hairline)] bg-ink p-4 shadow-[var(--shadow-warm)] sm:p-5"
    >
      <div className="site-container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-white/80">
          We use essential cookies to operate this site. See our{" "}
          <Link href="/cookies" className="text-mcb-cyan underline-offset-4 hover:underline">
            Cookies policy
          </Link>{" "}
          for details.
        </p>
        <Button type="button" size="sm" onClick={accept} className="shrink-0">
          Accept
        </Button>
      </div>
    </div>
  );
}
