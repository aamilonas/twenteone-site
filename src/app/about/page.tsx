import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ClientLogos } from "@/components/sections/client-logos";
import { MotionSection } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "About",
  description:
    "Decades of leadership, a philosophy of mentorship, and a commitment to your success.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        headline="Our Story, Your Future"
        subheadline="Decades of leadership, a philosophy of mentorship, and a commitment to your success."
      />

      {/* Founding Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionSection className="mx-auto max-w-3xl">
            <h2 className="text-center">
              The TwenteOne Difference: Mentorship-Driven Growth
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                TwenteOne was born from the vision of its founders, who spent
                the last 30 years crafting and executing successful strategies
                that fueled the growth of numerous companies. Through their
                extensive experience at Fortune 500 organizations, they
                discovered that the key to success lies not just in leadership,
                but in mentorship.
              </p>
              <p>
                They believe that a great leader does more than manage teams —
                they inspire, guide, and coach them to reach their full
                potential. This is especially critical for growth-stage founders
                who have built remarkable businesses but find themselves trapped
                in a &ldquo;gilded cage&rdquo; of their own making — drowning in
                operations, lacking the experienced middle management to scale,
                and struggling to envision a business that thrives without their
                constant oversight.
              </p>
              <p>
                With this philosophy at the core, TwenteOne was founded to help
                businesses unlock their true growth potential by providing
                experienced leadership and tailored strategies. By combining
                years of hands-on expertise with a deep commitment to empowering
                teams, TwenteOne helps companies thrive in today&apos;s dynamic
                and competitive marketplace.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MotionSection className="mx-auto max-w-3xl">
            <h2 className="text-center">
              Experienced Consultants with Real Hands-on Leadership Experience
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              TwenteOne&apos;s consultants are seasoned professionals with
              extensive experience as executive leaders in Fortune 500 companies.
              They bring a proven track record of delivering exceptional results,
              having held senior leadership roles across a range of industries.
              With a deep understanding of strategic management, operational
              efficiency, and organizational development, they possess the
              expertise to drive transformative change and elevate business
              performance. Their ability to navigate complex challenges and
              deliver sustainable growth has earned them a reputation as trusted
              advisors for organizations looking to achieve long-term success.
            </p>
          </MotionSection>
        </div>
      </section>

      <ClientLogos />
    </>
  );
}
