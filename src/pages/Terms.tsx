import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none font-body text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Effective Date:</strong> January 1, 2026
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Last Updated:</strong> January 1, 2026
            </p>

            <p className="mb-6">
              Welcome to Tiva Creative Solutions Ltd ("Tiva Creative", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our website{" "}
              <a href="https://tivacreative.com/" className="text-primary hover:underline">
                https://tivacreative.com/
              </a>{" "}
              (the "Website") and any related content, services, consulting engagements, products, or communications provided by Tiva Creative.
            </p>

            <p className="mb-8">
              By accessing or using our Website or services, you agree to be bound by these Terms. If you do not agree, please do not use the Website or our services.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              1. ABOUT TIVA CREATIVE
            </h2>
            <p className="mb-4">
              Tiva Creative Solutions Ltd is a digital consulting and business transformation company providing advisory, strategy, product, operations, and digital transformation services to businesses, institutions, and organisations in Nigeria and across Africa.
            </p>
            <p className="mb-4">
              Information on this Website is provided for general informational purposes and does not constitute legal, financial, or professional advice unless expressly stated in a formal written agreement.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              2. USE OF THE WEBSITE
            </h2>
            <p className="mb-4">You agree to use the Website only for lawful purposes and in a manner consistent with these Terms.</p>
            <p className="mb-4">You must not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Use the Website for any fraudulent or unlawful purpose</li>
              <li>Attempt to gain unauthorised access to systems or data</li>
              <li>Interfere with the Website's functionality or security</li>
              <li>Copy, scrape, or misuse Website content without permission</li>
            </ul>
            <p className="mb-4">We reserve the right to suspend or terminate access to the Website for violations of these Terms.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              3. SERVICES & ENGAGEMENTS
            </h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              a. No Automatic Client Relationship
            </h3>
            <p className="mb-4">Use of this Website does not create a consulting, advisory, or client relationship between you and Tiva Creative.</p>
            <p className="mb-4">A formal client relationship is established only through:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>A signed agreement, contract, or statement of work (SOW)</li>
              <li>Written confirmation of scope, fees, and timelines</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              b. Scope of Services
            </h3>
            <p className="mb-4">All services provided by Tiva Creative are governed by written agreements that define:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Scope of work</li>
              <li>Deliverables</li>
              <li>Timelines</li>
              <li>Fees and payment terms</li>
            </ul>
            <p className="mb-4">Any work outside agreed scope requires written approval and may attract additional fees.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              4. INTELLECTUAL PROPERTY
            </h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              a. Our Intellectual Property
            </h3>
            <p className="mb-4">All content on the Website, including text, graphics, frameworks, methodologies, reminders, reports, designs, trademarks, logos, and proprietary materials, is owned by or licensed to Tiva Creative.</p>
            <p className="mb-4">You may not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Copy, reproduce, distribute, or modify our content</li>
              <li>Use our materials for commercial purposes</li>
              <li>Present our frameworks or methodologies as your own</li>
            </ul>
            <p className="mb-4">without prior written consent.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              b. Client Materials
            </h3>
            <p className="mb-4">Unless otherwise stated in a written agreement:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Pre-existing intellectual property remains the property of its original owner</li>
              <li>Custom deliverables may be licensed to clients for internal use only</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              5. PAYMENTS & FEES
            </h2>
            <p className="mb-4">All fees, payment schedules, and billing terms are defined in written agreements.</p>
            <p className="mb-4">Unless otherwise agreed:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Fees are non-refundable</li>
              <li>Late payments may attract penalties or suspension of services</li>
            </ul>
            <p className="mb-4">We reserve the right to withhold deliverables for unpaid invoices.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              6. DISCLAIMERS
            </h2>
            <p className="mb-4">The Website and its content are provided on an "as is" and "as available" basis.</p>
            <p className="mb-4">We do not guarantee:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Specific business results or outcomes</li>
              <li>Revenue growth or performance improvements</li>
              <li>Uninterrupted or error-free Website access</li>
            </ul>
            <p className="mb-4">Business results depend on multiple factors beyond our control, including leadership decisions and market conditions.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              7. LIMITATION OF LIABILITY
            </h2>
            <p className="mb-4">To the fullest extent permitted by law:</p>
            <p className="mb-4">Tiva Creative shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Use or inability to use the Website</li>
              <li>Reliance on Website content</li>
              <li>Services provided under an agreement</li>
            </ul>
            <p className="mb-4">Our total liability shall not exceed the fees paid to us for the specific services giving rise to the claim.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              8. CONFIDENTIALITY
            </h2>
            <p className="mb-4">We respect confidentiality obligations as defined in client agreements. However, information submitted through the Website is not automatically treated as confidential unless explicitly stated in writing.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              9. THIRD-PARTY LINKS
            </h2>
            <p className="mb-4">The Website may contain links to third-party websites. We are not responsible for the content, policies, or practices of third-party sites.</p>
            <p className="mb-4">Accessing third-party links is at your own risk.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              10. TERMINATION
            </h2>
            <p className="mb-4">We reserve the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Suspend or terminate Website access</li>
              <li>Decline or discontinue services</li>
            </ul>
            <p className="mb-4">at our discretion, including for violations of these Terms or applicable agreements.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              11. GOVERNING LAW
            </h2>
            <p className="mb-4">These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to conflict of law principles.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              12. CHANGES TO THESE TERMS
            </h2>
            <p className="mb-4">We may update these Terms from time to time. Changes take effect upon posting on the Website. Continued use of the Website constitutes acceptance of updated Terms.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              13. CONTACT INFORMATION
            </h2>
            <p className="mb-4">If you have questions about these Terms, please contact:</p>
            <ul className="list-none mb-4 space-y-1">
              <li><strong>Email:</strong> info@tivacreative.com</li>
              <li><strong>Website:</strong>{" "}
                <a href="https://tivacreative.com" className="text-primary hover:underline">
                  https://tivacreative.com
                </a>
              </li>
            </ul>
            <p className="mt-8 font-semibold text-foreground">Tiva Creative Solutions Ltd</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
