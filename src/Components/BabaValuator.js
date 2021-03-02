import React from "react";
import img from "../img/babaValuator.png";

function BabaStart() {
  return (
    <div className="container flex flex-row ml-20">
      <div className="babaValuator-left flex flex-col items-center flex-1">
        <h1 className="text-8xl mt-48">BabaValuator</h1>
        <p className="text-5xl my-8 text-gray-600 text-center">
          KNOW THE WORTH OF YOUR <br /> STARTUP!
        </p>
        <p className="text-2xl mx-28 text-black text-center">
          An Automatic Startup Valuation Calculator! Know your Worth!
        </p>
        <button className="babaBtn text-base text-white py-2 px-14 rounded-3xl mt-16">
          Explore Now!
        </button>
      </div>
      <div className="babaValuator-right flex-1 flex justify-center mt-48 mb-48">
        <img className="ml-40 w-full" src={img} alt="" />
      </div>
    </div>
  );
}

export default BabaStart;
