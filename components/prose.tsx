import { clsx } from "clsx";
import type { FunctionComponent } from "react";

interface TextProps {
  html: string;
  className?: string;
}

const Prose: FunctionComponent<TextProps> = ({ html, className }) => {
  return (
    <div
      className={clsx(
        "prose-body:text-inherit prose-h4:text-1xl prose mx-auto max-w-6xl text-base leading-7 text-inherit prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-inherit prose-h1:text-5xl prose-h2:text-3xl prose-h3:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-inherit prose-a:underline prose-strong:text-inherit prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 [&_.service-main-title:has(+_p_>_strong)]:mb-0 [&_.service-main-title]:text-8xl [&_.service-main-title]:uppercase [&_.service-main-title_+_p:has(>_strong)]:mb-16 [&_.service-main-title_+_p:has(>_strong)]:text-xl",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};

export default Prose;
