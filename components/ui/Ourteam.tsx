"use client";

import { Github, Linkedin } from "lucide-react";
import { teamMembers , Collaborators } from "@/lib/Team";

export default function OurTeamSection() {
  return (
    <section
      id="career"
      className="bg-white dark:bg-neutral-900 px-4 rounded-md sm:px-6 lg:px-8 pt-2"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
          Career
        </h2>
        {/* Introductory blurb */}
        <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 ">
          We’re third‑year students in the{" "}
          <strong>Artificial Intelligence &amp; Data Science</strong> department
          at <strong>AISSMS IOIT, Pune</strong>. Driven by curiosity, we build
          real‑world projects to learn, experiment, and share knowledge.
        </p>

        {/* NEW paragraph about how you help peers and what you enjoy */}
        <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
          Outside of coursework, we actively architect capstone solutions,
          pair-programming through tough bugs, and running weekend workshops on
          the latest frameworks. We love participating in regional hackathons,
          where the fast pace keeps us sharp and sparks fresh ideas. When
          we&apos;re not shipping code, you&apos;ll find us learning coding,
          tinkering with open-source contributions, and diving deep into new
          technologies to expand our skill sets.....
        </p>

        {/* Team grid */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Minds Behind the Mission <span className=" dark:text-white">:-</span>
        </div>
        <section id="team">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 md:auto-cols-fr gap-6 mt-4">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-xl bg-white/80 dark:bg-neutral-800 p-4 shadow border border-gray-100 dark:border-neutral-700 transition hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 transition"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 transition"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-6">
                Collabs with <span className=" dark:text-white">:-</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-2 md:auto-cols-fr gap-6 mt-4">
              {Collaborators.map((member, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center rounded-xl bg-white/80 dark:bg-neutral-800 p-4 shadow border border-gray-100 dark:border-neutral-700 transition hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 transition"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 transition"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
