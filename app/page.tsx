import MainLayout from "@/components/MainLayout";

import HeroSection from "@/sections/HeroSection";
import ProjectSection from "@/sections/ProjectSection";
import SkillSection from "@/sections/SkillSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ContactSection from "@/sections/ContactSection";


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