import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Filter from "components/common/filter";
import SubMenu from "components/common/submenu";

//Submenu routes
const submenu = [
  {
    text: "Work experience",
    path: "experience",
    className: "submenu_item",
  },
  {
    text: "Portfolio",
    path: "portfolio",
    className: "submenu_item",
  },
  {
    text: "Personal achievements",
    path: "achievements",
    className: "submenu_item",
  },
];

const Experience = (props: { isLoading?: boolean }) => {
  //Router redirect
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    location.pathname === "/projects" && navigate("/projects/experience");
  });

  return (
    <section
      className={`experience open-animation scroll ${
        props.isLoading && "change-animation"
      }`}
    >
      <Filter />
      <header>
        <h1 className="title experience-header__title">Experience.</h1>
      </header>
      <div className="experience__container">
        {<SubMenu data={submenu} />}
        <div className="experience_item_container">
          <Outlet />
        </div>
      </div>
    </section>
  );
};
export default Experience;
