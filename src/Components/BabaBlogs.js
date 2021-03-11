import React from "react";
import img from "../img/blogs.png";

function BabaBlogs() {
  return (
    <div className="min-h-full">
      <div>
        <h1 className="text-5xl text-center py-8">
          <span>Baba</span>Blogs
        </h1>
      </div>
      <div className="w-6/12 m-auto">
        <div className="grid grid-cols-4 gap-8">
          <div className="flex col-start-1 col-end-4 w-full">
            <input
              type="text"
              placeholder="Search"
              className="rounded-l-xl px-8 pr-8 text-xl w-full bg-gray-100 shadow-md"
            />
            <button className="text-white bg-gray-700 rounded-r-xl px-4 py-2 shadow-none">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <button className="text-white bg-gray-700 text-xl rounded-xl px-12 py-2 col-start-4 col-end-5 shadow-none">
            Categories
          </button>
        </div>
      </div>
      <div className="w-6/12 m-auto mt-8">
        <div className=" blog grid grid-cols-4 gap-8">
          <div className="flex justify-center items-center text-2xl rounded-2xl col-start-1 col-end-3 w-full">
            Blog of the Week
          </div>
          <div className="flex justify-center items-center text-2xl rounded-2xl col-start-3 col-end-5 w-full">
            Most Viewed Blog
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

export default BabaBlogs;
