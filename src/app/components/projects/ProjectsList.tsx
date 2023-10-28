import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";
import { type FunctionComponent } from "react";

export const ProjectsList: FunctionComponent = () => {
  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};
