"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ServiceCard } from "@/components/sections/service-card";
import { staggerContainer } from "@/lib/animations";
import type { Service } from "@/lib/data/services";
import { cn } from "@/lib/utils";

interface ServicesGridProps {
  services: Service[];
  className?: string;
}

export function ServicesGrid({ services, className }: ServicesGridProps) {
  const prefersReducedMotion = useReducedMotion();

  const Wrapper = prefersReducedMotion ? "div" : motion.div;
  const animProps = prefersReducedMotion
    ? {}
    : {
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
      };

  return (
    <Wrapper
      {...animProps}
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.slug}
          title={service.title}
          description={service.shortDescription}
          href={`/services/${service.slug}`}
        />
      ))}
    </Wrapper>
  );
}
