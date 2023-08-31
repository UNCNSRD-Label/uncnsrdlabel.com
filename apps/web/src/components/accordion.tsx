"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@uncnsrdlabel/lib/classname";
import { ReactNode, forwardRef } from "react";

interface AccordionContentProps {
  children?: ReactNode;
  className?: string;
  forceMount?: true;
}

interface AccordionHeaderProps {
  children?: ReactNode;
  className?: string;
}

interface AccordionItemProps {
  children?: ReactNode;
  className?: string;
  value: string;
}

interface AccordionTriggerProps {
  children?: ReactNode;
  className?: string;
  chevronClassName?: string;
}

export type AccordionContentRef = HTMLDivElement;

export type AccordionHeaderRef = HTMLDivElement;

export type AccordionItemRef = HTMLDivElement;

export type AccordionTriggerRef = HTMLButtonElement;

export const AccordionTrigger = forwardRef<
  AccordionTriggerRef,
  AccordionTriggerProps
>(({ children, className, chevronClassName, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className="AccordionHeader">
    <AccordionPrimitive.Trigger
      className={cn(
        "AccordionTrigger focus-visible:outline-aaaFocus group flex w-full items-center justify-between gap-4 focus-visible:border-0 focus-visible:outline-dashed",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className={cn(
          "AccordionChevron h-5 w-5 group-data-[state=open]:rotate-180",
          chevronClassName,
        )}
        aria-hidden
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

export const AccordionContent = forwardRef<
  AccordionContentRef,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    className={cn("AccordionContent", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className={cn("AccordionContentText mt-4")}>{children}</div>
  </AccordionPrimitive.Content>
));

export const AccordionHeader = forwardRef<
  AccordionHeaderRef,
  AccordionHeaderProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header
    className={cn("AccordionHeader uppercase", className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </AccordionPrimitive.Header>
));

export const AccordionItem = forwardRef<AccordionItemRef, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <AccordionPrimitive.Item
      className={cn("AccordionItem border-t py-6", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </AccordionPrimitive.Item>
  ),
);

AccordionContent.displayName = "AccordionContent";
AccordionHeader.displayName = "AccordionHeader";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";

export const Accordion = AccordionPrimitive.Root;
