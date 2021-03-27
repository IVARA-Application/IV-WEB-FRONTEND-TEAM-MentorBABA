import React from "react";
import img from "../img/blogs.png";

function BabaBlogs() {
  return (
    <div className="min-h-screen">
      <div>
        <h1 className="text-5xl text-center py-8">
          <span>Baba</span>Blogs
        </h1>
      </div>
      <div className="w-3/4 m-auto">
        <div className="grid lg:grid-cols-4 space-x-2 md:gap-8">
          <div className="flex col-start-1 col-end-4 w-full">
            <input
              type="text"
              placeholder="Search"
              className="rounded-l-xl lg:px-8 lg:pr-8 text-xl w-full bg-gray-100 shadow-md"
            />
            <button className="text-white bg-gray-700 rounded-r-xl px-1 md:px-2 lg:px-4 py-2 shadow-none">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <button className="text-white bg-gray-700 lg:text-xl rounded-xl px-2 py-2 col-start-4 col-end-5 shadow-none w-full">
            Categories
          </button>
        </div>
      </div>
      <div className="w-3/4 m-auto mt-8">
        <div className="blog grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-8 w-full">
          <div className="flex justify-center items-center text-2xl rounded-2xl row-span-1 lg:col-start-1 lg:col-end-2 w-full">
            Blog of the Week
          </div>
          <div className="flex justify-center items-center text-2xl rounded-2xl row-span-1 lg:col-start-2 lg:col-end-3 w-full">
            Most Viewed Blog
          </div>
        </div>
      </div>
      <div className="w-3/4 m-auto py-4">
        <div
          className="grid grid-cols-2
           lg:grid-cols-4"
        >
          <img
            className="lg:col-start-1 lg:col-end-2 w-full"
            src={img}
            alt=""
          />
          <img
            className="lg:col-start-2 lg:col-end-3 w-full"
            src={img}
            alt=""
          />
          <img
            className="lg:col-start-3 lg:col-end-4 w-full"
            src={img}
            alt=""
          />
          <img
            className="lg:col-start-4 lg:col-end-5 w-full"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default BabaBlogs;
