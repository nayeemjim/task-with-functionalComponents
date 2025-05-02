import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-[#6797FF] to-[#FF6FB9]">
      <div className="mx-auto flex w-full items-center justify-between py-[45px] shadow-sm lg:max-w-[1440px]">
        {/* Logo for the given task*/}
        <div className="flex items-center">
          <img src="../public/img/salesRank.png" alt="SalesRank.AI Logo" />
        </div>

        {/* Nav Links for the given task*/}
        <nav className="font-[Plus Jakarta Sans] hidden text-sm text-gray-700 lg:ml-[89px] lg:flex lg:grow">
          <ul className="flex">
            <li>
              {" "}
              <a href="#" className="hover:text-blue-700 lg:mr-[33px]">
                Home
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="hover:text-blue-700 lg:mr-[33px]">
                About
              </a>
            </li>

            <li>
              {" "}
              <a href="#" className="hover:text-blue-700 lg:mr-[33px]">
                Pricing
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="hover:text-blue-700 lg:mr-[33px]">
                Consulting
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="hover:text-blue-700 lg:mr-[33px]">
                AI Coach
              </a>
            </li>
          </ul>
        </nav>

        {/* Button for the given task */}
        <button className="rounded-full border border-black px-4 py-2 text-[16px] transition hover:bg-black hover:text-white">
          Get started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
