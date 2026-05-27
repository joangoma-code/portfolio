import MainLayout from "@/components/layout/MainLayout";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutMe";
import ProjectSection from "@/components/sections/projects";
import SkillSection from "@/components/sections/SkillSection";
import ExperienceSection from "@/components/sections/experiences";
import ContactSection from "@/components/sections/ContactSection";


export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </MainLayout>
  );
}