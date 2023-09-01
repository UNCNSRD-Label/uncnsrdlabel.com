"use client";

import { cn } from "@uncnsrdlabel/lib/classname";
import { AnimatePresence, motion } from "framer-motion";

type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

export const PageTransition = ({
  children,
  className,
  ...props
}: PageTransitionProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className={cn(className)}
        {...props}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
