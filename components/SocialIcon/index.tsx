import { FC } from "react";
import { SocialIcon as ReactSocialIcon } from "react-social-icons";

type Props = {
  bgColor?: string;
  fgColor?: string;
  size?: number;
  url: string;
};

export const SocialIcon: FC<Props> = ({ bgColor = "#000", fgColor = "#fff", size = 40, url }) => {
  return <ReactSocialIcon bgColor={bgColor} fgColor={fgColor} style={{ height: size, width: size }} url={url} />
};

export default SocialIcon;
