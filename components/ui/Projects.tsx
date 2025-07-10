"use client";

import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
} from "./ProjectCardProps";
import TechStackTags from "./ProjectCardProps";
import { SquareArrowOutUpRight, MonitorCog } from "lucide-react";

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: { name: string }[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Metro‑Mapping",
    description:
      "A comprehensive metro mapping application built with modern web technologies for efficient navigation and planning.",
    images: [
      "/Project-Images/p1-1.png",
      "/Project-Images/p1-2.png",
      "/Project-Images/p1-3.png",
      "/Project-Images/p1-4.png",
    ],
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "WebSockets" },
      { name: "Node.js" },
    ],
    link: "https://metromapping.vercel.app/",
  },
  {
    title: "Quick‑Care",
    description:
      "A user‑friendly appointment booking application designed to streamline healthcare services and improve patient outcomes.",
    images: [
      "/Project-Images/p2-1.png",
      "/Project-Images/p2-2.png",
      "/Project-Images/p2-3.png",
      "/Project-Images/p2-4.png",
      "/Project-Images/p2-5.png",
    ],
    technologies: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Supabase" },
      { name: "NextAuth" },
      { name: "AI integration" },
    ],
    link: "https://quick-care-xi.vercel.app/",
  },
  
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
              Our Work
            </h1>
            <MonitorCog className="h-10 w-10 text-gray-900 dark:text-white md:h-12 md:w-12" />
          </div>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            We have worked on a variety of projects, showcasing our expertise in
            web development, design, and more.
          </p>
        </header>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="group rounded-xl border border-gray-200 bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
            >
              <CardImage images={project.images} />

              <div className="p-6">
                <CardTitle className="mb-3 transition-colors group-hover:text-sky-600 dark:group-hover:text-sky-400">
                  {project.title}
                </CardTitle>

                <CardDescription className="mb-6">
                  {project.description}
                </CardDescription>

                <TechStackTags
                  technologies={project.technologies}
                  variant="outlined"
                  title="" // no heading
                  className="mb-6"
                />

                {/* CTA */}
                <div className="flex justify-end">
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 font-medium text-white transition-transform duration-200 hover:scale-105 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-500 dark:hover:bg-sky-600 dark:focus:ring-offset-neutral-800 cursor-pointer"
                  >
                    <span>View Project</span>
                    <SquareArrowOutUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
