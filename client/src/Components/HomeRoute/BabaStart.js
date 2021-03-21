import React from "react";
import img from "../../img/babaStart.png";
import { Link } from "react-router-dom";

function BabaStart() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:py-12">
      <div className="babaStart-left flex flex-col items-center flex-1">
        <h1 className="text-4xl md:text-6xl xl:text-8xl lg:mt-48">BabaStart</h1>
        <p className=" text-lg md:text-2xl xl:text-5xl text-left my-4 lg:my-8 text-gray-600">
          KNOW ABOUT RECENT <br /> STARTUPS IN INDIA.
        </p>
        <p className="text-md lg:text-xl text-black text-center my-2 md:my-4 md:mb-12">
          Come explore and learn about new, <br /> innovative and ruling
          Startups in our daily blogs.
        </p>
        <Link to="/BabaStart">
          <button className="babaBtn text-base text-white py-2 px-14 rounded-3xl">
            Explore Now!
          </button>
        </Link>
      </div>
      <div className="babaStart-right flex-1 flex justify-center items-center my-4 lg:my-32">
        <img className="w-9/12" src={img} alt="" />
      </div>
    </div>
  );
}

export default BabaStart;
