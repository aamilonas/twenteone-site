import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ContactForm } from "@/components/sections/contact-form";
import { MotionSection } from "@/components/motion-wrapper";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin your journey to autonomous growth and lasting impact. Connect with our strategists.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        headline="Connect with Our Strategists"
        subheadline="Begin your journey to autonomous growth and lasting impact."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <MotionSection className="lg:col-span-3">
              <ContactForm />
            </MotionSection>

            {/* Contact Info */}
            <MotionSection className="lg:col-span-2">
              <div className="rounded-xl border bg-card p-8">
                <h3>Get in Touch</h3>
                <p className="mt-4 text-muted-foreground">
                  Ready to take the next step? Fill out the form and one of our
                  experienced strategists will be in touch to discuss how we can
                  help your organization grow.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a
                        href="mailto:info@twenteone.com"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        info@twenteone.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>
    </>
  );
}
