"use client";

//import { X } from "lucide-react";

type ProjectModalProps = {
  project: {
    title: string;
    description: string;
    details: string;
    image: string;
    technologies?: string[];
  } | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-black/40 p-2 transition-colors hover:bg-white/10"
        >
          {/*<X size={18} />*/}
          <span>✕</span>
        </button>

        <div className="aspect-video overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-8 p-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold md:text-5xl">
              {project.title}
            </h2>

            <p className="text-lg leading-relaxed text-zinc-300">
              {project.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Detalles del proyecto
            </h3>

            <p className="leading-relaxed text-zinc-400">
              {project.details}
            </p>
          </div>

          {project.technologies && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Tecnologías
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300"
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