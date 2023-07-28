import { clsx } from "clsx";
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
      className={clsx(
        "min-h-8 grid grid-flow-col content-center justify-center gap-4",
        className,
      )}
    >
      <SocialIcon
        className={clsx(
          "group aspect-square fill-black hover:!fill-aaaHover hover:!stroke-aaaHover focus-visible:!fill-aaaFocus focus-visible:!stroke-aaaFocus dark:fill-white [&_.social-svg-mask]:!fill-inherit",
          iconClassName,
        )}
        target="_blank"
        url="https://tiktok.com/@uncnsrdlabel/"
        style={{ height: "inherit", width: "auto" }}
      />
      <SocialIcon
        className={clsx(
          "group aspect-square fill-black hover:!fill-aaaHover hover:!stroke-aaaHover focus-visible:!fill-aaaFocus focus-visible:!stroke-aaaFocus dark:fill-white [&_.social-svg-mask]:!fill-inherit",
          iconClassName,
        )}
        target="_blank"
        url="https://www.instagram.com/uncnsrdlabel/"
        style={{ height: "inherit", width: "auto" }}
      />
      {/* <SocialIcon
              className="group [&_.social-svg-mask]:!fill-black dark:[&_.social-svg-mask]:!fill-white focus-visible:!fill-aaaFocus hover:!fill-aaaHover !h-12 !w-12"
              target="_blank"
              url="https://twitter.com/uncnsrdlabel/"
            /> */}
      {/* <SocialIcon
              className="group [&_.social-svg-mask]:!fill-black dark:[&_.social-svg-mask]:!fill-white focus-visible:!fill-aaaFocus hover:!fill-aaaHover !h-12 !w-12"
              target="_blank"
              url="https://www.facebook.com/uncnsrdlabel/"
            /> */}
    </menu>
  );
};

export default SocialMenu;
