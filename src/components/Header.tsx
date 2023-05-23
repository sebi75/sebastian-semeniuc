"use client";

import React, { FunctionComponent, useMemo, useState } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, MenuIcon, Palette, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    name: HeaderItemEnum.Blog,
    href: "/blog",
  },
  {
    name: HeaderItemEnum.About,
    href: "/about",
  },
  {
    name: HeaderItemEnum.Projects,
    href: "/projects",
  },
];

export const Header: FunctionComponent = () => {
  const [selected, setSelected] = useState<HeaderItemEnum>(HeaderItemEnum.Home);
  const [darkTheme, setDarkTheme] = useDarkMode();

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleDarkTheme = () => {
    setDarkTheme(true);
  };

  const handleLightTheme = () => {
    setDarkTheme(false);
  };

  return (
    <nav className="flex items-center max-w-4xl mx-auto justify-center w-full">
      <div className="flex sm:w-full py-5 items-center">
        <ul className="hidden sm:flex items-center">
          {headerItems.map(({ href, name }, index) => {
            return (
              <li key={`${index + 1}-${index}`} className="mx-3">
                <Link
                  href={href}
                  className={`${
                    selected === name
                      ? "text-black dark:text-white bg-muted rounded-md"
                      : "text-gray-800 dark:text-gray-400"
                  } font-bold p-2`}
                  onClick={() => setSelected(name)}
                >
                  {name}
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <button onClick={toggleDarkTheme}>
              {darkTheme ? <SunIcon size={24} /> : <MoonIcon size={24} />}
            </button>
          </li>
        </ul>
        <div className="flex sm:hidden">
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
                      className={`${
                        selected === name
                          ? "text-black dark:text-white bg-muted rounded-md"
                          : "text-gray-800 dark:text-gray-400"
                      } font-bold p-2`}
                      onClick={() => setSelected(name)}
                    >
                      {name}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Palette className="mr-2 h-4 w-4" />
                  <span className="font-bold">Theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={handleLightTheme}>
                      <SunIcon className="mr-2 h-4 w-4" />
                      <span>Light</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleDarkTheme}>
                      <Moon className="mr-2 h-4 w-4" />
                      <span>Dark</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
