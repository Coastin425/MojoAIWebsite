import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - MojoAI",
  description: "Terms and Conditions for using MojoAI text-based AI assistant service.",
};

export default function TermsPage() {
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
              Terms of Service
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
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to MojoAI. These Terms of Service ("Terms") govern your access to and use of the MojoAI text-based AI assistant service ("Service"), operated by MojoAI LLC ("MojoAI," "we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to these Terms, you may not access or use the Service.
            </p>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">2. Service Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MojoAI provides a text-based conversational AI assistant accessible via SMS messaging. Users can send text prompts to MojoAI and receive AI-generated responses for tasks including note-taking, reminders, information retrieval, and general conversational assistance.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Important: MojoAI does not host, create, or develop AI models. We integrate with third-party AI service providers (including but not limited to Azure OpenAI Service) to deliver AI capabilities. Your use of the Service is subject to the acceptable use policies and limitations of these third-party providers.
            </p>
          </section>

          {/* SMS Opt-In */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">3. SMS Opt-In and Communication</h2>
            
            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">3.1 Opting In</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use the Service, you must opt in by texting any of the following keywords to the MojoAI phone number: <span className="font-semibold">START</span>, <span className="font-semibold">YES</span>, <span className="font-semibold">GO</span>, <span className="font-semibold">ENGAGE</span>, <span className="font-semibold">LAUNCH</span>, <span className="font-semibold">INITIATE</span>, <span className="font-semibold">AFFIRMATIVE</span>, or <span className="font-semibold">BEGIN</span>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By opting in, you consent to receive automated SMS messages from MojoAI, including AI-generated responses to your prompts and occasional service announcements.
            </p>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">3.2 Message Frequency and Charges</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Message frequency depends on your usage. Standard message and data rates may apply as determined by your mobile carrier. You are responsible for all charges incurred by using the Service.
            </p>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">3.3 Opting Out</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may opt out at any time by texting <span className="font-semibold">STOP</span>, <span className="font-semibold">CANCEL</span>, <span className="font-semibold">UNSUBSCRIBE</span>, or <span className="font-semibold">QUIT</span> to the MojoAI number. You will receive a confirmation message upon opt-out. After opting out, you will no longer receive messages from MojoAI unless you opt in again.
            </p>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">3.4 Help and Support</h3>
            <p className="text-gray-700 leading-relaxed">
              For assistance, text <span className="font-semibold">HELP</span> to the MojoAI number or contact us at <a href="mailto:hello@mojoai.work" className="text-mojo-violet hover:text-cyan-600 underline">hello@mojoai.work</a>.
            </p>
          </section>

          {/* Free Tier and Subscription */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">4. Free Tier and Subscription Plans</h2>
            
            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">4.1 Free Tier</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon opting in, each user receives up to <span className="font-semibold">5 free AI-generated responses per day</span>. Free tier limits reset daily at midnight UTC.
            </p>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">4.2 Unlimited Subscription</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For unlimited access to MojoAI responses and premium features, you may subscribe to a full plan by visiting <a href="https://mojoai.work" className="text-mojo-violet hover:text-cyan-600 underline">https://mojoai.work</a>. Subscription pricing and billing terms will be provided at the time of purchase.
            </p>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">4.3 Feature Updates and Promotional Messages</h3>
            <p className="text-gray-700 leading-relaxed">
              MojoAI may occasionally send SMS notifications regarding new features (such as image support, new AI models, or integrations) and special subscription offers. You may opt out of promotional messages by replying <span className="font-semibold">STOP PROMO</span> while continuing to use the core Service, or opt out entirely by texting <span className="font-semibold">STOP</span>.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">5. User Responsibilities and Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use the Service in compliance with all applicable laws and regulations. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Use the Service for any unlawful, harmful, or fraudulent purpose.</li>
              <li>Attempt to interfere with, disrupt, or gain unauthorized access to the Service or related systems.</li>
              <li>Use the Service to transmit spam, malware, or other malicious content.</li>
              <li>Impersonate any person or entity, or falsely represent your affiliation with any person or entity.</li>
              <li>Submit prompts that violate third-party rights, including intellectual property, privacy, or publicity rights.</li>
              <li>Use the Service in any manner that violates the acceptable use policies of our third-party AI providers (e.g., Azure OpenAI Service).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to suspend or terminate your access to the Service if you violate these Terms or engage in conduct that we determine, in our sole discretion, to be harmful or inappropriate.
            </p>
          </section>

          {/* Third-Party AI Services */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">6. Third-Party AI Services and Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MojoAI relies on third-party AI service providers, including Azure OpenAI Service, to generate responses. We do not create, train, or host AI models. The quality, accuracy, and appropriateness of AI-generated content are subject to the capabilities and limitations of these third-party services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
              AI-generated responses may contain errors, inaccuracies, or inappropriate content. You acknowledge that MojoAI does not guarantee the accuracy, completeness, or reliability of any AI-generated content.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You agree that your use of third-party AI services through MojoAI is at your own risk, and you release MojoAI from any liability arising from AI-generated content.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Service, including all software, text, graphics, logos, and other content (excluding user-submitted prompts and AI-generated responses), is owned by MojoAI LLC or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You retain ownership of the prompts you submit. By using the Service, you grant MojoAI a limited, non-exclusive license to process your prompts through third-party AI services solely for the purpose of providing the Service to you.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">8. Privacy and Data Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of the Service is subject to our Privacy Policy, available at <a href="/privacy" className="text-mojo-violet hover:text-cyan-600 underline">https://mojoai.work/privacy</a>. By using the Service, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please note that prompts and data submitted to the Service may be transmitted to third-party AI providers for processing. We recommend that you do not submit sensitive personal information through the Service.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">9. Disclaimers and Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">9.1 No Warranties</h3>
            <p className="text-gray-700 leading-relaxed mb-4 uppercase font-semibold">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-mojo-indigo mb-3">9.2 Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4 uppercase font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOJOAI LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR USE OR INABILITY TO USE THE SERVICE; (B) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY PERSONAL INFORMATION STORED THEREIN; (C) ANY AI-GENERATED CONTENT PROVIDED THROUGH THE SERVICE; OR (D) ANY THIRD-PARTY CONDUCT OR CONTENT ON THE SERVICE.
            </p>
            <p className="text-gray-700 leading-relaxed">
              IN NO EVENT SHALL MOJOAI'S TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO MOJOAI IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS LESS.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless MojoAI LLC, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with (a) your use of the Service; (b) your violation of these Terms; or (c) your violation of any rights of another party.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. If we make material changes, we will notify you via SMS or by posting a notice on our website. Your continued use of the Service after changes become effective constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">12. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may suspend or terminate your access to the Service at any time, with or without cause or notice, including if you violate these Terms. Upon termination, your right to use the Service will immediately cease. Sections 6–10 and 12–14 of these Terms will survive any termination.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">13. Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by the laws of the State of Georgia, United States, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms or the Service shall be resolved exclusively in the state or federal courts located in Atlanta, Georgia.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You agree to waive any right to a jury trial and to participate in any class action lawsuit related to the Service.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-mojo-indigo mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms or the Service, please contact us at:
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
              By using MojoAI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
