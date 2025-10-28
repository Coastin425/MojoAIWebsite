import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - MojoAI",
  description: "Privacy Policy for MojoAI text-based AI assistant service.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <a href="/" className="inline-flex items-center text-mojo-violet hover:text-cyan-600 transition-colors mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </a>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg mr-4">
              M
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-mojo-indigo">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Last Updated: October 28, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MojoAI LLC ("MojoAI," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the MojoAI text-based AI assistant service ("Service").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using the Service, you consent to the practices described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the Service.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">2.1 Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use MojoAI, we collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><span className="font-semibold">Phone Number:</span> Your mobile phone number is collected when you opt in to the Service by texting a keyword to the MojoAI number.</li>
              <li><span className="font-semibold">SMS Messages:</span> The text prompts you send to MojoAI and the responses you receive.</li>
              <li><span className="font-semibold">Account Information:</span> If you create an account or subscribe to a paid plan via our website, we may collect your name, email address, billing information, and payment details.</li>
            </ul>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may automatically collect certain technical information when you use the Service:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><span className="font-semibold">Usage Data:</span> Information about how you interact with the Service, including message frequency, timestamps, and feature usage.</li>
              <li><span className="font-semibold">Device and Network Information:</span> Mobile carrier information, device type, and IP address (if applicable).</li>
              <li><span className="font-semibold">Cookies and Tracking Technologies:</span> Our website may use cookies and similar technologies to enhance user experience and analyze site traffic.</li>
            </ul>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">2.3 Information from Third Parties</h3>
            <p className="text-gray-700 leading-relaxed">
              We may receive information from third-party service providers, including Twilio (our SMS messaging provider) and payment processors, to facilitate the Service.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><span className="font-semibold">To Provide the Service:</span> Process your SMS prompts, generate AI responses via third-party AI providers (e.g., Azure OpenAI), and deliver responses to you.</li>
              <li><span className="font-semibold">To Manage Your Account:</span> Create and maintain your account, process subscriptions, and handle billing.</li>
              <li><span className="font-semibold">To Improve the Service:</span> Analyze usage patterns, troubleshoot technical issues, and enhance Service features and performance.</li>
              <li><span className="font-semibold">To Communicate with You:</span> Send you service-related notifications, feature updates, promotional offers, and customer support messages (you may opt out of promotional messages).</li>
              <li><span className="font-semibold">To Ensure Compliance:</span> Enforce our Terms of Service, comply with legal obligations, and protect against fraud or misuse.</li>
            </ul>
          </section>

          {/* How We Share Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. However, we may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">4.1 Third-Party Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We share information with trusted third-party providers to operate the Service:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><span className="font-semibold">Twilio:</span> SMS messaging infrastructure. Your phone number and message content are transmitted to Twilio to send and receive messages. Twilio's privacy practices are governed by their own privacy policy.</li>
              <li><span className="font-semibold">Azure OpenAI Service:</span> AI model provider. Your text prompts are sent to Azure OpenAI to generate responses. Microsoft's privacy practices are governed by their own privacy policy.</li>
              <li><span className="font-semibold">Payment Processors:</span> To process subscription payments securely (e.g., Stripe or similar).</li>
              <li><span className="font-semibold">Analytics and Hosting Providers:</span> To host our website, analyze traffic, and monitor Service performance.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
              Important: When you use MojoAI, your prompts and data are transmitted to third-party AI providers. These providers may process your data according to their own privacy policies. We recommend not submitting sensitive personal information (e.g., Social Security numbers, financial account details, health records) through the Service.
            </p>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">4.2 Legal and Safety Purposes</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may disclose your information if required to do so by law or if we believe such action is necessary to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Comply with legal obligations, such as responding to subpoenas or court orders.</li>
              <li>Protect and defend the rights, property, or safety of MojoAI, our users, or the public.</li>
              <li>Investigate or prevent fraud, security breaches, or other illegal activities.</li>
            </ul>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3 mt-6">4.3 Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed">
              In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity. We will notify you via SMS or email before your information becomes subject to a different privacy policy.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information for as long as necessary to provide the Service and fulfill the purposes described in this Privacy Policy. Specifically:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><span className="font-semibold">SMS Messages:</span> Message history may be retained for up to 90 days for Service improvement and compliance purposes, unless you request deletion.</li>
              <li><span className="font-semibold">Account Information:</span> Retained while your account is active and for a reasonable period thereafter to comply with legal obligations.</li>
              <li><span className="font-semibold">Billing Information:</span> Retained as required by applicable law (typically 7 years for tax and accounting purposes).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You may request deletion of your data by contacting us at <a href="mailto:hello@mojoai.work" className="text-mojo-violet hover:text-cyan-600 underline">hello@mojoai.work</a>.
            </p>
          </section>

          {/* Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">6. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><span className="font-semibold">Access:</span> Request a copy of the personal information we hold about you.</li>
              <li><span className="font-semibold">Correction:</span> Request correction of inaccurate or incomplete information.</li>
              <li><span className="font-semibold">Deletion:</span> Request deletion of your personal information, subject to legal retention requirements.</li>
              <li><span className="font-semibold">Opt-Out:</span> Opt out of promotional messages by texting <span className="font-semibold">STOP PROMO</span> or opt out of the Service entirely by texting <span className="font-semibold">STOP</span>.</li>
              <li><span className="font-semibold">Data Portability:</span> Request a copy of your data in a structured, machine-readable format.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:hello@mojoai.work" className="text-mojo-violet hover:text-cyan-600 underline">hello@mojoai.work</a>. We will respond to your request within a reasonable timeframe as required by applicable law.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">7. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement reasonable technical, administrative, and physical security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While we strive to protect your information, we cannot guarantee absolute security. You acknowledge and accept the inherent risks of transmitting information over the internet.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              The Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected information from a child under 13, we will promptly delete such information. If you believe a child under 13 has provided us with personal information, please contact us at <a href="mailto:hello@mojoai.work" className="text-mojo-violet hover:text-cyan-600 underline">hello@mojoai.work</a>.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">9. Third-Party Links and Services</h2>
            <p className="text-gray-700 leading-relaxed">
              The Service may contain links to third-party websites or services (e.g., Azure OpenAI, Twilio). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">10. International Users</h2>
            <p className="text-gray-700 leading-relaxed">
              MojoAI is based in the United States. If you are accessing the Service from outside the United States, your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. By using the Service, you consent to the transfer of your information to the United States and other jurisdictions.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you via SMS or by posting a notice on our website. Your continued use of the Service after changes become effective constitutes your acceptance of the revised Privacy Policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-indigo-50 rounded-xl p-6">
              <p className="text-gray-800 font-semibold mb-2">MojoAI LLC</p>
              <p className="text-gray-700">Atlanta, Georgia</p>
              <p className="text-gray-700">
                Email: <a href="mailto:hello@mojoai.work" className="text-mojo-violet hover:text-cyan-600 underline">hello@mojoai.work</a>
              </p>
              <p className="text-gray-700">
                Website: <a href="https://mojoai.work" className="text-mojo-violet hover:text-cyan-600 underline">https://mojoai.work</a>
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500 italic">
              By using MojoAI, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>

        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <a href="#" className="text-mojo-violet hover:text-cyan-600 transition-colors font-medium">
            ↑ Back to Top
          </a>
        </div>
      </div>
    </main>
  );
}
