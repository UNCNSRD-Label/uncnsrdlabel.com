import { cn } from "@uncnsrdlabel/lib";
import { HTMLProps, type FunctionComponent } from "react";
import Markdown from "react-markdown";
import { type RequireExactlyOne } from "type-fest";

export type ProseProps = HTMLProps<HTMLElement> & {
  html: string;
  markdown: string;
};

export const Prose: FunctionComponent<
  RequireExactlyOne<ProseProps, "html" | "markdown">
> = ({ className, html, markdown, style }) => {
  if (markdown) {
    return (
      <div className={cn("prose", className)} style={style}>
        <Markdown>{markdown}</Markdown>
      </div>
    );
  }

  if (html) {
    return (
      <div
        className={cn("prose", className)}
        dangerouslySetInnerHTML={{ __html: html }}
        style={style}
      />
    );
  }

  return null;
};
