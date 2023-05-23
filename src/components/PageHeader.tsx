import React, { type FunctionComponent } from "react";

type PageHeaderProps = {
  title: string;
};

export const PageHeader: FunctionComponent<PageHeaderProps> = ({ title }) => {
  return (
    <header className="my-5">
      <h1 className="text-4xl font-bold my-4">{title}</h1>
      <div className="border w-full" />
    </header>
  );
};
