"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { scaleIn } from "@/lib/animations";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  const prefersReducedMotion = useReducedMotion();

  const Wrapper = prefersReducedMotion ? "div" : motion.div;
  const animProps = prefersReducedMotion
    ? {}
    : {
        variants: scaleIn,
        whileHover: { scale: 1.02, transition: { duration: 0.2 } },
      };

  return (
    <Wrapper {...animProps}>
      <Link href={href} className="block h-full">
        <Card className="group h-full transition-shadow hover:shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-xl">{title}</CardTitle>
            <CardDescription className="mt-2 text-sm leading-relaxed">
              {description}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
              Learn More{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </Wrapper>
  );
}
