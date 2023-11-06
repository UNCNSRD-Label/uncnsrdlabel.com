import { LogotypeIcon } from "@/components/icons/logotype";
import { ImageResponse } from "next/og";
 
export const alt = 'UNCNSRD logo'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}

export type Props = {
  title: string;
};

export async function OpengraphImageResponse({
  title = process.env.SITE_NAME!,
}: Props): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-hotOrange">
        <LogotypeIcon style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} />
        <p tw="mt-12 text-6xl font-bold">{title}</p>
      </div>
    ),
    {
      ...size,
    }
  );
}
