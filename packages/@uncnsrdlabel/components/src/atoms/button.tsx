import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@uncnsrdlabel/lib";

const blockStyles =
  "font-medium gap-2 inline-flex items-center justify-center text-balance text-base p-2 uppercase btn";

const buttonVariants = cva(
  "ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: `${blockStyles} bg-primary text-primary-foreground hover:bg-primary/90`,
        destructive: `${blockStyles} bg-destructive text-destructive-foreground hover:bg-destructive/90`,
        outline: `${blockStyles} border border-input bg-background hover:bg-accent text-accent-foreground`,
        secondary: `${blockStyles} bg-secondary text-secondary-foreground hover:bg-secondary/80`,
        ghost: `hover:text-accent-foreground`,
        link: `text-primary underline-offset-4 hover:underline`,
      },
      size: {
        default: "",
        base: "px-4 py-2",
        xs: "px-2 py-1 text-xs",
        sm: "px-3 py-2 text-sm",
        lg: "px-8 py-2 text-lg",
        icon: "py-2 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
