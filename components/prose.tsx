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
        "prose-body:text-inherit prose mx-auto max-w-6xl text-base leading-7 text-inherit prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-inherit prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-inherit prose-a:underline prose-strong:text-inherit prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};

export default Prose;
