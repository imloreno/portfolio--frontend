import React from "react";
import { NavLink } from "react-router-dom";

interface Link {
  path: string;
  className: string;
  text: string;
}

const SubMenu = (linkList: { data: Link[] }) => {
  return (
    <ul className="submenu_container">
      {!!linkList.data &&
        linkList.data.map((link: Link, index: number) => (
          <NavLink
            key={index}
            to={link.path}
            className={(active) => (active.isActive ? "active" : "")}
          >
            <li className={link.className + " submenu_item"}>{link.text}</li>
          </NavLink>
        ))}
    </ul>
  );
};

export default SubMenu;
