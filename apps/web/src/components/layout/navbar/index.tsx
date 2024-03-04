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
        "pointer-events-none h-0 [&_>_*]:pointer-events-auto [&_>_*]:relative",
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
