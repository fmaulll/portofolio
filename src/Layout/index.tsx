import React, { FC } from "react";
import Navbar from "./Navbar";
import { ReactComponent as LinkedInIcon } from "../assets/icons/Linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/Github.svg";
import ModalContact from "../components/ModalContact";
import { useAppSelector } from "../hooks";
import MobileMenu from "../components/MobileMenu";

interface Props {
  children: JSX.Element;
}

const Container: FC<Props> = ({ children }) => {
  const showModal = useAppSelector((state) => state.ui.showModal);
  const showMenu = useAppSelector((state) => state.ui.openBurger);
  const dark = useAppSelector((state) => state.ui.darkMode);

  return (
    <div>
      <Navbar />
      <div
        className={`${
          dark ? "bg-purple" : "bg-light"
        } md:px-40 px-4 bg-purple min-h-screen`}
      >
        {children}
      </div>
      <div
        className={`flex items-center justify-center flex-col px-4 py-4 ${
          dark
            ? "drop-shadow-sm-top bg-purple"
            : "drop-shadow-sm-top-light bg-light"
        } md:px-40`}
      >
        <h1 className="text-blue-sky">Made with 🧡 in 2022</h1>
      </div>
      {showModal && <ModalContact />}
      {showMenu && <MobileMenu />}
    </div>
  );
};

export default Container;
