import { OpengraphImageResponse } from "@/components/opengraph-image-response";

export const runtime = "edge";

export const alt = process.env.SITE_NAME!;

export default async function RootOpengraphImage() {
  const title = process.env.SITE_NAME!;

  return await OpengraphImageResponse({ title });
}
