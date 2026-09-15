"use client";

import Image from "next/image";
import { DiamondPlus } from "lucide-react";

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
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) text-left duration-700 motion-safe:transition-all motion-safe:hover:scale-102 motion-safe:hover:bg-(--color-background2) motion-safe:hover:border-(--color-secondary)"
    >
      <div className="relative m-4 aspect-video overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="eager"
          className="object-cover motion-safe:group-hover:scale-103"
        />
      </div>

      <div className="flex flex-1 flex-col mx-6 mt-3 mb-5">
        <h3 className="line-clamp-2 text-2xl font-semibold">{project.title}</h3>

        <p className="line-clamp-3 mt-3 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto flex justify-end">
          <DiamondPlus
            strokeWidth={1.2}
            className="size-7 text-(--color-border) group-hover:text-(--color-primary)"
          />
        </div>
      </div>
    </button>
  );
}
