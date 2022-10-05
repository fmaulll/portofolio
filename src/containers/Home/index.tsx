import { TypeAnimation } from "react-type-animation";
import nice from "../../assets/images/nice.png";
import notNice from "../../assets/images/not-nice.png";
import JavascriptLogo from "../../assets/images/javascript-logo.png";
import ReactLogo from "../../assets/images/react-logo.png";
import NodeLogo from "../../assets/images/node-logo.png";
import HTMLCSSLogo from "../../assets/images/html-css-logo.png";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/Linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/Github.svg";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { uiActions } from "../../store/ui-slice";

const Home = () => {
  const dark = useAppSelector((state) => state.ui.darkMode);
  const dispatch = useAppDispatch()

  return (
    <div className="w-full">
      <div className="flex min-h-[calc(100vh-64px)] w-full justify-center items-center flex-col relative">
        <div className="flex items-center justify-center">
          <p className={`px-4 py-2 font-semibold rounded-t-full rounded-bl-full ${dark ? "bg-white" : "bg-white drop-shadow"}`}>
            <TypeAnimation
              sequence={[
                "Hi,",
                1000,
                "Hi, my name is maul",
                2000,
                "",
                1000,
                "I'm a Front",
                1000,
                "I'm a Frontend Developer",
                2000,
                "I'm bad at design",
                1000,
                "",
                1000,
              ]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </p>
          <img className="w-40" src={dark ? nice : notNice} alt="fmaulll" />
        </div>
        <div className="justify-center items-center flex flex-col">
          <h1 className={`${dark?"text-gray":"text-black"} font-bold text-3xl md:text-7xl`}>
            Frontend Developer
          </h1>
          <h1 className={`${dark?"text-gray":"text-black"} text-2xl mt-2 font-bold md:text-7xl md:mt-4`}>
            <span className="font-light">Based in</span> Indonesia
          </h1>
        </div>
        <h1 className="text-gray mt-4 text-center">
          I develop things, I love making things, I love cats
        </h1>
        <button onClick={()=>dispatch(uiActions.openModal())} className={`focus:outline-none hover:bg-[#fcc238] bg-yellow rounded-xl px-4 py-2 font-semibold mt-4 text-light drop-shadow transition-all`}>
          Let's Talk
        </button>
        <div className="w-full hidden md:flex items-center md:flex-row mt-16">
          <h2 className="text-gray ">Check Out My</h2>
          <a
            className="md:ml-16 flex"
            href="https://www.linkedin.com/in/fmaulll/"
            target="_blank"
          >
            <LinkedinIcon className="fill-blue-sky" />
            <p className={`${dark ? "text-yellow" : "text-gray"} ml-2`}>Fikri Maulana Ibrahim</p>
          </a>
          <a
            className="md:ml-16 flex"
            href="https://github.com/fmaulll"
            target="_blank"
          >
            <GithubIcon className="fill-blue-sky" />
            <p className={`${dark ? "text-yellow" : "text-gray"} ml-2`}>fmaulll</p>
          </a>
        </div>
        <div className="flex flex-col items-center absolute bottom-0">
          <h2 className="font-roboto text-gray text-sm md:text-base">
            Service
          </h2>
          <div className="border-2 border-l-gray border-y-0 border-r-0 h-6" />
        </div>
      </div>

      <div className="min-h-screen w-full border-2 border-x-0 border-t-gray border-b-0 flex items-center flex-col">
        <h1 className={`${dark?"text-gray":"text-black"} font-bold text-3xl md:text-5xl mt-16 md:mt-32`}>
          Website Development
        </h1>
        <div className="flex flex-col md:flex-row md:justify-between w-full mt-16 md:mt-32">
          <div className="flex-1 flex-col border-2 border-y-0 border-l-0 border-r-gray pr-4">
            <h2 className="text-red font-semibold text-2xl md:text-3xl">
              <span className="text-blue-sky mr-4 font-roboto">01</span>Frontend
              Development
            </h2>
            <p className="text-gray md:mr-4 font-roboto ">
              Everything you see on a website, like buttons, links, animations,
              and more, were created by a front end web developer. It is the
              front end developer's job to take the vision and design concept
              from the client and implement it through code.
            </p>
          </div>
          <div className="flex-1 flex-col mt-16 md:ml-16 md:mt-0 border-2 border-y-0 border-l-0 border-r-gray pr-4">
            <h2 className="text-purple-light font-semibold text-xl md:text-3xl">
              <span className="text-blue-sky mr-4 font-roboto">02</span>Backend
              Development
            </h2>
            <p className="text-gray md:mr-4 font-roboto">
              Back-end development means working on server-side software, which
              focuses on everything you can’t see on a website. Back-end
              developers ensure the website performs correctly, focusing on
              databases, back-end logic, application programming interface
              (APIs), architecture, and servers.
            </p>
          </div>
        </div>
        <div className="flex mt-16">
          <img className="h-16 mr-8" src={HTMLCSSLogo} />
          <img className="h-16 mr-8" src={JavascriptLogo} />
          <img className="h-16" src={ReactLogo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
