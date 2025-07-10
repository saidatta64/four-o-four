import { MoveLeft, FileQuestionMark } from "lucide-react";
import Link from "next/link";
import { faqs } from "@/lib/faqs";
import FaqList from "./Faqlist";

export default function FAQ() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12">
            {/* Back button */}
            <Link
              href="/"
              aria-label="Go back"
              className="absolute left-0 top-1/2 -translate-y-1/2"
            >
              <MoveLeft className="h-10 w-10 rounded-md border bg-white dark:bg-neutral-800 p-2 shadow hover:shadow-gray-400 dark:hover:shadow-sky-900" />
            </Link>

            {/* Centered title */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex items-center gap-3">
                <FileQuestionMark className="h-12 w-12 text-sky-600 dark:text-sky-400" />
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                  FAQs
                </h1>
              </div>
            </div>
          </div>

          <div>
            <section className="bg-gray-50 dark:bg-neutral-900">
              <FaqList items={faqs} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
