"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { softReveal } from "@/lib/animations";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
}

export function HeroSection({
  headline,
  subheadline,
  ctaText,
  ctaHref,
}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const Wrapper = prefersReducedMotion ? "div" : motion.div;
  const animProps = prefersReducedMotion
    ? {}
    : { variants: softReveal, initial: "hidden", animate: "visible" };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-obsidian via-charcoal via-30% to-forest py-24 sm:py-32 lg:py-40">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald/5 to-jade/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Wrapper {...animProps} className="mx-auto max-w-3xl text-center">
          <h1 className="text-white">{headline}</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            {subheadline}
          </p>
          {ctaText && ctaHref && (
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden bg-jade text-obsidian hover:bg-mint"
              >
                <Link href={ctaHref}>{ctaText}</Link>
              </Button>
            </div>
          )}
        </Wrapper>
      </div>
    </section>
  );
}
