import FaqList from "@/components/ui/Faqlist";
import { faqs } from "@/lib/faqs";
import Link from "next/link";

export default function FAQprop() {
  // show only first 4 items
  const teaserFaqs = faqs.slice(0, 4);

  return (
    <>
      <section className=" bg-gray-50">
        <h2 className="text-3xl flex justify-center font-bold mb-6">Frequently Asked</h2>
        <FaqList items={teaserFaqs} />

        <div className="mt-6 text-right">
          <Link href="/faqs" className=" flex justify-center text-sky-700 hover:underline mb-3 font-semibold">
            View all FAQs →
          </Link>
        </div>
      </section>
    </>
  );
}
