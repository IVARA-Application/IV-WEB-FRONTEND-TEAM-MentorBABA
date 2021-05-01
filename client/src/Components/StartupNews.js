import React from "react";
import { Link } from "react-router-dom";

import Oyo from "../img/Oyo.jpeg";
import Swiggy from "../img/Swiggy.jpeg";
import Ola from "../img/Ola.jpeg";
import PhonePay from "../img/PhonePay.jpeg";
import NavBar from "../Components/HomeRoute/NavBar";

function StartupNews() {
  return (
    <div className="min-h-full">
      <NavBar />
      <div>
        <h1 className="text-5xl text-center py-8">
          <span>Startup </span>News
        </h1>
      </div>
      <div className="w-3/4 m-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex col-start-1 col-end-3 w-full ">
            <input
              type="text"
              placeholder="Search"
              className="rounded-l-xl px-8 pr-8 text-xl w-full bg-gray-100 shadow-md "
            />
            <button className="text-white bg-gray-700 rounded-r-xl px-4 py-2 shadow-none">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/4 m-auto mt-8">
        <div className="blog grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-8 w-full">
          <div className="flex justify-center items-center text-2xl rounded-2xl row-span-1 lg:col-start-1 lg:col-end-2 w-full">
            News of the Week
          </div>
          <div className="flex justify-center items-center text-2xl rounded-2xl row-span-1 lg:col-start-2 lg:col-end-3 w-full">
            News of the Week
          </div>
        </div>
      </div>
      <div className="w-3/4 m-auto py-4">
        <div
          className="grid grid-cols-2
           lg:grid-cols-4 gap-4"
        >
          <Link to="/Oyo">
            <img
              className="lg:col-start-1 lg:col-end-2 w-full shadow-lg hover:shadow-2xl"
              src={Oyo}
              alt=""
            />
          </Link>
          <Link to="/Swiggy">
            <img
              className="lg:col-start-2 lg:col-end-3 w-full shadow-lg hover:shadow-2xl"
              src={Swiggy}
              alt=""
            />
          </Link>
          <Link to="/Ola">
            <img
              className="lg:col-start-3 lg:col-end-4 w-full shadow-lg hover:shadow-2xl"
              src={Ola}
              alt=""
            />
          </Link>
          <Link to="/PhonePay">
            <img
              className="lg:col-start-4 lg:col-end-5 w-full shadow-lg hover:shadow-2xl"
              src={PhonePay}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StartupNews;
