import React from "react";
import img from "../img/pageimg.png";
import icreate from "../img/Icreate.png";
import angelprime from "../img/angelprime.png";
import ui from "../img/Uincept.png";
import hatch from "../img/Hatch.png";

function BabaCubePage() {
  return (
    <div>
      <div className="bsp-container lg:min-h-screen">
        <div>
          <h1 className="text-3xl md:text-5xl text-center py-8">
            <span>Baba</span>Cube
          </h1>
        </div>
        <div className="w-6/12 m-auto">
          <div className="grid xl:grid-cols-4 gap-2 xl:gap-8">
            <div className="flex xl:col-start-1 xl:col-end-4 w-full">
              <input
                type="text"
                placeholder="Search"
                className="rounded-l-xl lg:px-8 pr-8 w-full shadow-md"
              />
              <button className="text-white bg-gray-700 rounded-r-xl px-4 py-2 shadow-none">
                <i class="fas fa-search"></i>
              </button>
            </div>
            <button className="text-white md:text-xl text-center bg-gray-700 rounded-xl md:px-12 py-2 md:col-start-4 md:col-end-5 shadow-none">
              Type
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8 w-6/12 m-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <div className="md:flex col-start-1 col-end-2 xl:col-start-1 xl:col-end-4">
              <img className="w-full rounded" src={img} alt="" />
              <div className="startup rounded md:rounded-r-2xl text-xl md:text-2xl flex justify-center items-center">
                <h1>Get Incubated Now with MentorBaba</h1>
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
          Top Incubators of India
        </h1>
        <div className="w-6/12 m-auto">
          <div
            className="grid grid-cols-2
           lg:grid-cols-4"
          >
            <img
              className=" lg:col-start-1 lg:col-end-2 w-full"
              src={icreate}
              alt=""
            />
            <img
              className=" lg:col-start-2 lg:col-end-3 w-full"
              src={angelprime}
              alt=""
            />
            <img
              className=" lg:col-start-3 lg:col-end-4 w-full"
              src={ui}
              alt=""
            />
            <img
              className=" lg:col-start-4 lg:col-end-5 w-full"
              src={hatch}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BabaCubePage;
