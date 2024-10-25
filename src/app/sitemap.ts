import { type MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers();
  const domain = headersList.get("host")!;

  const routes = ["", "/about"].map((route) => ({
    url: `https://${domain}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
