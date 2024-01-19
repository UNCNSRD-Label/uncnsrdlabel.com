import { cn } from "@uncnsrdlabel/lib";

const dots = "mx-1 inline-block h-2 w-2 animate-blink rounded-md bg-white";

export const LoadingDots = ({ className }: { className?: string }) => {
  return (
    <span className={cn("items-center flex", className)}>
      <span className={cn(dots)} />
      <span className={cn(dots, "animation-delay-[200ms]")} />
      <span className={cn(dots, "animation-delay-[400ms]")} />
    </span>
  );
};
