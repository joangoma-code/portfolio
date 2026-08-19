"use client";

import Image from "next/image";
import { X, Diamond } from "lucide-react";

import type { Project } from "@/types/Project";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import useCloseOnEscapeOrBack from "@/hooks/useCloseOnEscapeOrBack";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useLockBodyScroll(Boolean(project));
  useCloseOnEscapeOrBack(Boolean(project), onClose);

  // Si no hay proyecto devolvemos NULL
  if (!project) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // aria-modal="true" ?
  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-md"
      role="dialog"
      id="project-modal"
      aria-labelledby="project-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto scrollbar-none rounded-3xl border border-(--color-border) bg-(--color-card)">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 z-10 rounded-full border border-(--color-border) bg-(--color-background) p-2 transition-colors hover:bg-(--color-background2)"
        >
          <X size={18} />
        </button>

        <div className="relative w-full aspect-video overflow-hidden rounded-t-3xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw, 50vw, 33vw"
            loading="lazy"
            className="object-cover"
          />
        </div>

        <div className="space-y-8 p-8">
          <div className="space-y-4">
            <h2 id="project-title" className="text-4xl font-bold md:text-5xl">{project.title}</h2>

            <p className="text-lg leading-relaxed text-(--color-foreground)">
              {project.description}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Objective</h3>
            <p className="leading-relaxed">{project.objective}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Contributions</h3>
            <ul>
              {project.contributions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Diamond
                    strokeWidth={3}
                    className="size-3 text-(--color-border) mt-2"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Outcome</h3>
            <p className="leading-relaxed">{project.outcome}</p>
          </div>
          {project.technologies && (
            <div className="space-y-4">
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
