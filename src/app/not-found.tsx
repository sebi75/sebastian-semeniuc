import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-w-4xl h-full my-auto mx-auto flex-col gap-3 flex items-center justify-center">
      <h1 className="text-zinc-600 max-w-xl text-4xl font-bold">
        Oops! The resource you are looking for couldn&apos;t be found.
      </h1>
      <Link className="underline underline-offset-4" href={"/"}>
        Return Home
      </Link>
    </div>
  );
}
