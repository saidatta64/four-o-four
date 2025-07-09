import React from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Globe,
  MoveLeft,
} from "lucide-react";
import Link from "next/link";
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-12">
          {/* Back Button (absolute positioning) */}
          <Link
            href="/"
            aria-label="Go back"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <MoveLeft className="h-10 w-10 border bg-white dark:bg-neutral-800 rounded-md p-2 cursor-pointer shadow hover:shadow-gray-400" />
          </Link>

          {/* Centered Content */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-12 h-12 text-sky-600 dark:text-sky-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Privacy Policy
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
                <Eye className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We respect your privacy and are committed to protecting your
                personal data. This privacy policy explains how we collect, use,
                and safeguard your information when you visit our website or use
                our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-neutral-700 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Personal Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We collect information you provide directly to us, such as:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                    <li>
                      • Email addresses when you contact us or request
                      consultation
                    </li>
                    <li>
                      • Name and contact information in collaboration requests
                    </li>
                    <li>• Any other information you choose to provide</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-neutral-700 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Automatically Collected Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We automatically collect certain information when you visit
                    our website:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Pages visited and time spent on our site</li>
                    <li>• Referring website information</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                How We Use Your Information
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="space-y-2 ml-4">
                  <li>
                    • Respond to your inquiries and provide customer support
                  </li>
                  <li>• Send you information about our services and updates</li>
                  <li>• Improve our website and services</li>
                  <li>• Analyze usage patterns and optimize user experience</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                Data Protection
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3">
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction.
                </p>
                <div className="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-lg border border-sky-200 dark:border-sky-800">
                  <p className="text-sky-800 dark:text-sky-200">
                    <strong>Security Measures:</strong> We use encryption,
                    secure servers, and regular security audits to protect your
                    data.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                Data Sharing
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3">
                <p>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information only in these
                  circumstances:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• With your explicit consent</li>
                  <li>• To comply with legal obligations</li>
                  <li>• To protect our rights and safety</li>
                  <li>
                    • With trusted service providers who assist us in operating
                    our website
                  </li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Rights
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3">
                <p>You have the right to:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Access your personal data</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your data</li>
                  <li>• Object to processing of your data</li>
                  <li>• Data portability</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cookies
              </h2>
              <div className="text-gray-600 dark:text-gray-400 space-y-3">
                <p>
                  We use cookies to improve your browsing experience. You can
                  control cookies through your browser settings. Disabling
                  cookies may affect some functionality of our website.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-sky-50 dark:bg-sky-900/20 p-6 rounded-xl border border-sky-200 dark:border-sky-800">
              <h2 className="text-2xl font-bold text-sky-900 dark:text-sky-100 mb-4">
                Contact Us
              </h2>
              <p className="text-sky-800 dark:text-sky-200 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-2 text-sky-800 dark:text-sky-200">
                <p>Email: support@404devs.com</p>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Policy Updates
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
