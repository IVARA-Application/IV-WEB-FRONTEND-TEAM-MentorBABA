import React from "react";
import img from "../img/Babacube.png";

function BabaStart() {
  return (
    <div className="container flex flex-row ml-20">
      <div className="babaCube-left flex-1 flex justify-center mt-48 mb-48">
        <img className="ml-40 w-full" src={img} alt="" />
      </div>
      <div className="babaCube-right flex flex-col items-center flex-1">
        <h1 className="text-8xl mt-48">BabaCube</h1>
        <p className="text-5xl my-8 text-gray-600">
          APPLY TO TOP INCUBATORS <br /> AND ACCELERATORS NOW!
        </p>
        <p className="text-2xl mx-28 text-black">
          Learn about Incubators and Accelerators in our Weekly Blogs and get
          connected with them!
        </p>
        <button className="babaBtn text-base text-white py-2 px-14 rounded-3xl mt-16">
          Explore Now!
        </button>
      </div>
    </div>
  );
}

export default BabaStart;
