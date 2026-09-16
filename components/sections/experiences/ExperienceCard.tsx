import type { Experience } from "@/types/Experience";
import { Diamond } from "lucide-react";

type ExperienceCardProps = {
  experience: Experience;
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
          ? "pl-10 pr-10 md:justify-end md:pl-0 md:pr-12" 
          : "pl-15 pr-5 md:ml-auto md:justify-start md:pl-12 md:pr-0"
      }`}
    >
      <div className="w-full max-w-2xl rounded-2xl border border-(--color-background3) bg-(--color-card) px-6 py-3 md:py-6 shadow-sm">
        <span className="text-xs md:text-sm opacity-90">{experience.date}</span>

        <h3 className="mt-2 text-xl md:text-2xl font-semibold">{experience.title}</h3>

        {experience.subtitle && (
          <p className="mt-1 text-xs md:text-sm opacity-80">{experience.subtitle}</p>
        )}

        <ul className="pt-7 pb-5 leading-relaxed">
          {experience.description.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Diamond
                strokeWidth={3}
                className="size-3 text-(--color-border) mt-1"
              />
              <p className="text-sm md:text-md">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
