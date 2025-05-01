import React from "react";

const HomeSection = () => {
  return (
    <section className="mx-auto flex flex-col items-center justify-between bg-gradient-to-br from-white to-blue-50 px-8 py-16 md:flex-row lg:w-[1440px]">
      {/* Left Section */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
          Your AI-
          <br />
          Powered <br />
          Sales Coach
        </h1>
        <div className="flex items-center justify-center rounded-xl shadow-md">
          <div>
            <img src="../public/img/image (3).png" alt="Mini Bot" />
          </div>
          <p className="text-gray-600">
            Get real-time coaching, script suggestions, and deal-closing
            strategies powered by advanced AI technology.
          </p>
        </div>

        <div className="mt-4 flex gap-6">
          <div className="flex items-center gap-3 rounded-lg border bg-white px-4 py-2 shadow-sm">
            <img
              src="../public/img/image (3).png"
              alt="Representation"
              className="h-6 w-6"
            />
            <div>
              <p className="font-semibold text-gray-900">2000+</p>
              <p className="text-xs text-gray-500">Your protection</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg border bg-white px-4 py-2 shadow-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-800">
              <img
                src="../public/img/image (3).png"
                alt="Representation"
                className="h-6 w-6"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900">7001+</p>
              <p className="text-xs text-gray-500">Provide tailored</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative mt-10 md:mt-0">
        <img
          src="../public/img/image.png"
          alt="AI Bot"
          className="w-80 rounded-2xl md:w-[340px]"
        />

        {/* Floating card */}
        <div className="absolute right-[-40px] bottom-[-50px] w-72 rounded-xl bg-white px-6 py-4 shadow-lg">
          <div className="flex justify-between text-lg font-semibold text-blue-800">
            <p>721+</p>
            <p>1000+</p>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-800">
            Growth is our priority.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            As a full-service business agency, we specialize in helping
            companies of all sizes optimize their operations
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
