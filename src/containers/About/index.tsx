import React, { useState } from "react";
import Nice from "../../assets/images/nice.png";
import ObjectComponent from "../../components/ObjectComponent";
import { ReactComponent as DownloadIcon } from "../../assets/icons/Download.svg";
import { useAppSelector } from "../../hooks";

const About = () => {
  const dark = useAppSelector((state) => state.ui.darkMode);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row justify-center py-16">
      <div className="w-full md:flex-1 flex flex-col mr-4">
        <h1
          className={`${
            dark ? "text-gray" : "text-black"
          } font-semibold text-3xl md:text-7xl`}
        >
          Skills &<br />
          Experiences
        </h1>

        <p className="text-gray md:mr-4 font-roboto mt-4 flex items-center">
          Download my resume{" "}
          <a
            className="ml-4 bg-purple-light hover:bg-white drop-shadow p-2 rounded-full transition-all"
            href=""
          >
            <DownloadIcon className={`${dark? "fill-purple" : "fill-light"}`} />
          </a>
        </p>
        <p className="text-gray md:mr-4 font-roboto mt-4">
          I'm a Frontend Developer who has 1+ year of experience. I am outgoing,
          dedicated, and open-minded. I get across to people and adjust to
          changes with ease. I believe that a person should work on developing
          their professional skills and learning new things all the time.
        </p>
        <h2
          className={`${
            dark ? "text-gray" : "text-black"
          } font-bold text-3xl md:text-5xl mt-8 md:mt-16`}
        >
          Skills
        </h2>
        <div className="grid grid-rows-4 grid-flow-col gap-4 font-roboto mt-8">
          <p className="text-gray">HTML</p>
          <p className="text-gray">CSS</p>
          <p className="text-gray">Javascript ⭐</p>
          <p className="text-gray">Typescript ⭐</p>
          <p className="text-gray">PHP</p>
          <p className="text-gray">React ⭐</p>
          <p className="text-gray">Redux Toolkit ⭐</p>
          <p className="text-gray">Next</p>
          <p className="text-gray">Node.js</p>
          <p className="text-gray">Express</p>
          <p className="text-gray">Laravel</p>
        </div>
      </div>
      <div className="w-full md:flex-1 flex flex-col mt-8 md:mt-0">
        <h2
          className={`${
            dark ? "text-gray" : "text-black"
          } font-bold text-3xl md:text-5xl`}
        >
          Experiences
        </h2>
        <div className="flex flex-col border-2 border-y-0 border-l-0 border-r-gray mt-8 md:mt-16">
          <h5
            className={`${
              dark ? "text-blue-sky" : "text-black"
            } font-bold text-xl`}
          >
            Frontend Developer
          </h5>
          <p className="text-gray font-roboto">@ PT Infosys Solusi Terpadu</p>
          <p className="text-gray font-roboto">Jun 2022 - Current</p>
        </div>
        <div className="flex flex-col border-2 border-y-0 border-l-0 border-r-gray mt-16">
          <h5
            className={`${
              dark ? "text-blue-sky" : "text-black"
            } font-bold text-xl`}
          >
            Programmer Intern
          </h5>
          <p className="text-gray font-roboto">@ Jagoan Hosting Indonesia</p>
          <p className="text-gray font-roboto">Feb 2022 - Jun 2022</p>
        </div>
        <div className="flex flex-col border-2 border-y-0 border-l-0 border-r-gray mt-16">
          <h5
            className={`${
              dark ? "text-blue-sky" : "text-black"
            } font-bold text-xl`}
          >
            Freelance Web Developer
          </h5>
          <p className="text-gray font-roboto">@ Indonesia</p>
          <p className="text-gray font-roboto">Oct 2021 - Current</p>
        </div>
      </div>
    </div>
  );
};

export default About;
