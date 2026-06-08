export type Project = {
  title: string;
  description: string;

  details: {
    objective: string;
    process?: string[];
    implementation?: string[];
    contributions?: String[];
    outcome: string;
    learnings?: string[];
    highlights: string[];
    //keyFeatures?
  };
  
  technologies: string[];
  image: string;
};