import React from "react";
import img from "../../img/babaInc.png";
import { Link } from "react-router-dom";

function BabaInc() {
  return (
    <div className="flex flex-col lg:flex-row lg:py-12 mb-12 lg:mx-0">
      <div className="babaCube-left flex flex-1 flex-col justify-center items-center">
        <img className="w-3/4 mt-12 lg:my-20" src={img} alt="" />
      </div>
      <div className="babaCube-right flex flex-col items-center justify-center flex-1">
        <h1 className="text-4xl md:text-6xl xl:text-8xl">BabaINC</h1>
        <p className="text-xl md:text-2xl xl:text-5xl text-center my-4 lg:my-8 text-gray-600">
          Get your company registered & <br /> complete all formalities!
        </p>
        <p className="text-md lg:text-xl text-black text-center my-2 lg:my-4 lg:mb-12">
          We provide our budding Start-ups with all the registrations <br /> and
          other formalities to help our start-ups in growing bigger.
        </p>
        <Link to="/BabaInc">
          <button className="babaBtn text-base text-white py-2 px-14 rounded-3xl">
            Visit Now!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BabaInc;
