export type Project = {
  title: string;
  description: string;
  imageURL: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "KleerkAI",
    description:
      "A fully feature rich AI powered e-commerce app for content generation.",
    imageURL: "/images/kleerkai.jpg",
    link: "https://kleerk.com/",
  },
];
