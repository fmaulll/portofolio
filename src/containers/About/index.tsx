import React, { useState } from "react";
import Nice from "../../assets/images/nice.png";

const About = () => {
  const [input, setInput] = useState<string>("");
  console.log("mimi")
  const maul = [
    "Full Name >> Fikri Maulana Ibrahim",
    "Birth Date >> undefined",
    'Skills >> ["Javascript", "Typescript", "HTML", "CSS", "React", "Nest", "Node", "Next", "Laravel", "PHP", "Frontend Development", "Problem Solving"]',
    'Experience >> [{company:"Jagoan Hosting Indonesia", duration: "5 months", role: "Programmer Intern"}, {company:"PT Infosys Solusi Terpadu", duration: "current", role: "Frontend Developer"}]',
  ];
  return (
    <div className="min-h-screen w-full flex items-center flex-col">
      <div className="flex justify-center items-center p-4 bg-yellow rounded-full mt-24">
        <img src={Nice} alt="fmaulll" />
      </div>
      <div className="flex w-full mt-4">
        <div className="flex flex-col">
          <h1 className="text-purple-light">
            const <span className="text-blue-sky">about</span>{" "}
            <span className="text-gray">=</span>{" "}
            <span className="text-yellow">(</span>
            <span className="text-red">handsomeGuy</span>
            <span className="text-yellow">)</span>{" "}
            <span className="text-purple-light">{"=>"}</span>{" "}
            <span className="text-yellow">{"{"}</span>
          </h1>
          <h1 className="ml-5 text-yellow">
            console
            <span className="text-gray">.</span>
            <span className="text-blue-sky">log</span>
            <span className="text-purple-light">(</span>
            <span className="text-green">"Full Name {">>"} "</span>
            <span className="text-gray">,</span>{" "}
            <span className="text-red">handsomeGuy</span>
            <span className="text-gray">.</span>
            <span className="text-red">fullName</span>
            <span className="text-purple-light">)</span>
            <span className="text-gray">;</span>
          </h1>
          <h1 className="ml-5 text-yellow">
            console
            <span className="text-gray">.</span>
            <span className="text-blue-sky">log</span>
            <span className="text-purple-light">(</span>
            <span className="text-green">"Birth Date {">>"} "</span>
            <span className="text-gray">,</span>{" "}
            <span className="text-red">handsomeGuy</span>
            <span className="text-gray">.</span>
            <span className="text-red">createdAt</span>
            <span className="text-purple-light">)</span>
            <span className="text-gray">;</span>
          </h1>
          <h1 className="ml-5 text-yellow">
            console
            <span className="text-gray">.</span>
            <span className="text-blue-sky">log</span>
            <span className="text-purple-light">(</span>
            <span className="text-green">"Skills {">>"} "</span>
            <span className="text-gray">,</span>{" "}
            <span className="text-red">handsomeGuy</span>
            <span className="text-gray">.</span>
            <span className="text-red">skills</span>
            <span className="text-purple-light">)</span>
            <span className="text-gray">;</span>
          </h1>
          <h1 className="ml-5 text-yellow">
            console
            <span className="text-gray">.</span>
            <span className="text-blue-sky">log</span>
            <span className="text-purple-light">(</span>
            <span className="text-green">"Experience {">>"} "</span>
            <span className="text-gray">,</span>{" "}
            <span className="text-red">handsomeGuy</span>
            <span className="text-gray">.</span>
            <span className="text-red">experience</span>
            <span className="text-purple-light">)</span>
            <span className="text-gray">;</span>
          </h1>
          <h1 className="text-yellow">{"}"}</h1>
          <br />
          <input
            className="focus:outline-none bg-purple-light text-gray w-min"
            onChange={(e) => setInput(e.target.value)}
          />
          <h1 className="text-green">// call the function</h1>
          <h1 className="text-green">// and insert maul as the value</h1>
        </div>
      </div>
      <div className="mt-8 border border-gray w-full py-2 pb-10 mb-10">
        <div className="flex text-xs md:text-base px-4 md:px-8 mb-4">
          <h2
            className="font-sans text-gray"
            style={{ borderBottom: "2px solid #b9374d" }}
          >
            Console
          </h2>
          <h2 className="font-sans text-gray ml-8">What's New</h2>
          <h2 className="font-sans text-gray ml-8">Issues</h2>
        </div>
        {input === "about(maul)" && (
          <>
            {maul.map((item, index) => (
              <div
                className="text-xs md:text-base px-4 md:px-8 flex justify-between"
                style={{ borderBottom: "1px solid #97a7a6" }}
              >
                <h3 className="text-gray">{item}</h3>
                <h3 className="text-gray ml-4">index.tsx:{index + 2}</h3>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
