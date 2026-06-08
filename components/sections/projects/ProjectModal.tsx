"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

import type { Project } from "@/types/Project";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useLockBodyScroll(Boolean(project));

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  // Si no hay proyecto devolvemos NULL
  if (!project) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-md"
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-(--color-border) bg-(--color-card)">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-(--color-border) bg-(--color-background) p-2 transition-colors hover:bg-(--color-background2)"
        >
          <X size={18} />
        </button>

        <div className="aspect-video overflow-hidden rounded-t-3xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-8 p-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold md:text-5xl">{project.title}</h2>

            <p className="text-lg leading-relaxed text-(--color-foreground)">
              {project.description}
            </p>
          </div>
          {Object.entries(project.details).map(([key, value]) => (
            <div key={key} className="space-y-4 ">
              <h3 className="text-2xl font-semibold">
                {key.slice(0, 1).toUpperCase() + key.slice(1)}
              </h3>
              {Array.isArray(value) 
              ? <ul>
                {value.map((element,index) => (
                  <li key={index} className="leading-relaxed">{element}</li>
                ))}
              </ul>
              : (<p className="leading-relaxed">{value}</p>)
            }
            </div>
          ))}

          {project.technologies && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Technologies</h3>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-(--color-border) px-4 py-2 text-sm text-(--color-foreground)"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
