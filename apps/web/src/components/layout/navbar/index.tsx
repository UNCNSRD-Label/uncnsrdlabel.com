import { cn } from "@uncnsrdlabel/lib";
import { NavbarContent } from "./content";

type Props = {
  className?: string;
  blend?: boolean;
  lang: Navigator['language'];
  showLogo?: boolean;
};

export function Navbar({ className, blend, lang, showLogo = false }: Props) {
  return (
    <div className={cn("pointer-events-none h-0", className,
    )}>
    <nav
      className={cn(
        "[&_>_*]:pointer-events-auto [&_>_*]:relative",
        "grid w-full grid-flow-col items-center justify-between gap-20 px-4 py-1 sm:auto-cols-fr",
        {
          "text-light fill-white stroke-white mix-blend-difference": blend,
        },
      )}
    >
      <NavbarContent lang={lang} showLogo={showLogo} />
    </nav>
    </div>
  );
}
