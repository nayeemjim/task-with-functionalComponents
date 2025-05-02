import { VolumeIcon } from "lucide-react";
import React from "react";
import { FaThumbsUp, FaThumbsDown, FaRegCopy } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import btn1 from "../../public/img/Vector (1).png";
import btn2 from "../../public/img/Vector.png";

const Form = () => {
  const tags = [
    "How do I handle objections?",
    "Give me a cold email template",
    "Closing techniques",
    "Negotiation tips",
  ];
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-600 pb-18">
      {" "}
      <div className="font-manrope mx-auto p-4 text-white lg:max-w-[1440px]">
        <h2 className="font-ques mb-1 text-2xl font-light">Live Ai Coach</h2>
        <h1 className="font-ques mb-10 text-3xl font-bold md:text-4xl lg:text-6xl">
          Take a Suggestion Coaching
        </h1>

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
          <div>
            {/*lg:grid-cols-2 grid  Chat Section for the task  flex flex-col md:flex-row*/}
            <div className="flex min-h-[500px] flex-1 flex-col justify-between rounded-lg bg-[#EFEFEF] p-4 text-gray-800 shadow-md">
              <div>
                <p className="mb-2 text-[18px] font-bold">AI Sales Coach</p>
                <div className="mb-4 rounded-md bg-gray-100 p-3 text-[18px]">
                  Hello! I'm your AI sales coach. How can I help you improve
                  your sales
                  <br />
                  performance today?
                </div>
              </div>

              <div>
                {" "}
                {/* creating the task*/}
                <div className="mb-4 flex flex-wrap gap-1">
                  {tags.map((tag, idx) => (
                    <button
                      key={idx}
                      className="rounded-full bg-white px-3 py-1 text-sm hover:bg-gray-200"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                {/* Input form for this task*/}
                <div className="flex items-center overflow-hidden rounded-lg border bg-white">
                  <input
                    type="text"
                    placeholder="Ask anything you need"
                    className="flex-1 px-3 py-2 text-sm outline-none"
                  />
                  <button className="flex items-center gap-1 bg-blue-900 px-4 py-2 text-white">
                    Send <FiSend size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel for the another side */}
          <div className="flex w-full flex-col gap-6 lg:grid lg:grid-cols-[1fr_9fr]">
            {/* Vertical Icons for the task */}
            <ul className="flex items-center justify-center gap-4 rounded-full bg-[#F2F3F3] lg:h-[300px] lg:flex-col">
              <li className="p-2 text-gray-800">
                <IoReload />
              </li>
              <li className="p-2 text-gray-800">
                <FaThumbsUp />
              </li>
              <li className="p-2 text-gray-800">
                <FaThumbsDown />
              </li>
              <li className="p-2 text-gray-800">
                <FaRegCopy />
              </li>

              <li className="p-2 text-gray-800">
                <VolumeIcon />
              </li>
            </ul>
            <div>
              {/* Analysis part for the task */}
              <div className="mb-6 w-full rounded-lg bg-[#EFEFEF] p-4 text-gray-800 shadow-md">
                <h3 className="pb-5 font-semibold">Real-time Analysis</h3>
                <div className="rounded-xl bg-white p-5">
                  <p className="text-sm text-gray-600">Confidence Level</p>
                  <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                    <p className="h-2 w-[60%] rounded-full bg-green-500"></p>
                    {/* <span>60%</span> */}
                  </div>
                </div>
                <div className="mt-5 rounded-xl bg-white p-5 text-sm">
                  <p className="font-medium">Confidence Level</p>
                  <p className="pt-3 pb-7.5 text-gray-500">
                    85% improvement in objection handling
                  </p>
                </div>
              </div>

              {/* Quick Actions part for the task */}
              <div className="rounded-lg bg-[#EFEFEF] p-4 text-gray-800 shadow-md">
                <h3 className="pb-5 text-3xl font-semibold">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4 pb-[30px]">
                  <button className="flex flex-col rounded-md bg-white p-3 text-sm hover:bg-gray-200">
                    <img src={btn1} alt="Script" className="mb-1 h-6 w-6" />
                    Generate Script
                  </button>
                  <button className="flex flex-col rounded-md bg-white p-3 text-sm hover:bg-gray-200">
                    <img src={btn2} alt="Pitch" className="mb-1 h-6 w-6" />
                    Practice Pitch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
