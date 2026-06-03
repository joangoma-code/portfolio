export type Project = {
  title: string;
  description: string;

  details: {
    objective: string;
    process: string;
    implementation: string;
    outcome: string;
    learnings: string;
  };
  
  technologies?: string[];
  image: string;
};