import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { MotionSection } from "@/components/motion-wrapper";
import { services } from "@/lib/data/services";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "TwenteOne delivers tailored solutions designed to unlock your organization's true growth potential.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        headline="Our Expertise, Your Advantage"
        subheadline="TwenteOne delivers tailored solutions designed to unlock your organization's true growth potential."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <MotionSection key={service.slug}>
                <div
                  className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <h2>{service.title}</h2>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                      {service.longDescription}
                    </p>
                    <div className="mt-8">
                      <Button asChild variant="outline">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2"
                        >
                          Explore Service <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex aspect-[4/3] flex-1 items-center justify-center rounded-xl border border-border/50 bg-muted/30">
                    <span className="text-sm text-muted-foreground">
                      {service.title}
                    </span>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
