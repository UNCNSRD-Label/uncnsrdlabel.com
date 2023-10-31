import { cn } from "@uncnsrdlabel/lib";
import type { FunctionComponent } from "react";
import { HTMLProps } from "react";

export type TextProps = HTMLProps<HTMLElement> & {
  html: string;
};

export const Prose: FunctionComponent<TextProps> = ({
  className,
  html,
  style,
}) => {
  return (
    <div
      className={cn("prose", className)}
      dangerouslySetInnerHTML={{ __html: html }}
      style={style}
    />
  );
};
