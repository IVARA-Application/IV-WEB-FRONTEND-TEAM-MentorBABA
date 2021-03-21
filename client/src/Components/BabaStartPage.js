import React from "react";
import img from "../img/pageimg.png";
import zomato from "../img/Zomato.png";
import swiggy from "../img/Swiggy.png";
import dunzo from "../img/Dunzo.png";
import search from "../img/Search.png";

function BabaStartPage() {
  return (
    <div className="bsp-container lg:min-h-screen">
      <div>
        <h1 className="text-3xl md:text-5xl text-center py-8">
          <span>Baba</span>Start
        </h1>
      </div>
      <div className="w-6/12 m-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-8">
          <div className="flex md:col-start-1 md:col-end-3 xl:col-start-1 xl:col-end-4 w-full">
            <input
              type="text"
              placeholder="Search"
              className="rounded-l-xl lg:px-8 pr-8 w-full shadow-md"
            />
            <button className="text-white bg-gray-700 rounded-r-xl px-4 py-2 shadow-none">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <select className="text-white text-xl bg-gray-700 rounded-xl px-4 py-2 md:col-start-4 md:col-end-5 shadow-none">
            <option defaultValue>Domain</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center mt-8 w-6/12 m-auto">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 w-full">
          <div className="md:flex col-start-1 col-end-2 xl:col-start-1 xl:col-end-4">
            <img className="w-full rounded" src={img} alt="" />
            <div className="startup rounded md:rounded-r-2xl text-xl md:text-2xl flex justify-center items-center">
              <h1 className="p-2">StartUp of the Week</h1>
            </div>
          </div>
          <div className="bg-white options rounded-2xl">
            <p className="text-center md:text-xl my-2 2xl:mb-8">Options</p>
            <form action="" className="flex flex-col p-4">
              <input
                type="text"
                placeholder="State"
                className="my-2 py-4 px-2 bg-gray-100 rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="my-2 py-4 px-2 bg-gray-100 rounded"
              />
            </form>
          </div>
        </div>
      </div>
      <h1 className="text-center text-xl md:text-2xl py-8 md:font-semibold text-white">
        Famous Startups of India
      </h1>
      <div className="w-6/12 m-auto">
        <div
          className="grid grid-cols-2
           lg:grid-cols-4"
        >
          <img
            className="lg:col-start-1 lg:col-end-2 w-full"
            src={zomato}
            alt=""
          />
          <img
            className="lg:col-start-2 lg:col-end-3 w-full"
            src={swiggy}
            alt=""
          />
          <img
            className="lg:col-start-3 lg:col-end-4 w-full"
            src={dunzo}
            alt=""
          />
          <img
            className="lg:col-start-4 lg:col-end-5 w-full"
            src={search}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default BabaStartPage;
