import MainLayout from "@/components/layout/MainLayout";

import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillSection from "@/components/sections/SkillSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";


export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
    </MainLayout>
  );
}