import { cn } from "@uncnsrdlabel/lib";

const dots = "animate-blink aspect-square bg-white block h-full rounded-full";

export const LoadingDots = ({ className }: { className?: string }) => {
  return (
    <span className={cn("flex h-1 items-center gap-1", className)}>
      <span className={cn(dots)} />
      <span className={cn(dots, "animation-delay-[200ms]")} />
      <span className={cn(dots, "animation-delay-[400ms]")} />
    </span>
  );
};
