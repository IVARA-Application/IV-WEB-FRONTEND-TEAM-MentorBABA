import React from "react";
import img from "../../img/Babacube.png";
import { Link } from "react-router-dom";

function BabaStart() {
  return (
    <div className="flex flex-col lg:flex-row lg:py-12">
      <div className="babaCube-left flex flex-1 flex-col justify-center items-center">
        <img className="w-3/4 mt-12 lg:my-20" src={img} alt="" />
      </div>
      <div className="babaCube-right flex flex-col items-center justify-center flex-1">
        <h1 className="text-4xl md:text-6xl xl:text-8xl">BabaCube</h1>
        <p className="text-xl md:text-2xl xl:text-5xl text-left my-4 lg:my-8 text-gray-600">
          APPLY TO TOP INCUBATORS <br /> AND ACCELERATORS NOW!
        </p>
        <p className="text-md md:text-xl text-black text-center my-2 lg:my-4 lg:mb-12">
          Learn about Incubators and Accelerators in our <br /> Weekly Blogs and
          get connected with them!
        </p>
        <Link to="/BabaCube">
          <button className="babaBtn text-base text-white py-2 px-14 rounded-3xl">
            Explore Now!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BabaStart;
