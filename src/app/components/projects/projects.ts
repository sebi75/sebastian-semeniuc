export type Project = {
  title: string;
  description: string;
  imageURL: string;
  link?: string;
  githubURL?: string;
};

export const projects: Project[] = [
  {
    title: "KleerkAI",
    description:
      "A fully feature rich AI powered e-commerce app for content generation.",
    imageURL: "/images/kleerkai.jpg",
    link: "https://kleerk.com/",
  },
  {
    title: "Multitype-LLM-Chat",
    description:
      "A chat application which lets you upload all kinds of data in different formats and use LLMs like GPT-4 to chat like on ChatGPT, but having your own data in context. All built in a 36h hackathon.",
    imageURL: "/images/multitype-llm-chat.jpg",
    githubURL: "https://github.com/sebi75/multitype-llm-chat",
  },
];
