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

  return (
    <div>
      <Navbar />
      <div className="md:px-40 px-4 bg-purple min-h-screen">{children}</div>
      <div className="flex items-center justify-center px-4 py-4 drop-shadow-sm-top bg-purple md:px-40">
        <div className="flex-1">
          <h1 className="text-blue-sky">&copy;2022 fmaulll</h1>
        </div>
        <div className="flex-1 flex justify-end">
          <a href="">
            <LinkedInIcon className="fill-blue-sky" />
          </a>
          <a href="">
            <GithubIcon className="fill-blue-sky ml-4" />
          </a>
        </div>
      </div>
      {showModal && <ModalContact />}
      {showMenu && <MobileMenu />}
    </div>
  );
};

export default Container;
