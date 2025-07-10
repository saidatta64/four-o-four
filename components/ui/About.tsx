import { UniversityIcon, MoveLeft, Rocket } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ── HEADER ─────────────────────────────────────────── */}
        <div className="relative mb-12">
          {/* Back button */}
          <Link
            href="/"
            aria-label="Go back"
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <MoveLeft className="h-10 w-10 rounded-md border bg-white p-2 shadow hover:shadow-gray-400 dark:bg-neutral-800" />
          </Link>

          {/* Centered title */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 flex items-center gap-3">
              <UniversityIcon className="h-12 w-12 text-sky-600 dark:text-sky-400" />
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                About&nbsp;Us
              </h1>
            </div>
          </div>
        </div>

        {/* ── SINGLE CARD (gradient ring + content) ─────────── */}
        {/* Decorative gradient ring */}

        {/* Heading inside card */}
        <div className="mb-6 flex items-center gap-3">
          <Rocket className="h-8 w-8 text-sky-600 dark:text-sky-400" />
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Building&nbsp;Forward&nbsp;Together
          </h2>
        </div>

        {/* Copy */}
        <div className="space-y-5 leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            We started as a small group of developers building projects for
            fun—some for college submissions, others just to explore and test
            our skills. What united us was curiosity: a drive to experiment with
            new technologies and apply what we learned from online platforms,
            tutorials, and the open‑source community.
          </p>
          <p>
            As we kept building, we realized our projects weren’t just
            practice—they were real solutions. That realization shifted our
            purpose.
          </p>
          <p>
            Today, we collaborate with individuals and early teams who have
            great ideas but limited technical resources. Many of them come in
            with a basic understanding of web development or machine learning,
            and we help bring their concepts to life—whether that means building
            an MVP, scaling a prototype, or adding polish to a pitch‑ready
            product.
          </p>
          <p>
            But we don’t just execute—we learn with every build. Each project
            becomes a chance to test new tools, apply emerging industry
            practices, and introduce a layer of novelty that pushes boundaries.
            The result? Shared growth, stronger products, and ideas that evolve
            into something more than expected.
          </p>
          <p className="font-medium text-gray-900 dark:text-gray-100">
            This is what drives us:&nbsp;
            <em className="font-bold">Building forward, together.</em>
          </p>
        </div>
      </div>
    </div>
  );
}
