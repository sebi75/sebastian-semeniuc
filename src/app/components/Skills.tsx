import { type FunctionComponent } from "react";

type Skill = {
  name: string;
  icon?: string;
  color: string;
};

export const skills: Skill[] = [
  {
    name: "React",
    icon: "react",
    color: "#61dafb",
  },
  {
    name: "Next.js",
    icon: "next-js",
    color: "#000000",
  },
  {
    name: "Node.js",
    icon: "node-js",
    color: "#339933",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    color: "#007acc",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    color: "#f7df1e",
  },
  {
    name: "Python",
    icon: "python",
    color: "#3776ab",
  },
  {
    name: "Go",
    icon: "go",
    color: "#00add8",
  },
  {
    name: "Rust",
    icon: "rust",
    color: "#CE412B",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind-css",
    color: "#38b2ac",
  },
  {
    name: "MySQL",
    icon: "mysql",
    color: "#4479a1",
  },
  {
    name: "Git",
    icon: "git",
    color: "#f05032",
  },
  {
    name: "Firebase",
    icon: "firebase",
    color: "#ffca28",
  },
  {
    name: "React Native",
    icon: "react-native",
    color: "#61dafb",
  },
  {
    name: "Docker",
    icon: "docker",
    color: "#2496ed",
  },
  {
    name: "AWS",
    icon: "aws",
    color: "#FF9900",
  },
  {
    name: "Replicate",
    icon: "replicate",
    color: "#000000",
  },
];

//TODO: On click, show a modal with more details about the skill
export const Skills: FunctionComponent = () => {
  return (
    <section className="flex flex-col">
      <h1 className="text-zinc-600 text-2xl my-3 font-bold">Skills</h1>
      <ul className="flex flex-row items-center gap-1 flex-wrap">
        {skills.map((skill) => (
          <li
            key={`${skill.name}-${skill.color}`}
            style={{
              backgroundColor: skill.color,
            }}
            className={`flex items-center border border-gray-200 justify-center p-2 rounded-md`}
          >
            <span className="text-sm italic text-white">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
