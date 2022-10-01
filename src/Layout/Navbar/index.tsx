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
    <div className="z-10 w-full flex flex-col items-center justify-center fixed top-0">
      <div className="px-4 flex justify-between w-full items-center h-16 bg-blue drop-shadow-sm md:px-40">
        <h1 className="text-lg text-slate-100 text-blue-sky">
          fmaulll
          <span className="text-purple-light">()</span>
        </h1>
        <div className="hidden lg:flex">
          {navs.map((nav, index) => (
            <Link
              className={`${index !== 0 && "ml-6"} text-slate-100`}
              to={nav.url}
              onClick={() => dispatch(uiActions.setLocation(nav.title))}
            >
              <h2 className="text-yellow">
                <span className="text-gray">{"<"}</span>
                {nav.title}
                <span className="text-gray">{"/>"}</span>
              </h2>
            </Link>
          ))}
          <div
            className="ml-6 text-slate-100 cursor-pointer"
            onClick={handleContact}
          >
            <h2 className="text-slate-100 text-blue-sky">
              contact
              <span className="text-purple-light">()</span>
            </h2>
          </div>
        </div>
        {showMenu ? (
          <div
            className="text-slate-100 cursor-pointer lg:hidden"
            onClick={() => dispatch(uiActions.openBurger())}
          >
            <h2 className="text-slate-100 text-blue-sky">
              close
              <span className="text-purple-light">()</span>
            </h2>
          </div>
        ) : (
          <div
            className="text-slate-100 cursor-pointer lg:hidden"
            onClick={() => dispatch(uiActions.openBurger())}
          >
            <h2 className="text-slate-100 text-blue-sky">
              burger
              <span className="text-purple-light">()</span>
            </h2>
          </div>
        )}
      </div>
      <div className="px-4 flex w-full items-center bg-purple drop-shadow-sm md:px-40">
        <div className="flex items-center text-gray">
          src <Arrow className="w-3 ml-1" />
        </div>
        <div className="flex items-center text-gray ml-2">
          containers <Arrow className="w-3 ml-1" />
        </div>
        <div className="flex items-center text-gray ml-2">
          {location} <Arrow className="w-3 ml-1" />
        </div>
        <div className="flex items-center text-gray ml-2">index.tsx</div>
      </div>
    </div>
  );
};

export default Navbar;
