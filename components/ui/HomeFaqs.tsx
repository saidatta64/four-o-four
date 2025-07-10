import FaqList from "@/components/ui/Faqlist";
import { faqs } from "@/lib/faqs";
import Link from "next/link";

export default function FAQprop() {
  // show only first 4 items
  const teaserFaqs = faqs.slice(0, 4);

  return (
    <>
      <section className="bg-gradient-to-br bg-gray-50 dark:bg-black pt-6">
        <h2 className="text-3xl flex justify-center font-bold mb-6 text-gray-900 dark:text-white">
          Frequently Asked
        </h2>
        <FaqList items={teaserFaqs} />

        <div className="mt-6 text-right">
          <Link
            href="/faqs"
            className="flex justify-center text-sky-700 dark:text-sky-400 hover:underline pb-3 font-semibold"
          >
            View all FAQs →
          </Link>
        </div>
      </section>
    </>
  );
}
