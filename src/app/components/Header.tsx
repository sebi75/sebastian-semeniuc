"use client";
import React, { FunctionComponent } from "react";
import Link from "next/link";

export const Header: FunctionComponent = () => {
  return (
    <nav className="flex items-center max-w-4xl mx-auto justify-center w-full">
      <div className="flex w-full py-5 items-center">
        <ul className="flex items-center">
          <li className="mx-3">
            <Link href={"/"} className={"text-zinc-400 font-medium p-2"}>
              Home
            </Link>
          </li>
          <li className="mx-3">
            <Link href={"/about"} className={"text-zinc-400 font-medium p-2"}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
