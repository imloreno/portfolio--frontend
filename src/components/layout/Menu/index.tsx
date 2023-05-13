import React from "react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, switchTheme } from "state/actions";
import Icons from "components/common/icons";
import ThemeIcon from "components/common/icons/ThemeIcon";
import { NavLink, useNavigate } from "react-router-dom";
import langPick from "consts/lang";

const Menu = (props: { setIsLoading: any }) => {
  //Loading state
  const store = useSelector((state: any) => state.language);
  const { menu }: any = langPick(store.lang || "en");

  const { setIsLoading } = props;

  //Theme manager
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    const DARK_MODE = window.matchMedia("(prefers-color-scheme: dark)").matches;
    dispatch(setTheme(DARK_MODE));
  }, [dispatch]);

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
  const style = { "--target": pageTarget - 1 } as React.CSSProperties;

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
          <div className="menu__active-element" style={style}></div>
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
                  <span>{menu.routeTags[index]}</span>
                </div>
              </li>
            </NavLink>
          ))}
          <li
            className="menu__item menu__item--theme"
            onClick={() => dispatch(switchTheme())}
          >
            <ThemeIcon dark={theme.dark} />
            <div className="menu__item--popup">
              <span>{theme.dark ? "dark" : "light"}</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
