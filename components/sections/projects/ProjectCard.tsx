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
      className="group cursor-pointer overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) text-left hover:bg-(--color-background2) transition-all duration-700 hover:scale-102
      "
    >
      <div className="relative aspect-video overflow-hidden m-4 rounded-xl group-hover:border border-(--color-border)">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw, 50vw, 33vw"
          loading="lazy"
          className="object-cover group-hover:scale-103"
        />
      </div>

      <div className="space-y-3 p-6">
        <h3 className="text-2xl font-semibold">{project.title}</h3>

        <p className="text-sm leading-relaxed opacity-70">
          {project.description}
        </p>
      </div>
    </button>
  );
}
