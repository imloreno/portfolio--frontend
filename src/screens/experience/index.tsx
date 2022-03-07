import { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Filter from "components/common/filter";

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
        <ul className="experience_menu">
          <NavLink
            to="/projects/experience"
            className={(active) => (active.isActive ? "active" : "")}
          >
            <li className="experience_menu_link">Work experience</li>
          </NavLink>
          <NavLink
            to="/projects/portfolio"
            className={(active) => (active.isActive ? "active" : "")}
          >
            <li className="experience_menu_link">Portfolio</li>
          </NavLink>
          <NavLink
            to="/projects/achievements"
            className={(active) => (active.isActive ? "active" : "")}
          >
            <li className="experience_menu_link">Personal achievements</li>
          </NavLink>
        </ul>
        <div className="experience_item_container">
          <Outlet />
        </div>
      </div>
    </section>
  );
};
export default Experience;
