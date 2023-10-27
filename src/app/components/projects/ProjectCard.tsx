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

type Props = Project;

export const ProjectCard: FunctionComponent<Props> = ({
  description,
  imageURL,
  link,
  title,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-80 relative">
          <Image fill alt={`${title} Project Image`} src={imageURL}></Image>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            window.open(link, "_blank");
          }}
        >
          Visit
        </Button>
      </CardFooter>
    </Card>
  );
};
