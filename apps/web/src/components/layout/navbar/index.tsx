import { cn } from "@uncnsrdlabel/lib";
import { NavbarContent } from "./content";

type Props = {
  className?: string;
  blend?: boolean;
  lang: Intl.BCP47LanguageTag;
  showLogo?: boolean;
};

export function Navbar({ className, blend, lang, showLogo }: Props) {
  return (
    <nav
      className={cn(
        "navbar-global pointer-events-none sticky left-0 top-0 z-30 h-0 min-h-0 [&_>_*]:pointer-events-auto [&_>_*]:relative",
        {
          "text-light fill-white stroke-white mix-blend-difference": blend,
        },
        className,
      )}
    >
      <NavbarContent lang={lang} showLogo={showLogo} />
    </nav>
  );
}
