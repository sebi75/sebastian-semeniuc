import { FunctionComponent } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  github?: boolean;
  linkedin?: boolean;
  twitter?: boolean;
};

export const Socials: FunctionComponent<Props> = ({
  className,
  github = true,
  linkedin = true,
  twitter = true,
}) => {
  return (
    <div className={cn("flex items-center", className)}>
      {github && (
        <a
          href="https://github.com/sebi75"
          className="mx-2"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-6 w-6 " />
        </a>
      )}
      {linkedin && (
        <a
          href="https://www.linkedin.com/in/sebastian-semeniuc-17136321a/"
          className="mx-2"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="h-6 w-6 " />
        </a>
      )}
      {twitter && (
        <a
          href="https://twitter.com/sebyss7"
          className="mx-2"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="h-6 w-6 " />
        </a>
      )}
    </div>
  );
};
