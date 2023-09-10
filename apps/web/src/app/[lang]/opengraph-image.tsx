import { OpengraphImage } from "@/components/opengraph-image";

export const runtime = "edge";

export const alt = process.env.SITE_NAME;
 
export default async function Image() {
  const title = process.env.SITE_NAME;

  return await OpengraphImage({ title });
}
