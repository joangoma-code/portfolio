type ExperienceCardProps = {
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  side?: "left" | "right";
};

export default function ExperienceCard({
  title,
  subtitle,
  date,
  description,
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
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <span className="text-sm text-zinc-500">{date}</span>

        <h3 className="mt-2 text-2xl font-semibold">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-zinc-400">
            {subtitle}
          </p>
        )}

        <p className="mt-4 leading-relaxed text-zinc-300">
          {description}
        </p>
      </div>
    </div>
  );
}