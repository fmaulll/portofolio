import { TypeAnimation } from "react-type-animation";
import nice from "../../assets/images/nice.png"
import notNice from "../../assets/images/not-nice.png"

const Home = () => {
  const makeId = (length: number) => {
    var result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const titleType = (words: string) => {
    const typeArr = []
    const wordsArr = words.split("")
    for(let i = 0; i < words.length;i++){
      setTimeout(()=>{
        return typeArr.push(wordsArr[i])
      },200)
    }
  }

  const history = [
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "untracked",
      story: "maul come into the world",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Mon Aug 12 00:00:01 2019",
      story: "tryin to get a cs degree",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Thu Jun 10 00:00:01 2021",
      story: "wasted the time by playin around",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Fri Jun 11 00:00:01 2021",
      story: "started learning code",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Wed Oct 20 00:00:01 2021",
      story: "struggling",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Tue Feb 08 09:06:01 2022",
      story: "applying intern",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Wed Feb 16 09:15:01 2022",
      story: "got accepted by Jagoan Hosting as a programmer intern",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Mon Feb 21 09:20:01 2022",
      story: "strugglin(again) with laravel",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Thu May 12 09:23:01 2022",
      story: "applying a fulltime job just for fun",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Thu Jun 09 10:32:01 2022",
      story: "got a accepted as a frontend devs",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Thu Jun 09 11:22:01 2022",
      story: "resign from Jagoan Hosting, thx btw",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Thu Jun 16 08:22:01 2022",
      story: "first day working as a frontend at PT Infosys Solusi Terpadu",
    },
    {
      author: "fmaulll <maul2821@gmail.com>",
      date: "Fri Sep 30 11:12:00 2022",
      story: "it's fun ngl",
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="flex w-full h-screen">
        <div className="flex-1 w-full flex flex-col justify-center">
          <div className="w-full">
            <h1 className="text-red">
              <span className="text-gray">{"<"}</span>
              h1
              <span className="text-gray">{">"}</span>
            </h1>
            <div className="text-4xl" style={{ borderLeft: "2px solid gray" }}>
              <h1 className="text-gray ml-4">
                <TypeAnimation
                  sequence={["Hey stupi", 1000, "Hi Visitor!", 1000]}
                  speed={50} // Custom Speed from 1-99 - Default Speed: 40
                  wrapper="span" // Animation will be rendered as a <span>
                  repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
                <br />
                <h1 className="text-red text-base">
                  <span className="text-gray">{"<"}</span>
                  br
                  <span className="text-gray">{"/>"}</span>
                </h1>
                My name is Maul
                <br />
                <h1 className="text-red text-base">
                  <span className="text-gray">{"<"}</span>
                  br
                  <span className="text-gray">{"/>"}</span>
                </h1>
                I'm a web developer
              </h1>
            </div>
            <h1 className="text-red">
              <span className="text-gray">{"</"}</span>
              h1
              <span className="text-gray">{">"}</span>
            </h1>
          </div>
          <div className="flex">
            <h1 className="text-red">
              <span className="text-gray">{"<"}</span>p
              <span className="text-gray">{">"}</span>
            </h1>
            <h1 className="text-gray">
              Frontend Developer && Javascript Enthusiast
            </h1>
            <h1 className="text-red">
              <span className="text-gray">{"</"}</span>p
              <span className="text-gray">{">"}</span>
            </h1>
          </div>
          <a className="w-min flex cursor-pointer">
            <h1 className="text-red">
              <span className="text-gray">{"<"}</span>a
              <span className="text-gray">{">"}</span>
            </h1>
            <div className="text-red">
              <h1 className="text-gray w-max">Download my resume 📩</h1>
            </div>
            <h1 className="text-red">
              <span className="text-gray">{"</"}</span>a
              <span className="text-gray">{">"}</span>
            </h1>
          </a>
        </div>
        <div className="flex-1 w-full flex items-end justify-center flex-col">
          <div className="hidden items-center justify-center relative lg:flex">
            <div className=" animate-spin-slow rounded-full p-52 border-8 border-dashed border-yellow " />
            <img className="absolute" src={notNice} alt="fmaulll" />
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center pb-10">
        <div className="border border-gray w-full px-4 md:px-8 py-2">
          <div className="flex text-xs md:text-base">
            <h2 className="font-sans text-gray">PROBLEMS</h2>
            <h2 className="font-sans text-gray ml-8">OUTPUT</h2>
            <h2 className="font-sans text-gray ml-8">DEBUG CONSOLE</h2>
            <h2
              className="font-sans text-gray ml-8"
              style={{ borderBottom: "2px solid #b9374d" }}
            >
              TERMINAL
            </h2>
          </div>
          <div className="mt-4 text-xs md:text-base">
            <h3 className="text-gray">Microsoft Windows</h3>
            <h3 className="text-gray">
              (c) Microsoft Corporation. All rights reserved.
            </h3>
            <div className="mt-4">
              <h3 className="text-gray">
                C:\Users\Visitor{">"}{" "}
                <TypeAnimation
                  sequence={[
                    "git log",
                    1000,
                    "git log --reverse",
                    1000,
                    "git log",
                    2000,
                    "",
                    1000,
                  ]}
                  speed={50} // Custom Speed from 1-99 - Default Speed: 40
                  wrapper="span" // Animation will be rendered as a <span>
                  repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
              </h3>
              {history.map((item, index) => (
                <div key={index} className={index === 0 ? "" : "mt-4"}>
                  <h3 className="text-yellow">commit {makeId(40)}</h3>
                  <h3 className="text-gray">Author: {item.author}</h3>
                  <h3 className="text-gray">Date: {item.date}</h3>
                  <h3 className="text-gray mt-4 ml-10">{item.story}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
