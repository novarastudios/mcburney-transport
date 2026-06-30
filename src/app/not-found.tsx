import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-32">
      <div className="max-w-lg text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-mcb-red">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-brand-black">
          Page not found
        </h1>
        <p className="mt-4 text-brand-muted">
          The page you are looking for may have moved or no longer exists.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </section>
  );
}
