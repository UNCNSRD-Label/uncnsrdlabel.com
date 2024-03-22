import { cn } from "@uncnsrdlabel/lib";
import type { FunctionComponent } from "react";
import { SocialIcon } from "react-social-icons";

interface SocialMenuProps {
  className?: string;
  iconClassName?: string;
}

export const SocialMenu: FunctionComponent<SocialMenuProps> = ({
  className,
  iconClassName,
}) => {
  return (
    <menu
      className={cn(
        "min-h-8 grid grid-flow-col content-center justify-center gap-4",
        className,
      )}
    >
      <SocialIcon
        className={cn(
          "group aspect-square stroke-dark [&_.social-svg-icon]:!fill-dark [&_.social-svg-mask]:!fill-light",
          iconClassName,
        )}
        target="_blank"
        url="https://tiktok.com/@uncnsrdlabel/"
        style={{ height: "inherit", width: "auto" }}
      />
      <SocialIcon
        className={cn(
          "group aspect-square stroke-dark [&_.social-svg-icon]:!fill-dark [&_.social-svg-mask]:!fill-light",
          iconClassName,
        )}
        target="_blank"
        url="https://www.instagram.com/uncnsrdlabel/"
        style={{ height: "inherit", width: "auto" }}
      />
      {/* <SocialIcon
              className="group [&_.social-svg-mask]:!fill-dark dark:[&_.social-svg-mask]:!fill-light focus-visible:!fill-stateFocus hover:!fill-stateHover !h-12 !w-12"
              target="_blank"
              url="https://twitter.com/uncnsrdlabel/"
            /> */}
      {/* <SocialIcon
              className="group [&_.social-svg-mask]:!fill-dark dark:[&_.social-svg-mask]:!fill-light focus-visible:!fill-stateFocus hover:!fill-stateHover !h-12 !w-12"
              target="_blank"
              url="https://www.facebook.com/uncnsrdlabel/"
            /> */}
    </menu>
  );
};
