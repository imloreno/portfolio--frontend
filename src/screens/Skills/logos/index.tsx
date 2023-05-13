import React from "react";
import HtmlLogo from "./svg/HtmlLogo";
import CssLogo from "./svg/CssLogo";
import Es6Logo from "./svg/Es6Logo";
import SassLogo from "./svg/SassLogo";
import ReactLogo from "./svg/ReactLogo";
import MySqlLogo from "./svg/MySqlLogo";
import ReduxLogo from "./svg/ReduxLogo";
import PhpLogo from "./svg/PhpLogo";
import GitLogo from "./svg/GitLogo";
import VsStudioLogo from "./svg/VsStudioLogo";
import GitHubLogo from "./svg/GitHubLogo";
import PsLogo from "./svg/PsLogo";
import AiLogo from "./svg/AiLogo";
import FigmaLogo from "./svg/FigmaLogo";

interface props {
  type: string;
  className?: string;
}

const Logos = (props: props) => {
  const { type, className } = props;

  const showIconType: any = {
    html: <HtmlLogo className={className ?? ""} />,
    css: <CssLogo className={className ?? ""} />,
    sass: <SassLogo className={className ?? ""} />,
    es6: <Es6Logo className={className ?? ""} />,
    react: <ReactLogo className={className ?? ""} />,
    mysql: <MySqlLogo className={className ?? ""} />,
    redux: <ReduxLogo className={className ?? ""} />,
    php: <PhpLogo className={className ?? ""} />,
    git: <GitLogo className={className ?? ""} />,
    github: <GitHubLogo className={className ?? ""} />,
    vscode: <VsStudioLogo className={className ?? ""} />,
    psd: <PsLogo className={className ?? ""} />,
    ai: <AiLogo className={className ?? ""} />,
    figma: <FigmaLogo className={className ?? ""} />,
    default: <HtmlLogo className={className ?? ""} />,
  };

  return showIconType[type] || showIconType["default"];
};

export default Logos;
