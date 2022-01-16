import Icons from "components/common/icons";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Menu = () => {
  //Page number
  const [pageTarget, setPageTarget] = useState(0);

  //Call to redux
  const PAGES = useSelector((state: any) => state.router.pages);

  //Menu list reference
  const menuList: any = useRef();

  //When the page has been changed
  useEffect(() => {
    const LINK_LIST = menuList.current.childNodes;
    LINK_LIST.forEach((item: any, index: number) => {
      item.className === "active" && setPageTarget(index);
    });
  });

  const isActive = (props: { isActive: boolean }) => {
    return props.isActive ? "active" : "";
  };

  return (
    <header className="menu">
      <nav>
        <ul className="menu__list" ref={menuList}>
          <div
            className="menu__active-element"
            style={{ transform: `translateY(${4 * (pageTarget - 1)}rem)` }}
          ></div>
          {PAGES.map((item: any, index: number) => (
            <NavLink to={item.path} className={isActive} key={index}>
              <li className="menu__item">
                <Icons type={item.icon} />
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
