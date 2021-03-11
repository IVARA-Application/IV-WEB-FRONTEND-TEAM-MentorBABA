import React from "react";
import img from "../img/pageimg.png";
import icreate from "../img/Icreate.png";
import angelprime from "../img/angelprime.png";
import ui from "../img/Uincept.png";
import hatch from "../img/Hatch.png";

function BabaCubePage() {
  return (
    <div>
      <div className="bsp-container">
        <div>
          <h1 className="text-5xl text-center py-8">
            <span>Baba</span>Cube
          </h1>
        </div>
        <div className="w-6/12 m-auto">
          <div className="grid grid-cols-4 gap-8">
            <div className="bc-search flex col-start-1 col-end-4 w-full">
              <input
                type="text"
                placeholder="Search"
                className="rounded-l-xl px-8 pr-8 w-full shadow-md"
              />
              <button className="text-white bg-gray-700 rounded-r-xl px-4 py-2 shadow-none">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <button className="text-white text-xl bg-gray-700 rounded-xl px-12 py-2 col-start-4 col-end-5 shadow-none">
              Type
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8 w-6/12 m-auto">
          <div className="grid grid-cols-4 gap-8">
            <div className="flex col-start-1 col-end-4">
              <img src={img} alt="" />
              <div className="startup rounded-r-2xl text-2xl flex justify-center items-center">
                <h1>Get Incubated Now with MentorBaba</h1>
              </div>
            </div>
            <div className="bg-white options rounded-2xl">
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
          Top Incubators of India
        </h1>
        <div className="flex gap-8 items-center justify-center">
          <img src={icreate} alt="" />
          <img src={angelprime} alt="" />
          <img src={ui} alt="" />
          <img src={hatch} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BabaCubePage;
