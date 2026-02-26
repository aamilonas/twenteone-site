import { HeroSection } from "@/components/sections/hero-section";
import { ServiceCard } from "@/components/sections/service-card";
import { ClientLogos } from "@/components/sections/client-logos";
import { CTASection } from "@/components/sections/cta-section";
import { MotionSection } from "@/components/motion-wrapper";
import { services } from "@/lib/data/services";
import { ServicesGrid } from "@/components/sections/services-grid";

export default function Home() {
  return (
    <>
      <HeroSection
        headline="Tailored Solutions, Lasting Impact."
        subheadline="Empowering growth-stage leaders to transcend operational plateaus and achieve autonomous, sustainable growth."
        ctaText="Discover Your Growth Path"
        ctaHref="/services"
      />

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionSection className="mx-auto max-w-3xl">
            <h2 className="text-center">
              Beyond Frameworks: The Power of Mentorship
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              TwenteOne was born from the vision of its founders, who spent the
              last 30 years crafting and executing successful strategies that
              fueled the growth of numerous companies. Through their extensive
              experience, they discovered that the key to success lies not just
              in leadership, but in mentorship. They believe that a great leader
              does more than manage teams — they inspire, guide, and coach them
              to reach their full potential.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              With this philosophy at the core, TwenteOne was founded to help
              businesses unlock their true growth potential by providing
              experienced leadership and tailored strategies. By combining years
              of hands-on expertise with a deep commitment to empowering teams,
              TwenteOne helps companies thrive in today&apos;s dynamic and
              competitive marketplace.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <h2 className="text-center">
              Our Expertise: Your Strategic Advantage
            </h2>
          </MotionSection>
          <ServicesGrid services={services} className="mt-12" />
        </div>
      </section>

      <ClientLogos />

      <CTASection
        headline="Ready to Transform Your Business?"
        body="Connect with our seasoned strategists to discuss how TwenteOne can help you transcend operational plateaus and achieve lasting impact."
        ctaText="Connect with Our Strategists"
        ctaHref="/contact"
      />
    </>
  );
}
