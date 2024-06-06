"use client";
import { type FunctionComponent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Project } from "./projects";
import { GithubIcon } from "lucide-react";

type Props = Project;

export const ProjectCard: FunctionComponent<Props> = ({
  link,
  title,
  imageURL,
  githubURL,
  description,
}) => {
  return (
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-72 relative">
          <Image fill alt={`${title} Project Image`} src={imageURL}></Image>
        </div>
      </CardContent>
      <CardFooter>
        {link && (
          <Button
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            Visit
          </Button>
        )}
        {githubURL && (
          <Button
            onClick={() => {
              window.open(githubURL, "_blank");
            }}
          >
            <GithubIcon size={24} />
            Github
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
