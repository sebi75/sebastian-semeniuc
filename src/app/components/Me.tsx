import React, { FunctionComponent } from "react";
import { Avatar } from "./Avatar";

export const Me: FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <Avatar />
      <h1 className="text-5xl font-bold mt-5">
        Programmer. Student. Entrepreneurship Passionate.
      </h1>
      {/* Personal information paragraphs */}
      <div className="my-5 max-w-2xl">
        <p className="text-base text-zinc-600">
          Hey, I&apos;m Sebastian 👋, a young individual striving to make a
          difference in the world.
        </p>
        <p className="text-base text-zinc-600 my-3">
          I&apos;m a Software Engineer at
          <a
            className="font-bold text-black underline underline-offset-4 mx-2"
            href="https://www.fortech.ro/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Fortech
          </a>{" "}
          where I help developing and maintaining a platform for influencer
          marketing.
        </p>
        <p className="text-base my-3 text-zinc-600">
          I&apos;m also a Robotics Engineering student at
          <a
            className="font-bold text-black underline underline-offset-4 mx-2"
            href="https://www.utcluj.ro/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Technical University of Cluj-Napoca
          </a>
          .
        </p>

        <p className="text-base my-3 text-zinc-600">
          I&apos;m currently working on developing next generation AI
          applications for simplifying tedious and time consuming tasks. Check
          out
          <a
            className="font-bold bg-gradient-to-t from-gray-800 to-[#7d53f7] bg-clip-text text-lg text-transparent underline underline-offset-4 mx-2"
            href="https://www.kleerk.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            KleerkAI
          </a>
        </p>
      </div>
    </div>
  );
};
