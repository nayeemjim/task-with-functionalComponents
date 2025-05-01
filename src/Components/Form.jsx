import React from "react";
import { FaThumbsUp, FaThumbsDown, FaRegCopy } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Form = () => {
  return (
    <section className="mx-auto min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 p-6 text-white md:p-12 lg:w-[1440px]">
      <h2 className="mb-1 text-xl font-light">Live Ai f Coach</h2>
      <h1 className="mb-10 text-3xl font-bold md:text-4xl">
        Take a Suggestion Coaching
      </h1>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Chat Section */}
        <div className="flex min-h-[400px] flex-1 flex-col justify-between rounded-lg bg-white p-4 text-gray-800 shadow-md">
          <div>
            <p className="mb-2 font-bold">AI Sales Coach</p>
            <div className="mb-4 rounded-md bg-gray-100 p-3">
              Hello! I'm your AI sales coach. How can I help you improve your
              sales performance today?
            </div>
          </div>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {[
              "How do I handle objections?",
              "Give me a cold email template",
              "Closing techniques",
              "Negotiation tips",
            ].map((tag, idx) => (
              <button
                key={idx}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center overflow-hidden rounded-lg border">
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

        {/* Side Panel */}
        <div className="flex w-full flex-col gap-6 md:w-[300px]">
          {/* Vertical Icons */}
          <div className="flex items-center gap-4 md:flex-col md:items-start">
            <div className="rounded-full bg-white p-2 text-gray-800 shadow-md">
              <FaThumbsUp />
            </div>
            <div className="rounded-full bg-white p-2 text-gray-800 shadow-md">
              <FaThumbsDown />
            </div>
            <div className="rounded-full bg-white p-2 text-gray-800 shadow-md">
              <FaRegCopy />
            </div>
          </div>

          {/* Analysis */}
          <div className="space-y-4 rounded-lg bg-white p-4 text-gray-800 shadow-md">
            <h3 className="font-semibold">Real-time Analysis</h3>
            <div>
              <p className="text-sm text-gray-600">Confidence Level</p>
              <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 w-[60%] rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="text-sm">
              <p className="font-medium">Confidence Level</p>
              <p className="text-gray-500">
                85% improvement in objection handling
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4 rounded-lg bg-white p-4 text-gray-800 shadow-md">
            <h3 className="font-semibold">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center rounded-md bg-gray-100 p-3 text-sm hover:bg-gray-200">
                <img
                  src="/icons/script.svg"
                  alt="Script"
                  className="mb-1 h-6 w-6"
                />
                Generate Script
              </button>
              <button className="flex flex-col items-center rounded-md bg-gray-100 p-3 text-sm hover:bg-gray-200">
                <img
                  src="/icons/pitch.svg"
                  alt="Pitch"
                  className="mb-1 h-6 w-6"
                />
                Practice Pitch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
