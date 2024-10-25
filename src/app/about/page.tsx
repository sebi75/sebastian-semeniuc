import { Avatar } from "../components/Avatar";
import { Socials } from "../components/Socials";
import { Skills } from "../components/Skills";

export default function About() {
  return (
    <div className="flex min-h-[calc(100vh_-_15rem)] justify-center space-y-16 items-center flex-col mt-10 flex-wrap w-full h-full">
      {/* Avatar with short description section */}
      <section className="flex flex-col items-center gap-5">
        <Avatar className="w-36 h-36" />
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-zinc-800 text-center text-xl">
            Sebastian Semeniuc
          </h1>
          <Socials className="my-3" />
        </div>
      </section>
      {/* More info section */}
      <section className="flex flex-col gap-5">
        <p className="text-xl text-zinc-400">
          Builder who aims to make a difference in the world by innovating
          through technology.
        </p>
        <p className="text-xl text-zinc-400">
          With every bit of free time I have, I&apos;m exploring and tinkering
          with new ideas and technology, and working on all kinds of projects.
        </p>
        <div className="mt-3">
          <Skills />
        </div>
      </section>
    </div>
  );
}
