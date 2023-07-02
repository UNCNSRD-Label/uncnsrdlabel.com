import Script, { type ScriptProps } from "next/script";

export const MetaPixel = (props: ScriptProps) => {
  return (
    <Script id="meta-pixel" {...props}>
      {``}
    </Script>
  );
};

export default MetaPixel;
