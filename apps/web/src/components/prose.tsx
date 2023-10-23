import { cn } from "@uncnsrdlabel/lib";
import type { FunctionComponent } from "react";

interface TextProps {
  html: string;
  className?: string;
}

export const Prose: FunctionComponent<TextProps> = ({ html, className }) => {
  return (
    <div
      className={cn(
        "prose",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};