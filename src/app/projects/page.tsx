import { PageHeader } from "../components/PageHeader";
import { ProjectsList } from "../components/projects/ProjectsList";

export default function Projects() {
  return (
    <>
      <PageHeader title="Projects" />
      <h1 className="text-zinc-600 max-w-2xl">
        A list of projects that I made over the years. Some were built at
        hackathons, some were built for learning purposes, and some for fun.
        This is a compact list of the more interesting ones.
      </h1>
      <div className="mt-5">
        <ProjectsList />
      </div>
    </>
  );
}
