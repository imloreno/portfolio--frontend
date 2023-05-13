import React from "react";
import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";

type Props = {
  type: string;
  className?: string;
};

const SocialMediaIcons = (props: Props): any => {
  const { type, className } = props;

  const iconList: any = {
    gitHub: <FiGithub className={className} />,
    facebook: <FiFacebook className={className} />,
    whatsapp: <ImWhatsapp className={className} />,
    linkedin: <FiLinkedin className={className} />,
  };

  return iconList[type] ? iconList[type] : iconList.gitHub;
};

export default SocialMediaIcons;
