import { Me } from "@/app/components/me";
import { constructMetadata } from "@/utils";

export const metadata = constructMetadata();

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-15rem)] flex items-center">
      <Me />
    </div>
  );
}
