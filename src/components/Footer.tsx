import React, { FunctionComponent } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="flex justify-center items-center py-4 w-full absolute bottom-0">
      <a
        href="https://github.com/sebi75"
        className="mx-2"
        target="_blank"
        rel="noreferrer"
      >
        <Github className="h-6 w-6 " />
      </a>
      <a
        href="https://www.linkedin.com/in/sebastian-semeniuc-17136321a/"
        className="mx-2"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin className="h-6 w-6 " />
      </a>
      <a
        href="https://twitter.com/sebyss7"
        className="mx-2"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter className="h-6 w-6 " />
      </a>
      <span className="">
        {/* insert copyrighting sign */}
        &copy; 2023 Sebastian Semeniuc
      </span>
    </footer>
  );
};
