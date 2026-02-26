import { MotionSection } from "@/components/motion-wrapper";

const companies = [
  "Google",
  "Walmart",
  "CBC",
  "Ontario Health",
  "Southwestern",
  "Unilever",
  "Ortho",
];

export function ClientLogos() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <h3 className="text-center text-muted-foreground">
            Our Consultants Have Led at the World&apos;s Best
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground/70">
            TwenteOne&apos;s strategists bring hands-on executive experience from
            Fortune 500 and industry-leading organizations.
          </p>
        </MotionSection>
        <div className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-7">
          {companies.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-lg border border-border/50 bg-muted/30 px-4 py-6 text-sm font-medium text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
