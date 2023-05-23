import React, { FunctionComponent } from "react";
import Image from "next/image";

export const HomeHero: FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Avatar />
        <div className="flex flex-col ml-5 items-start gap-3">
          <h1 className="text-3xl font-bold">Sebastian Semeniuc</h1>
          <li className="bullet list-disc">Software Engineer</li>
        </div>
      </div>
      <p className="text-base max-w-lg my-3">
        Hi, I&apos;m Sebastian. As a <b>Software Engineer</b> at Fortech, I work
        on a platform for influencer marketing, connecting businesses with
        influencers. Outside of my full-time role, I&apos;m an avid tech
        enthusiast who loves to deep dive into both established and emerging
        technologies. My free time is spent brewing all kinds of crazy projects
        and innovative startup ideas. Curiosity fuels my passion, and the thrill
        of exploring the uncharted keeps me going!
      </p>
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="w-20 h-20 relative">
      <Image
        fill
        className="rounded-full"
        alt="Sebastian Semeniuc"
        src={"/images/me.jpeg"}
      ></Image>
    </div>
  );
};
