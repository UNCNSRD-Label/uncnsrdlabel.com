import { LogotypeIcon } from "@/components/icons/logotype";
import { ImageResponse } from "next/server";

export type Props = {
  title: string;
};

export async function OpengraphImage(
  props: Props,
): Promise<ImageResponse> {
  const { title = process.env.SITE_NAME } = props;

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-hotOrange">
        <div tw="flex flex-none items-center justify-center w-1/2 h-auto bg-hotPink">
          <LogotypeIcon
            className="w-full h-auto"
          />
        </div>
        <p tw="mt-12 text-6xl font-bold text-green">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        // {
        //   name: "Inter",
        //   data: await fetch(
        //     new URL("../fonts/Inter-Bold.ttf", import.meta.url),
        //   ).then((res) => res.arrayBuffer()),
        //   style: "normal",
        //   weight: 700,
        // },
      ],
    },
  );
}
