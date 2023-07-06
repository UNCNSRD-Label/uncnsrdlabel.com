"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
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
}

export type AccordionContentRef = HTMLDivElement;

export type AccordionHeaderRef = HTMLDivElement;

export type AccordionItemRef = HTMLDivElement;

export type AccordionTriggerRef = HTMLButtonElement;

export const AccordionTrigger = forwardRef<
  AccordionTriggerRef,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className="AccordionHeader">
    <AccordionPrimitive.Trigger
      className={clsx(
        "AccordionTrigger group flex w-full items-center justify-between gap-4 focus-visible:border-0 focus-visible:outline-dashed focus-visible:outline-aaaFocus",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="AccordionChevron h-5 w-5 group-data-[state=open]:rotate-180"
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
    className={clsx("AccordionContent", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className={clsx("AccordionContentText mt-4")}>{children}</div>
  </AccordionPrimitive.Content>
));

export const AccordionHeader = forwardRef<
  AccordionHeaderRef,
  AccordionHeaderProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header
    className={clsx("AccordionHeader uppercase", className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </AccordionPrimitive.Header>
));

export const AccordionItem = forwardRef<AccordionItemRef, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <AccordionPrimitive.Item
      className={clsx("AccordionItem border-t border-gray-700 py-6", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </AccordionPrimitive.Item>
  )
);

AccordionContent.displayName = "AccordionContent";
AccordionHeader.displayName = "AccordionHeader";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";

export const Accordion = AccordionPrimitive.Root;
