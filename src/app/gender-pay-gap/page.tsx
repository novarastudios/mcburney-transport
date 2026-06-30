import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PolicyHeader } from "@/components/sections/policy-prose";
import { GENDER_PAY_GAP } from "@/lib/content/policies";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: GENDER_PAY_GAP.title,
  description: GENDER_PAY_GAP.description,
  path: "/gender-pay-gap",
});

export default function GenderPayGapPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: GENDER_PAY_GAP.title, path: "/gender-pay-gap" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <Breadcrumbs items={breadcrumbs} />
      <article className="bg-paper">
        <PolicyHeader
          title={GENDER_PAY_GAP.title}
          description={GENDER_PAY_GAP.description}
          eyebrow="Reporting"
        />
        <div className="site-container max-w-3xl py-12 lg:py-16">
          {GENDER_PAY_GAP.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-[1.75] text-brand-muted [&+&]:mt-4"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Hourly pay
            </h2>
            <div
              className="mt-4 border-b border-[color:var(--hairline)]"
              aria-hidden
            />
            {GENDER_PAY_GAP.hourlyPay.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-[1.75] text-brand-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 overflow-x-auto">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Pay quartiles
            </h2>
            <div
              className="mt-4 border-b border-[color:var(--hairline)]"
              aria-hidden
            />
            <table className="mt-6 w-full min-w-[28rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[color:var(--hairline)]">
                  <th
                    scope="col"
                    className="pb-3 pr-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted"
                  >
                    Quartile
                  </th>
                  <th
                    scope="col"
                    className="pb-3 pr-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted"
                  >
                    Men
                  </th>
                  <th
                    scope="col"
                    className="pb-3 font-display text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted"
                  >
                    Women
                  </th>
                </tr>
              </thead>
              <tbody>
                {GENDER_PAY_GAP.quartiles.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-[color:var(--hairline)]"
                  >
                    <th
                      scope="row"
                      className="py-4 pr-4 text-left font-medium text-ink"
                    >
                      {row.label}
                    </th>
                    <td className="tabular py-4 pr-4 text-brand-muted">
                      {row.men}
                    </td>
                    <td className="tabular py-4 text-brand-muted">
                      {row.women}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Bonus pay
            </h2>
            <div
              className="mt-4 border-b border-[color:var(--hairline)]"
              aria-hidden
            />
            {GENDER_PAY_GAP.bonus.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-[1.75] text-brand-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Context
            </h2>
            <div
              className="mt-4 border-b border-[color:var(--hairline)]"
              aria-hidden
            />
            {GENDER_PAY_GAP.context.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-[1.75] text-brand-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-12 border-t border-[color:var(--hairline)] pt-8 text-base leading-[1.75] text-ink">
            <span className="font-medium">{GENDER_PAY_GAP.signoff.name}</span>
            <br />
            <span className="text-brand-muted">
              {GENDER_PAY_GAP.signoff.role}
            </span>
          </p>
        </div>
      </article>
    </>
  );
}
