import React, { FunctionComponent } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Button } from "./ui/button";

type HeaderItem = {
  name: HeaderItemEnum;
  href: string;
};

enum HeaderItemEnum {
  Home = "Home",
  Blog = "Blog",
  About = "About",
  Projects = "Projects",
  Contact = "Contact",
}

const headerItems: HeaderItem[] = [
  {
    name: HeaderItemEnum.Home,
    href: "/",
  },
  {
    name: HeaderItemEnum.About,
    href: "/about",
  },
  // {
  //   name: HeaderItemEnum.Blog,
  //   href: "/blog",
  // },
  {
    name: HeaderItemEnum.Projects,
    href: "/projects",
  },
];

export const Header: FunctionComponent = () => {
  return (
    <nav className="flex items-center max-w-4xl mx-auto justify-center w-full">
      <div className="flex flex-col w-full">
        <div className="flex sm:w-full py-5 items-center">
          <ul className="hidden sm:flex items-center">
            {headerItems.map(({ href, name }, index) => {
              return (
                <li key={`${index + 1}-${index}`} className="mx-3">
                  <Link href={href} className={"text-zinc-800 font-medium p-2"}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="h-[1px] bg-gray-200 w-full" />
      </div>
      {/* <div className="flex sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">
              <MenuIcon size={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {headerItems.map(({ href, name }, index) => {
              return (
                <DropdownMenuItem key={`${index + 1}-${index}`}>
                  <Link
                    href={href}
                    className={"text-gray-800 dark:text-gray-400 font-bold p-2"}
                  >
                    {name}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
    </nav>
  );
};
