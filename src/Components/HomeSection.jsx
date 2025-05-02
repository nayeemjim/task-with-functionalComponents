import React from "react";
import miniBot from "../../public/img/image (3).png";
import backUpTable from "../../public/img/backup_table.png";
import threeDOt from "../../public/img/atr.png";
import aiBot from "../../public/img/image.png";

const HomeSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#6797FF] to-[#FF6FB9]">
      <div className="font-manrope mx-auto flex flex-col items-center justify-between px-4 pb-[86px] lg:max-w-[1440px] lg:flex-row">
        {/* Left Section  bg-gradient-to-br from-white to-blue-50*/}
        <div className="">
          <h1 className="mb-[26px] text-3xl leading-tight font-[500] text-[#111111] lg:text-[80px]">
            Your AI-
            <br />
            Powered <br />
            Sales Coach
          </h1>
          <div className="flex items-center justify-center gap-3 rounded-xl">
            <div className="lg:mr-[68px]">
              <img
                src={miniBot}
                alt="Mini Bot"
                className="w-full object-cover"
              />
            </div>
            <p className="text-[#05131DB2] lg:pt-[29px] lg:pb-[37px]">
              Get real-time coaching, script <br /> suggestions, and
              deal-closing <br />
              strategies powered by advanced AI <br /> technology.
            </p>
          </div>

          <div className="mt-23 flex gap-4 lg:gap-[55px]">
            <div className="flex items-center gap-2 rounded-lg px-2 py-2 lg:gap-[35px]">
              <img
                src={backUpTable}
                alt="Representation"
                className="w-full rounded-2xl bg-white object-cover p-2 shadow-md"
              />
              <div>
                <p className="font-semibold text-[#05131D] lg:text-[40px]">
                  2000+
                </p>
                <p className="text-[#05131DB2] lg:text-[20px]">
                  Your protection
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg px-2 py-2 lg:gap-[35px]">
              <div className="flex items-center justify-center rounded-full text-sm font-bold text-gray-800">
                <img
                  src={threeDOt}
                  alt="Representation"
                  className="w-full rounded-2xl bg-white object-cover p-4 shadow-md"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 lg:text-[40px]">
                  7001+
                </p>
                <p className="text-[#05131DB2] lg:text-[20px]">
                  Provide tailored
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section for the task*/}
        <div className="relative">
          <img
            src={aiBot}
            alt="AI Bot"
            className="w-full rounded-2xl object-cover"
          />

          {/* Floating card for the task which position is absolute */}
          <div className="absolute bottom-[-50px] rounded-xl bg-white px-6 py-4 shadow-lg lg:left-[-150px]">
            <div className="flex justify-between font-semibold text-[#00245F] lg:text-[50px]">
              <p>721+</p>
              <p>1000+</p>
            </div>
            <p className="mt-2 font-medium text-[#05131DB2] lg:text-[28px]">
              Growth is our priority.
            </p>
            <p className="mt-1 text-gray-500 lg:text-[17px]">
              As a full-service business agency, we <br />
              specialize in helping companies of all sizes <br />
              optimize their operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
