import React, { useState } from "react";
import { ReactComponent as DownloadIcon } from "../../assets/icons/Download.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/ChevronDown.svg";
import { ReactComponent as ChevronUp } from "../../assets/icons/ChevronUp.svg";
import { useAppSelector } from "../../hooks";

const About = () => {
  const dark = useAppSelector((state) => state.ui.darkMode);
  const [openJob1, setOpenJob1] = useState(false);
  const [openJob2, setOpenJob2] = useState(false);
  const [openJob3, setOpenJob3] = useState(false);

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
            href="https://drive.google.com/file/d/1cUmVdsdewI938x7Gejkt0m_tsTXDr4nN/view?usp=sharing"
            target="_blank"
          >
            <DownloadIcon
              className={`${dark ? "fill-purple" : "fill-light"}`}
            />
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
          <p className="text-gray">Vue</p>
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
        <div className="flex flex-col border-2 border-y-0 border-l-0 border-r-gray mt-8 md:mt-16 pr-4">
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => setOpenJob3(!openJob3)}
          >
            <h5
              className={`${
                dark ? "text-blue-sky" : "text-black"
              } font-bold text-xl`}
            >
              Frontend Developer
            </h5>
            {openJob3 ? <ChevronUp /> : <ChevronDown />}
          </div>
          <p className="text-gray font-roboto">@ PT Infosys Solusi Terpadu</p>
          <p className="text-gray font-roboto">Jun 2022 - Current</p>
          {openJob3 && (
            <div className="w-full mt-4">
              <p className="text-gray font-roboto">
                • Followed SDLC best practices within Agile environment to
                produce rapid iterations for clients.
              </p>
              <p className="text-gray font-roboto">
                • Coded using JavaScript with React framework to develop
                features for the website.
              </p>
              <p className="text-gray font-roboto">
                • Worked cooperatively with the backend developer, for making
                better API integration.
              </p>
              <p className="text-gray font-roboto">
                • Contributed to projects within Scrum project management
                environments.
              </p>
              <p className="text-gray font-roboto">
                • Produced websites compatible with multiple browsers.
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col border-2 border-y-0 border-l-0 border-r-gray mt-16 pr-4">
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => setOpenJob2(!openJob2)}
          >
            <h5
              className={`${
                dark ? "text-blue-sky" : "text-black"
              } font-bold text-xl`}
            >
              Programmer Intern
            </h5>
            {openJob2 ? <ChevronUp /> : <ChevronDown />}
          </div>
          <p className="text-gray font-roboto">@ Jagoan Hosting Indonesia</p>
          <p className="text-gray font-roboto">Feb 2022 - Jun 2022</p>
          {openJob2 && (
            <div className="w-full mt-4">
              <p className="text-gray font-roboto">
                • Created databases, data entry systems, web forms and other
                applications for diverse uses.
              </p>
              <p className="text-gray font-roboto">
                • Wrote server-side and client-side code for projects using PHP,
                HTML, CSS and JavaScript.
              </p>
              <p className="text-gray font-roboto">
                • Resolved problems, improved operations and provided
                exceptional service.
              </p>
              <p className="text-gray font-roboto">
                • Modified and tested existing MySQL database schemas.
              </p>
              <p className="text-gray font-roboto">
                • Making WhatsApp API for Jagoan Hosting Indonesia, by
                integrating 2 API’s together and using some validation to make
                things works, using Laravel.
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col border-2 border-y-0 border-l-0 border-r-gray mt-16 pr-4">
          <div
            className="w-full flex justify-between items-center cursor-pointer"
            onClick={() => setOpenJob1(!openJob1)}
          >
            <h5
              className={`${
                dark ? "text-blue-sky" : "text-black"
              } font-bold text-xl`}
            >
              Freelance Web Developer
            </h5>
            {openJob1 ? <ChevronUp /> : <ChevronDown />}
          </div>
          <p className="text-gray font-roboto">@ Indonesia</p>
          <p className="text-gray font-roboto">Oct 2021 - Current</p>
          {openJob1 && (
            <div className="w-full mt-4">
              <p className="text-gray font-roboto">
                • Coded using HTML, CSS and JavaScript to develop features for
                both mobile and desktop platforms.
              </p>
              <p className="text-gray font-roboto">
                • Integrated web applications for mobile platforms into front
                end environment.
              </p>
              <p className="text-gray font-roboto">
                • Generated web hosting presence to accommodate specified needs
                and maintain files on account.
              </p>
              <p className="text-gray font-roboto">
                • Translated UX and business requirements into elegant code
                solutions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
