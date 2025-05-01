import React from "react";

const HomeSection = () => {
  return (
    <section className="flex flex-col items-center justify-between bg-gradient-to-br from-white to-blue-50 px-8 pb-[86px] md:flex-row">
      {/* Left Section */}
      <div className="max-w-xl">
        <h1 className="mb-[26px] text-[80px] leading-tight font-bold text-gray-900">
          Your AI-
          <br />
          Powered <br />
          Sales Coach
        </h1>
        <div className="flex items-center justify-center rounded-xl">
          <div className="mr-[68px]">
            <img src="../public/img/image (3).png" alt="Mini Bot" />
          </div>
          <p className="pt-[29px] pb-[37px] text-gray-600">
            Get real-time coaching, script <br /> suggestions, and deal-closing{" "}
            <br />
            strategies powered by advanced AI <br /> technology.
          </p>
        </div>

        <div className="mt-23 flex gap-[55px]">
          <div className="flex items-center gap-[35px] rounded-lg bg-white px-4 py-2 shadow-sm">
            <img
              src="../public/img/image (3).png"
              alt="Representation"
              className="h-6 w-6"
            />
            <div>
              <p className="text-[40px] font-semibold text-gray-900">2000+</p>
              <p className="text-[20px] text-gray-500">Your protection</p>
            </div>
          </div>
          <div className="flex items-center gap-[35px] rounded-lg bg-white px-4 py-2 shadow-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-800">
              <img
                src="../public/img/image (3).png"
                alt="Representation"
                className="h-6 w-6"
              />
            </div>
            <div>
              <p className="text-[40px] font-semibold text-gray-900">7001+</p>
              <p className="text-[20px] text-gray-500">Provide tailored</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section for the task*/}
      <div className="relative">
        <img
          src="../public/img/image.png"
          alt="AI Bot"
          className="rounded-2xl"
        />

        {/* Floating card */}
        <div className="absolute bottom-[-50px] left-[-150px] rounded-xl bg-white px-6 py-4 shadow-lg">
          <div className="flex justify-between text-[50px] font-semibold text-blue-800">
            <p>721+</p>
            <p>1000+</p>
          </div>
          <p className="mt-2 text-[28px] font-medium text-gray-800">
            Growth is our priority.
          </p>
          <p className="mt-1 text-[17px] text-gray-500">
            As a full-service business agency, we <br />
            specialize in helping companies of all sizes <br />
            optimize their operations
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
