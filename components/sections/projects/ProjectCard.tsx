"use client";

import Image from "next/image";

import type { Project } from "@/types/Project";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) text-left transition-all duration-300 hover:-translate-y-1 hover:bg-(--color-background2)"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-3 p-6">
        <h3 className="text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed opacity-70">
          {project.description}
        </p>
      </div>
    </button>
  );
}