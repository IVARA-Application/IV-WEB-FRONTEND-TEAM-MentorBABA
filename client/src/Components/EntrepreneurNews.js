import React from "react";
import { Link } from "react-router-dom";
import oyo from "../img/OyoInfo.jpeg";
import cred from "../img/Cred.jpeg";
import img from "../img/post.png";

function EntrepreneurNews() {
  return (
    <div className="min-h-full">
      <div>
        <h1 className="text-5xl text-center py-8">
          <span>Entrepreneur </span>News
        </h1>
      </div>
      <div className="w-3/4 m-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex col-start-1 col-end-3 w-full">
            <input
              type="text"
              placeholder="Search"
              className="rounded-l-xl px-8 pr-8 text-xl w-full bg-gray-100 shadow-md"
            />
            <button className="text-white bg-gray-700 rounded-r-xl px-4 py-2 shadow-xl">
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
           lg:grid-cols-4 gap-2"
        >
          <Link to="/OyoInfo">
            <img
              className="lg:col-start-1 lg:col-end-2 w-full rounded-lg"
              src={oyo}
              alt=""
            />
          </Link>
          <Link to="/Cred">
            <img
              className="lg:col-start-2 lg:col-end-3 w-full rounded-lg"
              src={cred}
              alt=""
            />
          </Link>
          <img
            className="lg:col-start-3 lg:col-end-4 w-full rounded-lg"
            src={img}
            alt=""
          />
          <img
            className="lg:col-start-4 lg:col-end-5 w-full rounded-lg"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default EntrepreneurNews;
