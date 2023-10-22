import React, { FunctionComponent } from "react";
import { Socials } from "./Socials";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="flex justify-center items-center py-4 w-full absolute bottom-0">
      <div className="h-[1px] bg-gray-200 w-full" />
      <div className="flex items-center mx-3">
        <Socials />
        <span className="flex flex-row whitespace-nowrap">
          &copy; 2023 Sebastian Semeniuc
        </span>
      </div>
      <div className="h-[1px] bg-gray-200 w-full" />
    </footer>
  );
};
