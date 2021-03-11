import React from "react";
import img from "../img/pageimg.png";
import zomato from "../img/Zomato.png";
import swiggy from "../img/Swiggy.png";
import dunzo from "../img/Dunzo.png";
import search from "../img/Search.png";

function BabaStartPage() {
  return (
    <div className="bsp-container">
      <div>
        <h1 className="text-5xl text-center py-8">
          <span>Baba</span>Start
        </h1>
      </div>
      <div className="w-6/12 m-auto">
        <div className="grid grid-cols-4 gap-8">
          <div className="flex col-start-1 col-end-4 w-full">
            <input
              type="text"
              placeholder="Search"
              className="rounded-l-xl px-8 pr-8 w-full"
            />
            <button className="text-white bg-gray-700 rounded-r-xl px-4 py-2 shadow-none">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <select className="text-white text-xl bg-gray-700 rounded-xl px-4 py-2 col-start-4 col-end-5 shadow-none">
            <option defaultvalue>Domain</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center mt-8 w-6/12 m-auto">
        <div className="grid grid-cols-4 gap-8">
          <div className="flex col-start-1 col-end-4">
            <img src={img} alt="" />
            <div className="startup rounded-r-2xl text-2xl flex justify-center items-center">
              <h1>StartUp of the Week</h1>
            </div>
          </div>
          <div className="bg-white options rounded-2xl col-start-4 col-end-5">
            <p className="text-center text-xl mt-4">Options</p>
            <form action="" className="flex flex-col px-8 py-8">
              <input
                type="text"
                placeholder="State"
                className="my-2 py-4 px-2 bg-gray-100"
              />
              <input
                type="text"
                placeholder="City"
                className="my-2 py-4 px-2 bg-gray-100"
              />
            </form>
          </div>
        </div>
      </div>

      <h1 className="text-center text-2xl py-8 font-semibold text-white">
        Famous Startups of India
      </h1>
      <div className="flex gap-8 items-center justify-center">
        <img src={zomato} alt="" />
        <img src={swiggy} alt="" />
        <img src={dunzo} alt="" />
        <img src={search} alt="" />
      </div>
    </div>
  );
}

export default BabaStartPage;
