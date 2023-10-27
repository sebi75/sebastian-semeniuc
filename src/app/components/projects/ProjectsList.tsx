import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";
import { type FunctionComponent } from "react";

export const ProjectsList: FunctionComponent = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </>
  );
};
