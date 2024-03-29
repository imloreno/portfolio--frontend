import React from "react";

import { Suspense, lazy, useState } from "react";

import Menu from "components/layout/Menu";
import Loading from "./loading";
import { useSelector } from "react-redux";

const Home = lazy(() => import("screen/Home"));
const Skills = lazy(() => import("screen/Skills"));
const Experience = lazy(() => import("screen/experience"));
const Academy = lazy(() => import("screen/academy"));
const Contact = lazy(() => import("screen/contact"));

const Screens = (props: { screen: string }): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  //Importing from redux
  const isDark = useSelector((state: any) => state.theme.dark);

  const SCREEN_LIST: any = {
    home: <Home isLoading={isLoading} />,
    skills: <Skills isLoading={isLoading} />,
    projects: <Experience isLoading={isLoading} />,
    academy: <Academy isLoading={isLoading} />,
    contact: <Contact isLoading={isLoading} />,
  };

  return (
    <div className={`body ${isDark ? "dark-theme" : "light-theme"}`}>
      <Menu setIsLoading={setIsLoading} />
      <Suspense fallback={<Loading />}>
        {SCREEN_LIST[props.screen] ?? SCREEN_LIST.home}
      </Suspense>
    </div>
  );
};

export default Screens;
