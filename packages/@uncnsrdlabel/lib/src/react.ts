import { Children, isValidElement, type ReactElement, type ReactNode } from "react";

export function getValidChildren(children: ReactNode) {
  return Children.toArray(children).filter((child) =>
    isValidElement(child),
  ) as ReactElement[];
}
