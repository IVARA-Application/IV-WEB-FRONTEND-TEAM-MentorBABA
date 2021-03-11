import React from "react";
import img from "../img/post.png";

function EntrepreneurNews() {
  return (
    <div className="min-h-full">
      <div>
        <h1 className="text-5xl text-center py-8">
          <span>Entrepreneur </span>News
        </h1>
      </div>
      <div className="w-6/12 m-auto">
        <div className="grid grid-cols-4 gap-8">
          <div className="flex col-start-1 col-end-5 w-full">
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
      <div className="w-6/12 m-auto mt-8">
        <div className=" blog grid grid-cols-4 gap-8">
          <div className="flex justify-center items-center text-2xl rounded-2xl col-start-1 col-end-3 w-full">
            News of the Week
          </div>
          <div className="flex justify-center items-center text-2xl rounded-2xl col-start-3 col-end-5 w-full">
            News of the Week
          </div>
        </div>
      </div>

      <div className="flex gap-8 items-center justify-center my-8">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default EntrepreneurNews;
