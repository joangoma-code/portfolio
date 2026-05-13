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
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-6">
        <h3 className="text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
      </div>
    </button>
  );
}