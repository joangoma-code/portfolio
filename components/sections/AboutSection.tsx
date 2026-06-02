import Container from "@/components/ui/Container";


export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center py-4"
    >
      <Container>
        <div className="max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              About me
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed opacity-80 md:text-xl">
              Frontend Developer with a background in UX/UI and digital design,
              focused on building modern, responsive, and accessible web applications.
              I work primarily with React, Next.js, TypeScript, and Tailwind CSS,
              creating clean and intuitive user experiences with a strong attention to detail.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed opacity-80 md:text-xl">
                I enjoy turning ideas into scalable interfaces, integrating APIs,
                optimizing performance, and developing reusable component-based architectures.
                Currently seeking a Frontend Developer opportunity where I can contribute to real-world 
                products while continuing to grow within a collaborative development team.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}