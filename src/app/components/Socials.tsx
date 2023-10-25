"use client";
import { FunctionComponent } from "react";
import { Github, Linkedin, LucideIcon, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

type SocialLink = {
  name: string;
  url: string;
  Icon: LucideIcon;
};

const links: SocialLink[] = [
  {
    name: "Github",
    url: "https://github.com/sebi75",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sebastian-semeniuc-17136321a/",
    Icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/sebyss7",
    Icon: Twitter,
  },
];

type Config = {
  github?: boolean;
  linkedin?: boolean;
  twitter?: boolean;
};

type Props = {
  className?: string;
  config: Config;
};

export const Socials: FunctionComponent<Props> = ({
  className,
  config = {
    github: true,
    linkedin: true,
    twitter: true,
  },
}) => {
  return (
    <div className={cn("flex items-center", className)}>
      {links.map((link) => {
        const { Icon, name, url } = link;
        const key = link.name.toLowerCase() as keyof Config;
        if (!config[key]) return null;
        return (
          <TooltipProvider key={`social-icon-${name}-section`}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={url} className="mx-2" target="_blank" rel="noreferrer">
                  <Icon className="h-6 w-6 " />
                </a>
              </TooltipTrigger>
              <TooltipContent>{`Visit my ${name} profile`}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};
