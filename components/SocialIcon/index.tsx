import type { FC } from "react";

import { SocialIcon as ReactSocialIcon } from "react-social-icons";

import { theme } from "#/lib/constants/style";

type Props = {
  bgColor?: string;
  fgColor?: string;
  size?: number;
  url: string;
};

export const SocialIcon: FC<Props> = ({
  bgColor = `hsl(var(--p))`,
  fgColor = `hsl(var(--pc))`,
  size = 40,
  url,
}) => {
  return (
    <ReactSocialIcon
      bgColor={bgColor}
      fgColor={fgColor}
      style={{ blockSize: size, inlineSize: size }}
      url={url}
    />
  );
};

export default SocialIcon;
