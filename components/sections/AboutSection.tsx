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
                Soy desarrollador frontend enfocado en crear interfaces modernas, 
                rápidas y con una experiencia de usuario cuidada al detalle. 
                Trabajo principalmente con tecnologías como Next.js, React y Tailwind CSS, 
                combinando diseño minimalista con animaciones e interacciones fluidas.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed opacity-80 md:text-xl">
                Me interesa construir productos digitales que no solo funcionen bien, 
                sino que también transmitan identidad y claridad visual. 
                Disfruto explorando nuevas herramientas, 
                optimizando experiencias y transformando ideas en interfaces intuitivas y escalables.
            </p>
            {/*
              Frontend Developer con base en UX/UI y experiencia en entornos digitales y creativos. 
              Enfocado en construir interfaces claras, funcionales y centradas en el usuario.

              Actualmente desarrollo proyectos con React y TypeScript, aplicando buenas prácticas de componentes, diseño responsive y consumo de APIs.

              Busco mi primera oportunidad como desarrollador frontend en un entorno de producto digital.
             */}
          </div>
        </div>
      </Container>
    </section>
  );
}