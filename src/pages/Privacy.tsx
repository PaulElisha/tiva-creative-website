import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none font-body text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Effective Date:</strong> January 1, 2026
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Last Updated:</strong> January 1, 2026
            </p>

            <p className="mb-6">
              Welcome to Tiva Creative Solutions Ltd ("Tiva Creative", "we", "us", or "our"). Your privacy matters to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website{" "}
              <a href="https://tivacreative.com/" className="text-primary hover:underline">
                https://tivacreative.com/
              </a>{" "}
              ("Website"), interact with our services, or otherwise engage with us.
            </p>

            <p className="mb-8">
              By accessing or using the Website, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the Website.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              1. INFORMATION WE COLLECT
            </h2>
            <p className="mb-4">
              We collect information that you voluntarily provide and information collected automatically when you interact with the Website.
            </p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              a. Personal Information You Provide
            </h3>
            <p className="mb-4">You may provide certain personal information, including but not limited to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Contact details:</strong> Name, email address, phone number, company name, job title</li>
              <li><strong>Communication data:</strong> Messages, inquiries, feedback, comments</li>
              <li><strong>Professional information:</strong> LinkedIn/social profiles, business details</li>
              <li><strong>Content submissions:</strong> Files, documents, or messages submitted via forms</li>
            </ul>
            <p className="mb-4">Examples of where you might submit personal information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Contact forms</li>
              <li>Newsletter signups</li>
              <li>Service inquiries</li>
              <li>Event or program registrations</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              b. Automatically Collected Information
            </h3>
            <p className="mb-4">When you visit the Website, we may collect certain information about your device and usage, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring/exit pages</li>
              <li>Clickstream data</li>
              <li>Interaction data (e.g., scrolls, clicks)</li>
            </ul>
            <p className="mb-4">This information may be collected using cookies, web beacons, pixels, and similar technologies.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              2. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="mb-4">We use collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Provide & improve services:</strong> Facilitate service delivery, website functionality, and content personalization</li>
              <li><strong>Communication:</strong> Respond to inquiries, send newsletters, updates, and marketing communications (with consent where required)</li>
              <li><strong>Analytics & performance:</strong> Understand usage patterns, optimize experience, and improve Website features</li>
              <li><strong>Security & compliance:</strong> Detect fraud, enforce policies, and protect user data</li>
              <li><strong>Legal obligations:</strong> As required to comply with law or protect rights</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              3. USE OF COOKIES & SIMILAR TECHNOLOGIES
            </h2>
            <p className="mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Enable core Website functionality</li>
              <li>Analyze Website usage and performance</li>
              <li>Personalize content and ads (with consent where applicable)</li>
            </ul>
            <p className="mb-4">You may manage cookie preferences through your browser settings. Blocking cookies may affect your experience on the Website.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              4. HOW WE SHARE YOUR INFORMATION
            </h2>
            <p className="mb-4">We may share information in the following scenarios:</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              a. Service Providers & Partners
            </h3>
            <p className="mb-4">We may share data with trusted third-party providers who perform services on our behalf (e.g., hosting, analytics, CRM, email delivery). These parties are contractually bound to protect your data.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              b. Legal Requirements
            </h3>
            <p className="mb-4">We may disclose personal information if required by law, regulation, legal process, or to enforce our terms and protect rights, property, or safety.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              c. Business Transfers
            </h3>
            <p className="mb-4">In connection with a merger, acquisition, reorganization, or sale of assets, user data may be transferred as part of the transaction, subject to confidentiality protections.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">
              d. With Your Consent
            </h3>
            <p className="mb-4">We may share information for other purposes with your explicit consent.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              5. DATA RETENTION
            </h2>
            <p className="mb-4">We retain personal information for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required or permitted by law.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              6. SECURITY OF YOUR INFORMATION
            </h2>
            <p className="mb-4">We implement reasonable administrative, technical, and physical safeguards to protect your data against unauthorized access, loss, or misuse. However, no data transmission over the Internet is 100% secure.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              7. INTERNATIONAL DATA TRANSFERS
            </h2>
            <p className="mb-4">Your information may be stored and processed in countries outside your own, including Nigeria, the United States, or European Union jurisdictions. By using the Website, you consent to the transfer of your data to these locations.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              8. YOUR RIGHTS
            </h2>
            <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Access your personal information</li>
              <li>Correct or update information</li>
              <li>Delete or restrict processing</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent (when applicable)</li>
            </ul>
            <p className="mb-4">To exercise your rights, contact us using the details below.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              9. THIRD-PARTY LINKS
            </h2>
            <p className="mb-4">The Website may include links to third-party sites. These external sites have their own privacy policies, and we are not responsible for their content or practices.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              10. CHILDREN'S PRIVACY
            </h2>
            <p className="mb-4">The Website is not intended for children under 16 years. We do not knowingly collect personal information from children under this age.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              11. CHANGES TO THIS POLICY
            </h2>
            <p className="mb-4">We may update this policy periodically. The "Effective Date" at the top reflects the latest revision. Continued use of the Website after changes indicates acceptance.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4">
              12. CONTACT INFORMATION
            </h2>
            <p className="mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach us at:</p>
            <ul className="list-none mb-4 space-y-1">
              <li><strong>Email:</strong> info@tivacreative.com</li>
              <li><strong>Website:</strong>{" "}
                <a href="https://tivacreative.com" className="text-primary hover:underline">
                  https://tivacreative.com
                </a>
              </li>
              <li><strong>Address:</strong> Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
