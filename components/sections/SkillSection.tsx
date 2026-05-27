import Container from "@/components/ui/Container";

const skills = [
  {
    title: "Diseño",
    items: [
      "Diseño de interfaces",
      "Wireframing y prototipado",
      "Principios de usabilidad",
    ],
  },
  {
    title: "Herramientas",
    items: [
      "Figma",
      "Adobe Creative Suite",
      "Git / GitHub",
      "Unity",
      "Autodesk Maya",
      "Cinema 4D",
    ],
  },
  {
    title: "Desarrollo",
    items: [
      "HTML, CSS",
      "JavaScript, TypeScript",
      "React, Next.js",
      "Node.js",
      "C#",
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