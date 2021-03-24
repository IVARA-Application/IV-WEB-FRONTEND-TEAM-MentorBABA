import React from "react";
import img from "../img/post.png";

function StartupNews() {
  return (
    <div className="min-h-full">
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
      <div className="w-3/4 m-auto py-4 flex flex-col">
        <div className="grid md:grid-rows-none md:grid-cols-4 gap-2">
          <img className="w-full object-contain" src={img} alt="" />
          <img className="w-full object-contain" src={img} alt="" />
          <img className="w-full object-contain" src={img} alt="" />
          <img className="w-full object-contain" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default StartupNews;
