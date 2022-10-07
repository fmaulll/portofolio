import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrossIcon } from "../../assets/icons/Cross.svg";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { uiActions } from "../../store/ui-slice";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/Linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/Github.svg";

const navs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
];

const MobileMenu = () => {
  const dispatch = useAppDispatch();
  const dark = useAppSelector((state) => state.ui.darkMode);
  return (
    <div className={`w-full h-screen fixed flex justify-between flex-col ${dark ? "bg-purple" : "bg-light"} top-0 left-0`}>
      <div className="flex flex-col w-full justify-center items-center drop-shadow">
        <div
          className={`flex justify-between w-full items-center ${
            dark ? "bg-purple" : "bg-light"
          } h-16 px-4 md:px-40`}
        >
          <h1 className="text-lg text-blue-sky font-bold">fmaulll</h1>
          <CrossIcon
            className="h-6"
            onClick={() => dispatch(uiActions.openBurger())}
          />
        </div>
        {navs.map((nav, index) => (
          <Link
            className={`${index !== 0 && "mt-2"} py-4`}
            to={nav.url}
            onClick={() => {
              dispatch(uiActions.setLocation(nav.title));
              dispatch(uiActions.openBurger());
            }}
          >
            <h2 className="text-yellow font-bold text-xl">{nav.title}</h2>
          </Link>
        ))}
        <div
          className={` text-slate-100 py-4`}
          onClick={() => {
            dispatch(uiActions.openModal());
            dispatch(uiActions.openBurger());
          }}
        >
          <h2 className="text-blue-sky font-bold text-xl">Contact</h2>
        </div>
        {dark && (
          <div
            onClick={() => dispatch(uiActions.showDarkMode())}
            className={`border-purple-light justify-end bg-purple h-6 w-6 items-center overflow-hidden relative rounded-full p-1 flex border-2 cursor-pointer`}
          >
            <div
              className={`h-full rounded-full w-full bg-purple-light absolute right-[-8px]`}
            />
          </div>
        )}
        {!dark && (
          <div
            onClick={() => dispatch(uiActions.showDarkMode())}
            className={`border-yellow justify-end bg-white h-6 w-6 items-center overflow-hidden relative rounded-full p-1 flex border-2 cursor-pointer`}
          ></div>
        )}
      </div>
      <div className="flex m-4 justify-center items-center">
        <a href="https://www.linkedin.com/in/fmaulll/">
          <LinkedInIcon className="fill-blue-sky" />
        </a>
        <a href="https://github.com/fmaulll">
          <GithubIcon className="fill-blue-sky ml-4" />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
