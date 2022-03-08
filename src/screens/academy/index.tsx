import SubMenu from "components/common/submenu";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

//Submenu routes
const submenu = [
  {
    text: "UDEMY",
    path: "udemy",
    className: "submenu_item",
  },
  {
    text: "YouTube",
    path: "youtube",
    className: "submenu_item",
  },
  {
    text: "High School",
    path: "highschool",
    className: "submenu_item",
  },
  {
    text: "College",
    path: "college",
    className: "submenu_item",
  },
];

const Academy = (props: { isLoading?: boolean }) => {
  //Router redirect
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    location.pathname === "/academy" && navigate("/academy/udemy");
  });

  return (
    <section
      className={`academy scroll open-animation ${
        props.isLoading && "change-animation"
      }`}
    >
      <header>
        <h1 className="title academy__title">Training.</h1>
      </header>

      <div className="academy__container">
        <SubMenu data={submenu} />
        <div className="academy__articles">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Academy;
