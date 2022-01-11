import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "screens/Home";

interface routes {
  component: string;
  icon: string;
  path: string;
  text: string;
}

//Obtain the component target
const getComponent = (target: string, index: number): JSX.Element => {
  switch (target) {
    case "home":
      return <Home />;
    default:
      return <Home />;
  }
};

const Index = () => {
  const state: any = useSelector((state) => state);
  const ROUTES = state.router.pages;

  return (
    <Router>
      <Routes>
        {ROUTES.map((route: routes, index: number) => (
          <Route
            path={"/" + route.path}
            key={index}
            element={getComponent(route.component, index)}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default Index;
