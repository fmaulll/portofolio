import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/Arrow.svg";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { uiActions } from "../../store/ui-slice";
import { ReactComponent as CrossIcon } from "../../assets/icons/Cross.svg";

const navs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
];

const Navbar = () => {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.ui.location);
  const showMenu = useAppSelector((state) => state.ui.openBurger);

  const handleContact = () => {
    dispatch(uiActions.openModal());
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      dispatch(uiActions.setLocation("Home"));
    } else if (window.location.pathname === "/about") {
      dispatch(uiActions.setLocation("About"));
    } else if (window.location.pathname === "/projects") {
      dispatch(uiActions.setLocation("Projects"));
    }
  }, [window.location.pathname]);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="px-4 flex justify-between w-full items-center bg-purple h-16 md:px-40">
        <h1 className="text-lg text-blue-sky font-bold">
          fmaulll
        </h1>
        <div className="hidden lg:flex">
          {navs.map((nav, index) => (
            <Link
              className={`${index !== 0 && "ml-10"}`}
              to={nav.url}
              onClick={() => dispatch(uiActions.setLocation(nav.title))}
            >
              <h2 className={`text-yellow font-semibold ${location === nav.title && "border-2 border-b-red border-x-0 border-t-0"}`}>
                {nav.title}
              </h2>
            </Link>
          ))}
          <div
            className="ml-6 cursor-pointer"
            onClick={handleContact}
          >
            <h2 className="text-blue-sky font-semibold">
              Contact
            </h2>
          </div>
        </div>
        {showMenu ? (
          <div
            className="cursor-pointer lg:hidden"
            onClick={() => dispatch(uiActions.openBurger())}
          >
            <h2 className="text-blue-sky">
              close
              <span className="text-purple-light">()</span>
            </h2>
          </div>
        ) : (
          <div
            className="text-slate-100 cursor-pointer lg:hidden"
            onClick={() => dispatch(uiActions.openBurger())}
          >
            <h2 className="text-blue-sky">
              burger
              <span className="text-purple-light">()</span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
