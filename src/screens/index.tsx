import { Suspense, lazy, useState } from "react";

import Menu from "components/layout/menu";
import Loading from "./loading";

const Home = lazy(() => import("screens/home"));
const Skills = lazy(() => import("screens/skills"));
const Experience = lazy(() => import("screens/experience"));
const Academy = lazy(() => import("screens/academy"));
const Contact = lazy(() => import("screens/contact"));

const Screens = (props: { screen: string }): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  const SCREEN_LIST: any = {
    home: <Home isLoading={isLoading} />,
    skills: <Skills isLoading={isLoading} />,
    projects: <Experience isLoading={isLoading} />,
    academy: <Academy isLoading={isLoading} />,
    contact: <Contact isLoading={isLoading} />,
  };

  return (
    <div className="body">
      <Menu setIsLoading={setIsLoading} />
      <Suspense fallback={<Loading />}>
        {SCREEN_LIST[props.screen] ?? SCREEN_LIST.home}
      </Suspense>
    </div>
  );
};

export default Screens;
