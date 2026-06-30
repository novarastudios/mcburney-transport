import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "footer";
};

export function BrandLogo({
  className,
  priority = false,
  variant = "default",
}: BrandLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0", className)}>
      <Image
        src="/images/mcburney-logo.png"
        alt="McBurney Transport Group"
        width={532}
        height={266}
        priority={priority}
        className={cn(
          "h-auto w-auto object-contain",
          variant === "default" ? "max-h-14 w-auto sm:max-h-16" : "max-h-[5.5rem] w-auto sm:max-h-24",
        )}
      />
    </Link>
  );
}
