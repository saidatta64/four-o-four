"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQs , } from "@/lib/faqs";

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
          <div key={i} className="rounded-lg border p-4  dark:border-neutral-700">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-semibold  text-gray-900 dark:text-white cursor-pointer">
                {faq.question}
              </span>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 cursor-pointer" />
              ) : (
                <ChevronDown className="h-5 w-5 cursor-pointer" />
              )}
            </button>
            {isOpen && (
              <p className="mt-2 text-gray-800 dark:text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
