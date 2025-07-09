/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

/* ─────────── ImageModal (opens full‑screen) ─────────── */
function ImageModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext,
  alt = "Project image",
}: {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  alt?: string;
}) {
  if (!isOpen) return null;

  const modalJSX = (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 text-white transition hover:bg-white/30"
      >
        <X size={24} />
      </button>

      {/* Prev / Next */}
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition hover:bg-white/30"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition hover:bg-white/30"
      >
        <ChevronRight size={24} />
      </button>

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`${alt} ${currentIndex + 1}`}
        className="max-h-[90vh] max-w-full rounded-lg object-contain"
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const diff = idx - currentIndex;
              if (diff > 0) [...Array(diff)].forEach(onNext);
              else if (diff < 0) [...Array(Math.abs(diff))].forEach(onPrevious);
            }}
            className={cn(
              "h-3 w-3 rounded-full transition",
              idx === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>

      {/* Counter */}
      <span className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
        {currentIndex + 1} / {images.length}
      </span>
    </div>
  );

  // Render via portal so it's never inside a transformed ancestor
  return typeof window === "undefined" ? null : createPortal(modalJSX, document.body);
}

/* ─────────── TechStackTags ─────────── */
export interface Technology {
  name: string;
  color?: string;
}

interface TechStackTagsProps {
  technologies: Technology[];
  title?: string;
  variant?: "default" | "outlined" | "filled";
  size?: "sm" | "md" | "lg";
  className?: string;
}

function TechStackTags({
  technologies,
  title = "Technologies Used",
  variant = "default",
  size = "md",
  className = "",
}: TechStackTagsProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  } as const;

  const variantClasses = {
    default:
      "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700",
    outlined:
      "bg-transparent border-2 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600",
    filled:
      "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800",
  } as const;

  return (
    <div className={className}>
      {title && (
        <h3 className="mb-1 mt-2 text-md font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      )}

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className={cn(
              sizeClasses[size],
              variantClasses[variant],
              "rounded-full font-medium transition hover:scale-105 hover:shadow-sm"
            )}
            style={
              tech.color
                ? {
                    backgroundColor: `${tech.color}15`,
                    color: tech.color,
                    borderColor: `${tech.color}40`,
                  }
                : undefined
            }
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────── Card primitives ─────────── */
function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative z-20 w-full overflow-hidden rounded-2xl border bg-white p-4 dark:border-white/20 dark:bg-neutral-800",
        className
      )}
    >
      <div className="p-4">{children}</div>
    </div>
  );
}

function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "mt-4 text-xl font-bold tracking-wide text-gray-900 dark:text-white",
        className
      )}
    >
      {children}
    </h4>
  );
}

function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-2 text-sm leading-relaxed tracking-wide text-gray-700 dark:text-gray-400",
        className
      )}
    >
      {children}
    </p>
  );
}

/* ─────────── CardImage (thumbnail + modal) ─────────── */
function CardImage({
  images,
  alt = "Card images",
  className,
}: {
  images: string[];
  alt?: string;
  className?: string;
}) {
  const displayImages = images; // cap to 4
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const next = () => setCurrent((p) => (p + 1) % displayImages.length);
  const prev = () => setCurrent((p) => (p === 0 ? displayImages.length - 1 : p - 1));

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={cn("group relative overflow-hidden rounded-lg", className)} onClick={openModal}>
        {/* Thumbnail */}
        <div className="aspect-square cursor-pointer">
          <img
            src={displayImages[current]}
            alt={`${alt} ${current + 1}`}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/20 pointer-events-none">
            <span className="opacity-0 transition group-hover:opacity-100 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800">
              Click to view
            </span>
          </div>
        </div>

        {/* Prev / Next buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 transition group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="rounded-full bg-white/80 p-2 shadow-lg transition hover:bg-white  dark:bg-gray-900"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="rounded-full bg-white/80 p-2 shadow-lg transition hover:bg-white dark:bg-gray-900"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {displayImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(idx);
              }}
              className={cn(
                "h-2 w-2 rounded-full transition",
                idx === current ? "bg-white" : "bg-white/50 hover:bg-white/75"
              )}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={open}
        onClose={() => setOpen(false)}
        images={displayImages}
        currentIndex={current}
        onPrevious={prev}
        onNext={next}
        alt={alt}
      />
    </>
  );
}

/* ─────────── Exports ─────────── */
export { Card, CardTitle, CardDescription, CardImage };
export default TechStackTags;
