"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  activeSection: string;
  setActiveSection: (value: string) => void;

  passedHero: boolean;
};


const ActiveSectionContext =
  createContext<ContextType | null>(null);


  
export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] =
    useState("inicio");

  const [passedHero, setPassedHero] =
    useState(false);

  useEffect(() => {
    const sections =
      document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setPassedHero(window.scrollY > 300);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        passedHero,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(
    ActiveSectionContext
  );

  if (!context) {
    throw new Error(
      "useActiveSection must be used inside provider"
    );
  }

  return context;
}