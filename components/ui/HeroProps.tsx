import { cn } from "@/lib/utils";
import React from "react";
import { CodesandboxIcon, ArrowRight } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative flex h-[50rem] w-full items-start justify-center bg-gray-50 dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 flex flex-col items-center mt-55 px-4 sm:px-6 md:px-8 space-between-y-10">
        <button className="flex items-center justify-center gap-2 px-4 py-1 sm:px-6 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm sm:text-lg mb-4 shadow-none">
          <CodesandboxIcon className="h-4 w-4 sm:h-6 sm:w-6 text-sky-700" />
          Build With Us
        </button>
        {/* Replace <p> with <div> to avoid invalid nesting */}
        <div className="bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text pb-8 text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-transparent text-center">
          Let&apos;s Build Something That Matters,
        </div>
        <div className="flex justify-center">
          <span className="bg-gradient-to-b from-neutral-400 to-neutral-900 bg-clip-text pt-2 pb-4 text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-transparent text-center">
            We{" "}
            <span className="inline-block w-36 sm:w-50 md:w-64 lg:w-96 text-left align-middle overflow-hidden">
              <ContainerTextFlip words={["Design", "Code", "Build", "Deploy", "Document", "Scale"]} />
            </span>
          </span>
        </div>
        {/* This was a <p>, now a <div> to avoid invalid nesting */}
        <div className="w-full flex justify-center">
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-500 dark:text-neutral-400 text-center block w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2">
            Describe your idea and get professional digital solutions instantly. 
            Our skilled developers understand your goals and generate
            perfectly executed solutions ready to impress.
          </span>
        </div>
        <Button
          onClick={() => router.push("/about")}
          size="lg"
          className="mt-4 rounded-full font-semibold cursor-pointer"
        >
          Inside 4O4DEVS
          <ArrowRight className="h-5 w-5 ml-1" />
        </Button>
      </div>
    </div>
  );
}