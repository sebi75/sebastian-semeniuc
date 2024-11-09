import React, { FunctionComponent } from "react";

const BIRTH_DATE = new Date("2003-08-19");
export const Me: FunctionComponent = () => {
  const getAge = () => {
    const today = new Date();
    const age = today.getFullYear() - BIRTH_DATE.getFullYear();
    const monthDiff = today.getMonth() - BIRTH_DATE.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < BIRTH_DATE.getDate())
    ) {
      return age - 1;
    }

    return age;
  };
  return (
    <div className="flex flex-col p-3 space-y-16 max-w-2xl">
      <section className="text-xl my-3 text-zinc-400 flex flex-col gap-7">
        <h1 className="text-5xl font-bold text-zinc-800 mt-5">
          Sebastian Semeniuc
        </h1>
        <p>
          I am a {getAge()} years old builder and founder based in Cluj-Napoca.
        </p>
        <p>I&apos;m working on AI products, some of which are:</p>
        <ul className="flex flex-col my-5 gap-7">
          <li className="list-disc gap-3">
            <a
              className="font-bold text-lg text-purple-600 underline underline-offset-2 mx-2"
              href="https://kleerk.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Kleerk
            </a>
            <span className="text-base">
              - Generate beautiful product photoshoots with AI with your team in{" "}
              <b>seconds</b> instead of <b>tens of hours</b> and{" "}
              <b>$K&apos;s</b> of dollars.
            </span>
          </li>
          <li className="list-disc">
            <a
              className="font-bold text-lg text-purple-600 underline underline-offset-2 mx-2"
              href="https://nexxtsupport.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              NexxtSupport
            </a>
            <span className="text-base">
              - Craft custom AI chatbots with your <b>own</b> data. Custom data
              flow in from various sources. Use them on your website to{" "}
              <b>automate</b> customer support.
            </span>
          </li>
          <li className="list-disc">
            <a
              className="font-bold text-lg text-purple-600 underline underline-offset-2 mx-2"
              href="https://shortsheap.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Shortsheap
            </a>
            <span className="text-base">
              - Use <b>AI</b> to generate <b>Short-Form</b> content in minutes
              for your brands or channels. <b>Clip</b> & <b>AI-Stories</b> &
              other <b>Popular Formats</b>.
            </span>
          </li>
        </ul>
      </section>

      <section className="text-xl my-3 text-zinc-400 flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-zinc-800 mt-5">Contact me</h1>

        <p>
          Reach out to me at{" "}
          <a
            href="mailto:
        sebisemeniuc@gmail.com"
            className="font-bold text-lg text-purple-600 underline underline-offset-2 mx-2"
          >
            sebisemeniuc@gmail.com
          </a>
          , directly DM me on
          <a
            href="https://x.com/sebisemeniuc"
            className="font-bold text-lg text-purple-600 underline underline-offset-2 mx-2"
          >
            X
          </a>
          or let&apos;s connect on{" "}
          <a
            href="https://www.linkedin.com/in/sebastian-semeniuc-17136321a/"
            className="font-bold text-lg text-purple-600 underline underline-offset-2 mx-2"
          >
            LinkedIn
          </a>
          . I&apos;m usually pretty quick to respond to any messages.
        </p>
        <p>
          Wanna build something together or just chat? I&apos;m always open to
          new opportunities and getting to know new ambitious people.
        </p>
      </section>
    </div>
  );
};
