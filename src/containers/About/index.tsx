import React, { useState } from "react";
import Nice from "../../assets/images/nice.png";
import ObjectComponent from "../../components/ObjectComponent";

const About = () => {
  const [input, setInput] = useState<string>("");
  const [isFullName, setIsFullName] = useState<boolean>(false);
  const [isNickName, setIsNickName] = useState<boolean>(false);
  const [isDesc, setIsDesc] = useState<boolean>(false);
  const [showSkill1, setShowSkill1] = useState<boolean>(false);
  const [showSkill2, setShowSkill2] = useState<boolean>(false);
  const [showSkill3, setShowSkill3] = useState<boolean>(false);
  const [showSkill4, setShowSkill4] = useState<boolean>(false);
  const [showSkill5, setShowSkill5] = useState<boolean>(false);
  const [showSkill6, setShowSkill6] = useState<boolean>(false);
  const [showSkill7, setShowSkill7] = useState<boolean>(false);
  const [showSkill8, setShowSkill8] = useState<boolean>(false);
  const [showSkill9, setShowSkill9] = useState<boolean>(false);
  const [showSkill10, setShowSkill10] = useState<boolean>(false);
  console.log("mimi");
  const maul = [
    "Full Name >> Fikri Maulana Ibrahim",
    "Nick Name >> Maul",
    "Birth Date >> null",
    "Description >> I'm a Frontend Developer who has 1+ year of experience",
    'Experience >> [{company:"PT Infosys Solusi Terpadu", duration: "Jun 2022 - current", role: "Frontend Developer (React JS)"}, {company:"Jagoan Hosting Indonesia", duration: "Feb 2022 - Jun 2022", role: "Programmer Intern"}]',
    'Skills >> ["Javascript", "Typescript", "PHP", "Node.js", "React", "@reduxjs/toolkit", "Next", "Laravel", "Express", "NestJS", "Frontend Development", "API Integration"]',
    'Languages >> [{language:"Bahasa Indonesia", skillValue: 10}, {language:"English", skillValue: 7.3}, {language:"Japanese", skillValue: -10}, {language:"Sundanese", skillValue: 5.6}]',
  ];
  return (
    <div className="min-h-screen w-full flex items-center flex-col">
      <div className="flex mt-32 w-full">
        <div className="hidden md:flex md:flex-1 mr-4">
          <ObjectComponent />
        </div>
        <div className="md:flex-1">
          <h1 className="font-semibold text-gray text-4xl border-2 border-y-0 border-r-0 border-l-gray pl-4">
            Skills &<br />
            Experience
          </h1>
          <div className="flex md:hidden mt-4 border-2 border-y-0 border-l-0 border-r-gray">
            <div className="border-2 border-t-gray border-b-0 border-x-0 w-8 mt-2" />
            <p className="ml-4 text-gray mr-4">
              My name is Fikri Maulana Ibrahim, and you can call me Maul. I'm a
              Frontend Developer who has 1+ year of experience
            </p>
          </div>
          <div className="hidden md:flex mt-4 border-2 border-y-0 border-l-0 border-r-gray">
            <div className="border-2 border-t-gray border-b-0 border-x-0 w-8 mt-2" />
            <p className="ml-4 text-gray mr-4">
              My name is{" "}
              {!isFullName ? (
                <span
                  onClick={() => setIsFullName(!isFullName)}
                  className="w-min cursor-pointer"
                >
                  <span className="text-purple-light font-roboto">{"{"}</span>
                  <span className="text-red font-roboto">
                    maul
                    <span className="text-gray font-roboto">.</span>
                    fullName
                  </span>
                  <span className="text-purple-light font-roboto">{"}"}</span>
                </span>
              ) : (
                <span
                  onClick={() => setIsFullName(!isFullName)}
                  className="text-blue-sky cursor-pointer"
                >
                  Fikri Maulana Ibrahim
                </span>
              )}{" "}
              and you can call me{" "}
              {!isNickName ? (
                <span
                  onClick={() => setIsNickName(!isNickName)}
                  className="w-min cursor-pointer"
                >
                  <span className="text-purple-light font-roboto">{"{"}</span>
                  <span className="text-red font-roboto">
                    maul
                    <span className="text-gray font-roboto">.</span>
                    nickName
                  </span>
                  <span className="text-purple-light font-roboto">{"}"}</span>
                </span>
              ) : (
                <span
                  onClick={() => setIsNickName(!isNickName)}
                  className="text-blue-sky cursor-pointer"
                >
                  Maul
                </span>
              )}
              ,{" "}
              {!isDesc ? (
                <span
                  onClick={() => setIsDesc(!isDesc)}
                  className="w-min cursor-pointer"
                >
                  <span className="text-purple-light font-roboto">{"{"}</span>
                  <span className="text-red font-roboto">
                    maul
                    <span className="text-gray font-roboto">.</span>
                    description
                  </span>
                  <span className="text-purple-light font-roboto">{"}"}</span>
                </span>
              ) : (
                <span
                  onClick={() => setIsDesc(!isDesc)}
                  className="text-blue-sky cursor-pointer"
                >
                  I'm a Frontend Developer who has 1+ year of experience
                </span>
              )}
            </p>
          </div>
          <h2 className="mt-16 font-semibold text-gray text-3xl border-2 border-y-0 border-r-0 border-l-gray pl-4">
            Skills <span className="font-normal">(Highlighted)</span>
          </h2>
          <div className="flex md:hidden mt-4 border-2 border-y-0 border-l-0 border-r-gray">
            <div className="border-2 border-t-gray border-b-0 border-x-0 w-8 mt-2" />
            <div className="ml-4 grid grid-rows-5 grid-flow-col gap-4">
              <p className="text-gray">Javascript</p>
              <p className="text-gray">Typescript</p>
              <p className="text-gray">Node.js</p>
              <p className="text-gray">React</p>
              <p className="text-gray">@reduxjs/toolkit</p>
              <p className="text-gray">Next</p>
              <p className="text-gray">Express</p>
              <p className="text-gray">NestJS</p>
              <p className="text-gray">Frontend Development</p>
              <p className="text-gray">API Intergration</p>
            </div>
          </div>
          <div className="hidden md:flex mt-4 border-2 border-y-0 border-l-0 border-r-gray">
            <div className="border-2 border-t-gray border-b-0 border-x-0 w-8 mt-2" />
            <div className="ml-4 w-full mr-4">
              <div className="flex justify-between">
                {!showSkill1 ? (
                  <p
                    onClick={() => setShowSkill1(!showSkill1)}
                    className="text-gray cursor-pointer"
                  >
                    <span className="text-purple-light font-roboto">{"{"}</span>
                    <span className="text-red font-roboto">
                      maul
                      <span className="text-gray font-roboto">.</span>
                      skills
                      <span className="text-purple-light">[</span>
                      <span className="text-blue-sky">0</span>
                      <span className="text-purple-light">]</span>
                      <span className="text-purple-light font-roboto">
                        {"}"}
                      </span>
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-blue-sky cursor-pointer"
                    onClick={() => setShowSkill1(!showSkill1)}
                  >
                    Javascript
                  </p>
                )}
                {!showSkill2 ? (
                  <p
                    onClick={() => setShowSkill2(!showSkill2)}
                    className="text-gray cursor-pointer"
                  >
                    <span className="text-purple-light font-roboto">{"{"}</span>
                    <span className="text-red font-roboto">
                      maul
                      <span className="text-gray font-roboto">.</span>
                      skills
                      <span className="text-purple-light">[</span>
                      <span className="text-blue-sky">1</span>
                      <span className="text-purple-light">]</span>
                      <span className="text-purple-light font-roboto">
                        {"}"}
                      </span>
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-blue-sky cursor-pointer"
                    onClick={() => setShowSkill2(!showSkill2)}
                  >
                    Typescript
                  </p>
                )}
                {!showSkill3 ? (
                  <p
                    onClick={() => setShowSkill3(!showSkill3)}
                    className="text-gray cursor-pointer"
                  >
                    <span className="text-purple-light font-roboto">{"{"}</span>
                    <span className="text-red font-roboto">
                      maul
                      <span className="text-gray font-roboto">.</span>
                      skills
                      <span className="text-purple-light">[</span>
                      <span className="text-blue-sky">3</span>
                      <span className="text-purple-light">]</span>
                      <span className="text-purple-light font-roboto">
                        {"}"}
                      </span>
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-blue-sky cursor-pointer"
                    onClick={() => setShowSkill3(!showSkill3)}
                  >
                    Node.js
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                {!showSkill4 ? (
                  <p
                    onClick={() => setShowSkill4(!showSkill4)}
                    className="text-gray cursor-pointer"
                  >
                    <span className="text-purple-light font-roboto">{"{"}</span>
                    <span className="text-red font-roboto">
                      maul
                      <span className="text-gray font-roboto">.</span>
                      skills
                      <span className="text-purple-light">[</span>
                      <span className="text-blue-sky">4</span>
                      <span className="text-purple-light">]</span>
                      <span className="text-purple-light font-roboto">
                        {"}"}
                      </span>
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-blue-sky cursor-pointer"
                    onClick={() => setShowSkill4(!showSkill4)}
                  >
                    React
                  </p>
                )}
                {!showSkill5 ? (
                  <p
                    onClick={() => setShowSkill5(!showSkill5)}
                    className="text-gray cursor-pointer"
                  >
                    <span className="text-purple-light font-roboto">{"{"}</span>
                    <span className="text-red font-roboto">
                      maul
                      <span className="text-gray font-roboto">.</span>
                      skills
                      <span className="text-purple-light">[</span>
                      <span className="text-blue-sky">5</span>
                      <span className="text-purple-light">]</span>
                      <span className="text-purple-light font-roboto">
                        {"}"}
                      </span>
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-blue-sky cursor-pointer"
                    onClick={() => setShowSkill5(!showSkill5)}
                  >
                    @reduxjs/toolkit
                  </p>
                )}
                {!showSkill6 ? (
                  <p
                    onClick={() => setShowSkill6(!showSkill6)}
                    className="text-gray cursor-pointer"
                  >
                    <span className="text-purple-light font-roboto">{"{"}</span>
                    <span className="text-red font-roboto">
                      maul
                      <span className="text-gray font-roboto">.</span>
                      skills
                      <span className="text-purple-light">[</span>
                      <span className="text-blue-sky">6</span>
                      <span className="text-purple-light">]</span>
                      <span className="text-purple-light font-roboto">
                        {"}"}
                      </span>
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-blue-sky cursor-pointer"
                    onClick={() => setShowSkill6(!showSkill6)}
                  >
                    Next
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                {!showSkill7 ? (
                  <p
                    onClick={() => setShowSkill7(!showSkill7)}
                    className="text-gray cursor-pointer"
                  >
                    <span className="text-purple-light font-roboto">{"{"}</span>
                    <span className="text-red font-roboto">
                      maul
                      <span className="text-gray font-roboto">.</span>
                      skills
                      <span className="text-purple-light">[</span>
                      <span className="text-blue-sky">8</span>
                      <span className="text-purple-light">]</span>
                      <span className="text-purple-light font-roboto">
                        {"}"}
                      </span>
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-blue-sky cursor-pointer"
                    onClick={() => setShowSkill7(!showSkill7)}
                  >
                    Express
                  </p>
                )}
                {!showSkill8 ? (
                  <p
                    onClick={() => setShowSkill8(!showSkill8)}
                    className="text-gray cursor-pointer"
                  >
                    <span className="text-purple-light font-roboto">{"{"}</span>
                    <span className="text-red font-roboto">
                      maul
                      <span className="text-gray font-roboto">.</span>
                      skills
                      <span className="text-purple-light">[</span>
                      <span className="text-blue-sky">9</span>
                      <span className="text-purple-light">]</span>
                      <span className="text-purple-light font-roboto">
                        {"}"}
                      </span>
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-blue-sky cursor-pointer"
                    onClick={() => setShowSkill8(!showSkill8)}
                  >
                    NestJS
                  </p>
                )}
                {!showSkill9 ? (
                  <p
                    onClick={() => setShowSkill9(!showSkill9)}
                    className="text-gray cursor-pointer"
                  >
                    <span className="text-purple-light font-roboto">{"{"}</span>
                    <span className="text-red font-roboto">
                      maul
                      <span className="text-gray font-roboto">.</span>
                      skills
                      <span className="text-purple-light">[</span>
                      <span className="text-blue-sky">10</span>
                      <span className="text-purple-light">]</span>
                      <span className="text-purple-light font-roboto">
                        {"}"}
                      </span>
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-blue-sky cursor-pointer"
                    onClick={() => setShowSkill9(!showSkill9)}
                  >
                    Frontend Development
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                {!showSkill10 ? (
                  <p
                    onClick={() => setShowSkill10(!showSkill10)}
                    className="text-gray cursor-pointer"
                  >
                    <span className="text-purple-light font-roboto">{"{"}</span>
                    <span className="text-red font-roboto">
                      maul
                      <span className="text-gray font-roboto">.</span>
                      skills
                      <span className="text-purple-light">[</span>
                      <span className="text-blue-sky">11</span>
                      <span className="text-purple-light">]</span>
                      <span className="text-purple-light font-roboto">
                        {"}"}
                      </span>
                    </span>
                  </p>
                ) : (
                  <p
                    className="text-blue-sky cursor-pointer"
                    onClick={() => setShowSkill10(!showSkill10)}
                  >
                    API Integration
                  </p>
                )}
              </div>
            </div>
          </div>
          <h2 className="mt-16 font-semibold text-gray text-3xl border-2 border-y-0 border-r-0 border-l-gray pl-4">
            Experience
          </h2>
          <div className="flex mt-4 border-2 border-y-0 border-l-0 border-r-gray">
            <div className="border-2 border-t-gray border-b-0 border-x-0 w-8 mt-2" />
            <div className="ml-4 w-full mr-4">
              <p className="text-gray">
                <span className="text-purple-light font-roboto">{"{"}</span>
                <span className="text-red font-roboto">
                  maul
                  <span className="text-gray font-roboto">.</span>
                  experience
                  <span className="text-purple-light">[</span>
                  <span className="text-blue-sky">0</span>
                  <span className="text-purple-light">]</span>
                  <span className="text-gray font-roboto">.</span>
                  company
                  <span className="text-purple-light font-roboto">
                    {"}"}
                  </span>{" "}
                </span>
              </p>
              <p className="text-green font-roboto">
                // PT Infosys Solusi Terpadu
              </p>
              <p className="text-gray">
                <span className="text-purple-light font-roboto">{"{"}</span>
                <span className="text-red font-roboto">
                  maul
                  <span className="text-gray font-roboto">.</span>
                  experience
                  <span className="text-purple-light">[</span>
                  <span className="text-blue-sky">0</span>
                  <span className="text-purple-light">]</span>
                  <span className="text-gray font-roboto">.</span>
                  duration
                  <span className="text-purple-light font-roboto">
                    {"}"}
                  </span>{" "}
                </span>
              </p>
              <p className="text-green font-roboto">// Jun 2022 - current</p>
              <p className="text-gray">
                <span className="text-purple-light font-roboto">{"{"}</span>
                <span className="text-red font-roboto">
                  maul
                  <span className="text-gray font-roboto">.</span>
                  experience
                  <span className="text-purple-light">[</span>
                  <span className="text-blue-sky">0</span>
                  <span className="text-purple-light">]</span>
                  <span className="text-gray font-roboto">.</span>
                  role
                  <span className="text-purple-light font-roboto">
                    {"}"}
                  </span>{" "}
                </span>
              </p>
              <p className="text-green font-roboto">
                // Frontend Developer (React JS)
              </p>
            </div>
          </div>
          <div className="flex mt-4 border-2 border-y-0 border-l-0 border-r-gray">
            <div className="border-2 border-t-gray border-b-0 border-x-0 w-8 mt-2" />
            <div className="ml-4 w-full mr-4">
              <p className="text-gray">
                <span className="text-purple-light font-roboto">{"{"}</span>
                <span className="text-red font-roboto">
                  maul
                  <span className="text-gray font-roboto">.</span>
                  experience
                  <span className="text-purple-light">[</span>
                  <span className="text-blue-sky">1</span>
                  <span className="text-purple-light">]</span>
                  <span className="text-gray font-roboto">.</span>
                  company
                  <span className="text-purple-light font-roboto">
                    {"}"}
                  </span>{" "}
                </span>
              </p>
              <p className="text-green font-roboto">
                // Jagoan Hosting Indonesia
              </p>
              <p className="text-gray">
                <span className="text-purple-light font-roboto">{"{"}</span>
                <span className="text-red font-roboto">
                  maul
                  <span className="text-gray font-roboto">.</span>
                  experience
                  <span className="text-purple-light">[</span>
                  <span className="text-blue-sky">1</span>
                  <span className="text-purple-light">]</span>
                  <span className="text-gray font-roboto">.</span>
                  duration
                  <span className="text-purple-light font-roboto">
                    {"}"}
                  </span>{" "}
                </span>
              </p>
              <p className="text-green font-roboto">// Feb 2022 - Jun 2022</p>
              <p className="text-gray">
                <span className="text-purple-light font-roboto">{"{"}</span>
                <span className="text-red font-roboto">
                  maul
                  <span className="text-gray font-roboto">.</span>
                  experience
                  <span className="text-purple-light">[</span>
                  <span className="text-blue-sky">0</span>
                  <span className="text-purple-light">]</span>
                  <span className="text-gray font-roboto">.</span>
                  role
                  <span className="text-purple-light font-roboto">
                    {"}"}
                  </span>{" "}
                </span>
              </p>
              <p className="text-green font-roboto">// Programmer Intern</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-16 flex-col font-roboto">
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
          <span className="text-green">"Nick Name {">>"} "</span>
          <span className="text-gray">,</span>{" "}
          <span className="text-red">handsomeGuy</span>
          <span className="text-gray">.</span>
          <span className="text-red">nickName</span>
          <span className="text-purple-light">)</span>
          <span className="text-gray">;</span>
        </h1>
        <h1 className="ml-5 text-yellow">
          console
          <span className="text-gray">.</span>
          <span className="text-blue-sky">log</span>
          <span className="text-purple-light">(</span>
          <span className="text-green">"Description {">>"} "</span>
          <span className="text-gray">,</span>{" "}
          <span className="text-red">handsomeGuy</span>
          <span className="text-gray">.</span>
          <span className="text-red">description</span>
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
          <span className="text-green">"Experience {">>"} "</span>
          <span className="text-gray">,</span>{" "}
          <span className="text-red">handsomeGuy</span>
          <span className="text-gray">.</span>
          <span className="text-red">experience</span>
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
          <span className="text-green">"Languages {">>"} "</span>
          <span className="text-gray">,</span>{" "}
          <span className="text-red">handsomeGuy</span>
          <span className="text-gray">.</span>
          <span className="text-red">languages</span>
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
      <div className="mt-8 border border-gray w-full py-2 pb-10 mb-10 font-roboto">
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
