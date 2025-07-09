/* BiggerCardPreview.tsx */
import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import {ChevronsLeftRightEllipsis,BrainCircuit,University} from "lucide-react"

const projects = [
  {
    icon:<ChevronsLeftRightEllipsis/>,
    title: "Enterprise Web Applications",
    description:
      "Scalable full-stack solutions with modern architectures and security protocols",
  },
  {
    icon:<BrainCircuit/>,
    title: "AI & Machine Learning",
    description:
      "Advanced ML models, data analytics, and AI-powered automation solutions"  },
  {
    icon:<University/>,
    title: "Academic & Research Projects",
    description:
      "Specialized development for universities, research institutions, and competitions",
  },
];
export default function BiggerCardPreview() {
  return (
    <section className="flex justify-center py-16 px-4">
      {/* ── OUTER CARD ───────────────────────────────────────────── */}
      <div
        className="
        w-full max-w-5xl
        bg-gray-50 dark:bg-gray-800
        rounded-[32px]
        border border-gray-200/80 dark:border-gray-700/60
        shadow-[0_6px_28px_rgba(0,0,0,0.05)]
        p-3 md:p-4
      "
      >
        {/* ── INNER CARD (browser mock‑up) ──────────────────────── */}
        <div
          className="
          bg-white dark:bg-gray-900
          rounded-3xl
          border border-gray-200 dark:border-gray-700
          shadow-lg
          p-6 md:p-10
          mx-auto
        "
        >
          {/* Browser top bar */}
          <div className="flex items-center justify-between px-1 mb-5">
            <div className="flex space-x-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              Our Capabilities
            </p>
            <span className="w-8" /> {/* spacer */}
          </div>

          <hr className="border-gray-200 dark:border-gray-700 mb-6" />
          <div className="max-w-5xl mx-auto px-4">
            <HoverEffect items={projects} />
          </div>
          {/* Content area */}
        </div>
      </div>
    </section>
  );
}
