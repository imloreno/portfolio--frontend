import { Suspense, lazy } from "react";

import Menu from "components/layout/menu";
import Loading from "./loading";
const Home = lazy(() => import("screens/home"));
const Skills = lazy(() => import("screens/skills"));
const Experience = lazy(() => import("./experience"));

const SCREEN_LIST: any = {
  home: <Home />,
  about: <Home />,
  skills: <Skills />,
  projects: <Experience />,
};

const Screens = (props: { screen: string }): JSX.Element => {
  return (
    <div className="body">
      <Menu />

      <Suspense fallback={<Loading />}>
        {SCREEN_LIST[props.screen] ?? SCREEN_LIST.home}
      </Suspense>
    </div>
  );
};

export default Screens;
