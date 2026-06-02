import MainLayout from "@/components/layout/MainLayout";

import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/projects";
import SkillSection from "@/components/sections/SkillSection";
import ExperienceSection from "@/components/sections/experiences";
import ContactSection from "@/components/sections/ContactSection";


export default function HomePage() {
  return (
    <MainLayout>
      <HomeSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </MainLayout>
  );
}