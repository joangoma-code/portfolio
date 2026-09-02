"use client";

import Image from "next/image";

import type { Project } from "@/types/Project";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      aria-controls="project-modal"
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) text-left motion-safe:transition-all duration-700 motion-safe:hover:scale-102 motion-safe:hover:bg-(--color-background2)"
    >
      <div className="relative aspect-video overflow-hidden m-4 rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw, 50vw, 33vw"
          loading="eager"
          className="object-cover motion-safe:group-hover:scale-103"
        />
      </div>

      <div className="min-h-40 space-y-3 p-6">
        <h3 className="line-clamp-2 text-2xl font-semibold">{project.title}</h3>

        <p className="line-clamp-3 text-sm leading-relaxed opacity-70">
          {project.description}
        </p>
      </div>
    </button>
  );
}
