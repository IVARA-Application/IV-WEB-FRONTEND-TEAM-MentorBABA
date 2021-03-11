import React from "react";
import img from "../../img/babaStart.png";
import { Link } from "react-router-dom";

function BabaStart() {
  return (
    <div className="container flex flex-row ml-20">
      <div className="babaStart-left flex flex-col items-center flex-1">
        <h1 className="text-8xl mt-48">BabaStart</h1>
        <p className="text-5xl my-8 text-gray-600">
          KNOW ABOUT RECENT <br /> STARTUPS IN INDIA.
        </p>
        <p className="text-2xl mx-28 text-black">
          Come explore and learn about new, innovative and ruling Startups in
          our daily blogs.
        </p>
        <Link to="/BabaStart">
          <button className="babaBtn text-base text-white py-2 px-14 rounded-3xl mt-16">
            Explore Now!
          </button>
        </Link>
      </div>
      <div className="babaStart-right flex-1 flex justify-center mt-48 mb-48">
        <img className="ml-40 w-full" src={img} alt="" />
      </div>
    </div>
  );
}

export default BabaStart;
