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
            className="rounded-lg border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4"
          >
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                {faq.question}
              </span>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 text-gray-900 dark:text-white" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-900 dark:text-white" />
              )}
            </button>
            {isOpen && (
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
