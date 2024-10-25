import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sebastian Semeniuc",
    short_name: "SebastianSemeniuc.com",
    description:
      "Sebastian Semeniuc is a 21 years old builder based in Cluj-Napoca working on various cool projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
  };
}
