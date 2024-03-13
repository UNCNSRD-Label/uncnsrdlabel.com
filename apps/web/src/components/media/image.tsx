// import { onLoad } from "@uncnsrdlabel/lib";
import NextImage, { type ImageProps } from "next/image";

async function getBase64EncodedPlaceholder(url?: string) {
  if (!url) {
    return;
  }

  const response = await fetch(url);

  if (!response.ok) {
    return;
  }

  const blob = await response.arrayBuffer();

  return `data:${response.headers.get("content-type")};base64,${Buffer.from(blob).toString("base64")}`;
}

export async function Image({
  revealEffect = false,
  ...props
}: ImageProps & { delay?: number; revealEffect?: boolean }) {
  const blurDataURL = await getBase64EncodedPlaceholder(props.blurDataURL);

  return (
    <NextImage
      {...props}
      blurDataURL={blurDataURL}
      className={props.className}
      // onLoad={(event) => {
      //   const img = event.currentTarget as HTMLImageElement;

      //   setTimeout(() => {
      //     onLoad(img);
      //   }, props.delay || 0);

      //   if (props.onLoad) {
      //     props.onLoad(event);
      //   }
      // }}
      placeholder="blur"
    />
  );
}
