import Container from "@/components/ui/Container";

const skills = [
  {
    title: "UI/UX Design",
    items: [
      "Interface design",
      "Wireframing and prototyping",
      "User-centered design",
      "Reusable component design",
      "Basic accessibility (WCAG)",
    ],
  },
  {
    title: "Frontend Development",
    items: [
      "HTML, CSS, responsive layouts",
      "JavaScript, TypeScript",
      "React, Next.js",
      "REST APIs integration",
      "Node.js basics",
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      "Figma",
      "Git / GitHub",
      "VS Code",
      "Adobe Creative Suite",
    ],
  },
];

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="flex min-h-screen items-center justify-center py-4"
    >
      <Container>
        <div className="space-y-12">
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Skills
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {skills.map((category) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-lg text-(--color-foreground) rounded-full border border-(--color-foreground2) px-4 py-2 hover:border-(--color-border)"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}