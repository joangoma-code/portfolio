import type { Experience } from "@/types/Experience";
import { Diamond } from "lucide-react";

type ExperienceCardProps = {
  experience: Experience
  side?: "left" | "right";
};

export default function ExperienceCard({
  experience,
  side = "left",
}: ExperienceCardProps) {
  return (
    <div
      className={`relative flex w-full md:w-1/2 ${
        side === "left"
          ? "md:justify-end md:pr-12"
          : "md:ml-auto md:justify-start md:pl-12"
      }`}
    >
      <div className="w-full max-w-md rounded-2xl border border-(--color-border) bg-(--color-card) px-6 pt-2 pb-6">
        <span className="text-sm opacity-70">
          {experience.date}
        </span>

        <h3 className="mt-2 text-2xl font-semibold">
          {experience.title}
        </h3>

        {experience.subtitle && (
          <p className="mt-1 text-sm opacity-60">
            {experience.subtitle}
          </p>
        )}

        <ul className="mt-5 leading-relaxed opacity-80">
          {experience.description.map( (item) => (
            <li key={item} className="flex items-start gap-3">
              <Diamond className="size-3 text-(--color-border) shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}