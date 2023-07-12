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
        "prose-body:text-inherit sm:prose-h4:text-1xl prose mx-auto max-w-6xl text-base leading-7 text-inherit prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-inherit prose-a:text-inherit prose-a:underline prose-strong:text-inherit prose-ol:list-decimal prose-ul:list-disc sm:prose-headings:mt-8 sm:prose-h1:text-5xl sm:prose-h2:text-3xl sm:prose-h3:text-2xl sm:prose-h5:text-xl sm:prose-h6:text-lg sm:prose-ol:mt-8 sm:prose-ol:pl-6 sm:prose-ul:mt-8 sm:prose-ul:pl-6 sm:[&_.service-main-title:has(+_p_>_strong)]:mb-0 sm:[&_.service-main-title]:text-8xl sm:[&_.service-main-title]:uppercase sm:[&_.service-main-title_+_p:has(>_strong)]:mb-16 sm:[&_.service-main-title_+_p:has(>_strong)]:text-xl",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};

export default Prose;
