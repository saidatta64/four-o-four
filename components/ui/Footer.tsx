/* eslint-disable @next/next/no-img-element */

import { toast } from "sonner";

interface FooterProps {
  onConnectClick: () => void;
}
export default function Footer({ onConnectClick }: FooterProps) {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo and Company Info */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/Favicon.png"
              alt="4O4Devs Logo"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              4O4Devs
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm sm:text-base">
            Building digital solutions that matter. From concept to deployment,
            we turn your ideas into reality.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-8 content-center">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
              Services
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <a className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer">
                  Web Development
                </a>
              </li>
              <li>
                <a className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer">
                  AI/ML Projects
                </a>
              </li>
              <li>
                <a className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
              Company
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/about#team"
                  className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/about#career"
                  className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
              Support
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <a
                  onClick={() => {
                    toast("Mail us at: support@404devs.com", {
                      duration: 5000,
                      icon: "📧",
                      position: "top-right",
                      description: (
                        <div className="relative w-75 h-1 bg-gray-300 rounded overflow-hidden mt-2">
                          <div className="h-full bg-gradient-to-r from-blue-600 to-blue-300 animate-loadingBar" />
                        </div>
                      ),
                      style: {
                        fontSize: "1rem",
                      },
                    });
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  onClick={onConnectClick}
                  className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer "
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-200 dark:border-neutral-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} 4O4Devs. All rights reserved. No
              idea left unfound.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs sm:text-sm">
              <a
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="https://discord.gg/tYjAkGd6"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
