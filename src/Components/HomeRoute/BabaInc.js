import React from "react";
import img from "../../img/babaInc.png";
import { Link } from "react-router-dom";

function BabaInc() {
  return (
    <div className="container flex flex-row ml-20">
      <div className="babaCube-left flex-1 flex justify-center mt-48 mb-48">
        <img className="ml-40 w-full" src={img} alt="" />
      </div>
      <div className="babaCube-right flex flex-col items-center flex-1">
        <h1 className="text-8xl mt-48">BabaINC</h1>
        <p className="text-4xl my-8 text-gray-600 text-center">
          Get your company registered & <br /> complete all formalities!
        </p>
        <p className="text-xl mx-20 text-black text-center">
          We provide our buddingStart-ups with all the registrations and other
          formalities to help our start-ups in growing bigger.
        </p>
        <Link to="/BabaInc">
          <button className="babaBtn text-base text-white py-2 px-14 rounded-3xl mt-16">
            Visit Now!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BabaInc;
