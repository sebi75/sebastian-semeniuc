"use client";
import React, { type FunctionComponent } from "react";

export default function Error() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <h1>Oops, something went wrong...</h1>
      <p>Try to refresh the page</p>
    </div>
  );
}
