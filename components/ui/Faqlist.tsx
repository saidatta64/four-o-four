"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQs } from "@/lib/faqs";

export default function FaqList({
  items,
}: {
  items: FAQs[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 mx-auto max-w-3xl text-center">
      {items.map((faq, i) => {
        const isOpen = i === openIndex;
        return (
          <div
            key={i}
            className="rounded-lg border border-gray-300 dark:border-neutral-600 bg-gray-100 dark:bg-neutral-800 p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <button
              className="flex w-full items-center justify-between text-left font-bold text-gray-900 dark:text-white transition-colors duration-200 rounded-md px-2 py-2 "
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-bold text-gray-900 dark:text-white cursor-pointer">
                {faq.question}
              </span>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 text-gray-900 dark:text-white" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-900 dark:text-white" />
              )}
            </button>
            {isOpen && (
              <p className="mt-3 text-gray-800 dark:text-gray-200 text-base leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
