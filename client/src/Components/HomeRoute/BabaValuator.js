import React from "react";
import img from "../../img/babaValuator.png";
import { Link } from "react-router-dom";

function BabaStart() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:py-12">
      <div className="babaValuator-left flex flex-col items-center flex-1">
        <h1 className="text-4xl md:text-6xl xl:text-8xl lg:mt-48">
          BabaValuator
        </h1>
        <p className="text-lg md:text-2xl xl:text-5xl my-4 lg:my-8 text-gray-600">
          KNOW THE WORTH OF YOUR <br /> STARTUP!
        </p>
        <p className="text-md mx-10 md:mx-0 lg:text-xl text-black text-center my-2 md:my-4 md:mb-12">
          An Automatic Startup Valuation Calculator! Know your Worth!
        </p>
        <Link to="/BabaValuator">
          <button className="babaBtn text-base text-white py-2 px-14 rounded-3xl">
            Explore Now!
          </button>
        </Link>
      </div>
      <div className="babaValuator-right flex-1 flex justify-center items-center my-4 lg:my-32">
        <img className="w-3/4" src={img} alt="" />
      </div>
    </div>
  );
}

export default BabaStart;
