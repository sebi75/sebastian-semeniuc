import { FunctionComponent } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Avatar: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={cn("w-24 h-24 relative", className)}>
      <Image
        fill
        className="rounded-full"
        alt="Sebastian Semeniuc"
        src={"/images/me.jpeg"}
        unoptimized
      ></Image>
    </div>
  );
};
