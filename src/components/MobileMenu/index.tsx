import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrossIcon } from "../../assets/icons/Cross.svg";
import { useAppDispatch } from "../../hooks";
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
  {
    title: "Projects",
    url: "/projects",
  },
];

const MobileMenu = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-screen fixed flex justify-between flex-col bg-purple top-0 left-0">
      <div className="flex flex-col w-full mt-24">
        {navs.map((nav, index) => (
          <Link
            className={`${index !== 0 && "mt-2"} text-slate-100 p-4 `}
            to={nav.url}
            onClick={() => {
              dispatch(uiActions.setLocation(nav.title));
              dispatch(uiActions.openBurger());
            }}
          >
            <h2 className="text-yellow border border-transparent border-b-gray">
              <span className="text-gray">{"<"}</span>
              {nav.title}
              <span className="text-gray">{"/>"}</span>
            </h2>
          </Link>
        ))}
        <div
          className={`mt-2 text-slate-100 p-4`}
          onClick={() => {
            dispatch(uiActions.openModal());
            dispatch(uiActions.openBurger());
          }}
        >
          <h2 className="text-slate-100 text-blue-sky border border-transparent border-b-gray">
            contact
            <span className="text-purple-light">()</span>
          </h2>
        </div>
      </div>
      <div className="flex m-4 justify-center items-center">
        <a href="">
          <LinkedInIcon className="fill-blue-sky" />
        </a>
        <a href="">
          <GithubIcon className="fill-blue-sky ml-4" />
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
