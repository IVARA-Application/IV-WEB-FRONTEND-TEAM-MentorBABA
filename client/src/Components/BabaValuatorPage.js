import React from "react";
import NavBar from "../Components/HomeRoute/NavBar";

function BabaValuatorPage() {
  return (
    <div className="baba-valuator-page flex flex-col justify-center items-center">
      <span className="bv-circle hidden w-full lg:block"></span>
      <span className="bv-triangle hidden lg:block"></span>
      <div className="baba-valuator-page">
        <h1 className=" text-2xl lg:text-4xl py-2 lg:py-4 lg:pt-10 text-center">
          BabaValuator
        </h1>
        <p className="text-2xl lg:text-4xl xl:text-5xl py-2 lg:py-4 pb-4 lg:pb-8">
          Valuate your startup today!
        </p>
      </div>
      <div className="bg-gray-100 w-4/5 md:w-4/6 px-2 md:px-12 h-auto py-10 space-y-2 rounded">
        <h4 className="text-xl lg:text-2xl">
          Ever wondered, what your Start-up is worth of?
        </h4>
        <p className="md:text-xl ">
          We provide a simple and efficient way to calculate a valuation of your
          company
        </p>
        <p className="md:text-xl">
          Stack the numbers like a venture capitalist, private equity firm or a
          sophisticated investor to discover what your startup is worth today.
        </p>
        <p className="md:text-xl">
          Our valuation methods are calculated from common institutional funding
          formulas that are employed by some of the largest VC firms and angels
          worldwide.
        </p>
      </div>
      <button
        className="my-8 py-2 text-white px-12 md:px-24 rounded-2xl lg:text-xl"
        onClick={() => {
          window.location.href = "https://forms.gle/pY1NB8fxpkJ786iL7";
        }}
      >
        Start Now! (It's Free)
      </button>
    </div>
  );
}

export default BabaValuatorPage;
