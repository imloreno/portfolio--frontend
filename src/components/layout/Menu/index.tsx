import Icons from "components/common/icons";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Menu = (props: { setIsLoading: any }) => {
  const { setIsLoading } = props;
  //Navigation
  const navigate = useNavigate();
  const handleNavigation = (props: { e: any; path: string }) => {
    props.e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(props.path);
    }, 250);
  };

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
  //Adding active classlist
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
            <NavLink
              to={item.path}
              className={isActive}
              key={index}
              onClick={(e) => handleNavigation({ e, path: item.path })}
            >
              <li className="menu__item">
                <Icons type={item.icon} />
                <div className="menu__item--popup">
                  <span>{item.text}</span>
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
