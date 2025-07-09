import React from "react";
import {
  MoveLeft,
  FileText,
  Scale,
  AlertTriangle,
  Users,
  Shield,
  Gavel,
} from "lucide-react";
import Link from "next/link";
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-12">
          {/* Back button (absolutely positioned) */}
          <Link
            href="/"
            aria-label="Go back"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <MoveLeft className="h-10 w-10 border bg-white dark:bg-neutral-800 rounded-md p-2 cursor-pointer shadow hover:shadow-gray-400" />
          </Link>

          {/* Centered content */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-12 h-12 text-sky-600 dark:text-sky-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg border border-gray-200 dark:border-neutral-700 overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                Agreement to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                By accessing and using our website and services, you accept and
                agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use
                this service.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                Our Services
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  We provide web development, design, and consulting services.
                  Our services include but are not limited to:
                </p>
                <ul className="space-y-2 ml-4 text-gray-600 dark:text-gray-400">
                  <li>• Web development and design</li>
                  <li>• Software consulting</li>
                  <li>• Technical support and maintenance</li>
                  <li>• Collaboration opportunities</li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                User Responsibilities
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  When using our services, you agree to:
                </p>
                <ul className="space-y-2 ml-4 text-gray-600 dark:text-gray-400">
                  <li>• Provide accurate and complete information</li>
                  <li>• Use our services only for lawful purposes</li>
                  <li>• Respect intellectual property rights</li>
                  <li>• Not engage in any harmful or disruptive activities</li>
                  <li>
                    • Maintain the confidentiality of any login credentials
                  </li>
                </ul>
              </div>
            </section>

            {/* Prohibited Uses */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                Prohibited Uses
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                <p className="text-red-800 dark:text-red-200 mb-3">
                  You may not use our services for:
                </p>
                <ul className="space-y-2 ml-4 text-red-800 dark:text-red-200">
                  <li>
                    • Any unlawful purpose or to solicit others to unlawful acts
                  </li>
                  <li>
                    • Violating any international, federal, provincial, or state
                    regulations, rules, laws, or local ordinances
                  </li>
                  <li>
                    • Infringing upon or violating our intellectual property
                    rights or the intellectual property rights of others
                  </li>
                  <li>
                    • Harassing, abusing, insulting, harming, defaming,
                    slandering, disparaging, intimidating, or discriminating
                  </li>
                  <li>• Submitting false or misleading information</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Intellectual Property Rights
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3">
                <p>
                  The service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  our company and its licensors.
                </p>
                <p>
                  The service is protected by copyright, trademark, and other
                  laws. Our trademarks and trade dress may not be used in
                  connection with any product or service without our prior
                  written consent.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Gavel className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                Limitation of Liability
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3">
                <p>
                  In no event shall our company, nor its directors, employees,
                  partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses, resulting from your
                  use of the service.
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Disclaimer
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3">
                <p>
                  The information on this website is provided on an &quot;as
                  is&quot; basis. To the fullest extent permitted by law, this
                  company excludes all representations, warranties, conditions,
                  and other terms which might otherwise be implied by statute,
                  common law, or the law of equity.
                </p>
              </div>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of the service, to
                understand our practices.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Termination
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3">
                <p>
                  We may terminate or suspend your access immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms.
                </p>
                <p>
                  Upon termination, your right to use the service will cease
                  immediately.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                These Terms shall be interpreted and governed by the laws of
                [Your Country/State], without regard to its conflict of law
                provisions. Our failure to enforce any right or provision of
                these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days notice prior to any new
                terms taking effect.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-sky-50 dark:bg-sky-900/20 p-6 rounded-xl border border-sky-200 dark:border-sky-800">
              <h2 className="text-2xl font-bold text-sky-900 dark:text-sky-100 mb-4">
                Contact Us
              </h2>
              <p className="text-sky-800 dark:text-sky-200 mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="space-y-2 text-sky-800 dark:text-sky-200">
                <p>Email: support@4o4devs.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
