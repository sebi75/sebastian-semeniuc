import { PageHeader } from "@/app/components/PageHeader";
import { Avatar } from "../components/Avatar";
import { Socials } from "../components/Socials";
import { Skills } from "../components/Skills";

export default function About() {
  return (
    <>
      <PageHeader title="About" />
      <div className="flex md:flex-row flex-col mt-10 flex-wrap w-full h-full">
        {/* Avatar with short description section */}
        <section className="flex flex-1 flex-col items-center gap-5">
          <Avatar className="w-36 h-36" />
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-zinc-700 text-center text-base">
              - Sebastian Semeniuc -
            </h1>
            <h1 className=" text-zinc-700 text-center text-sm italic">
              Programmer. Student. Entrepreneurship Passionate
            </h1>
            <Socials className="my-3" />
          </div>
        </section>
        {/* More info section */}
        <section className="flex flex-[2_1_0%] flex-col gap-5">
          <p className="text-zinc-600">
            Software engineer who aims to make a difference in the world by
            innovating through technology.
          </p>
          <p className="text-zinc-600">
            I&apos;m currently in a fulltime position as a software engineer at
            Fortech, working on leading influencer marketing product from the
            USA.
          </p>
          <p className="text-zinc-600">
            With every bit of free time I have, I&apos;m exploring and tinkering
            with new ideas and technology, and working on all kinds of crazy
            projects. I&apos;m currently working on Kleerk, a platform for
            content creation with the help of AI, both text and image
            generation. Kleerk puts together powerful, cutting edge technology
            served in a simple and easy to use interface.
          </p>
          <div className="mt-3">
            <Skills />
          </div>
        </section>
      </div>
    </>
  );
}
