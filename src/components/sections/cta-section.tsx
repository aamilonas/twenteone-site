import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/motion-wrapper";

interface CTASectionProps {
  headline: string;
  body: string;
  ctaText: string;
  ctaHref: string;
}

export function CTASection({
  headline,
  body,
  ctaText,
  ctaHref,
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-obsidian via-charcoal to-forest py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-white">{headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            {body}
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-jade text-obsidian hover:bg-mint"
            >
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
