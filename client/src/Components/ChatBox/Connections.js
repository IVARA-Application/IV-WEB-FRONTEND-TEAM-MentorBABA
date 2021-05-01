import React from "react";

import { BsPeopleCircle } from "react-icons/bs";

function Connections() {
  return (
    <div className="bg-indigo-600">
      <div className="p-4 flex flex-col items-center h-screen">
        <div className="bg-white h-full w-full rounded-md">
          <h1 className="text-center text-4xl py-4">Connections</h1>
          <div className="flex flex-col items-center justify-center w-full h-4/5 py-12">
            <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 md:py-12 w-full lg:w-4/5 mx-auto">
              <div className="bg-gray-200 flex mx-2 lg:w-4/5 rounded-lg py-4 md:py-8 justify-around lg:mx-auto items-center">
                <BsPeopleCircle className="md:text-9xl text-7xl" />
                <div className="flex flex-col items-center">
                  <p className="text-2xl">Position</p>
                  <button className="bg-yellow-400 py-2 px-8 rounded-md font-bold text-xl my-2 shadow-xl">
                    Connect
                  </button>
                </div>
              </div>
              <div className="bg-gray-200 flex mx-2 lg:w-4/5 rounded-lg py-4 md:py-8 justify-around lg:mx-auto items-center">
                <BsPeopleCircle className="md:text-9xl text-7xl" />
                <div className="flex flex-col items-center">
                  <p className="text-2xl">Position</p>
                  <button className="bg-yellow-400 py-2 px-8 rounded-md font-bold text-xl my-2 shadow-xl">
                    Connect
                  </button>
                </div>
              </div>
              <div className="bg-gray-200 flex mx-2 lg:w-4/5 rounded-lg py-4 md:py-8 justify-around lg:mx-auto items-center">
                <BsPeopleCircle className="md:text-9xl text-7xl" />
                <div className="flex flex-col items-center">
                  <p className="text-2xl">Position</p>
                  <button className="bg-yellow-400 py-2 px-8 rounded-md font-bold text-xl my-2 shadow-xl">
                    Connect
                  </button>
                </div>
              </div>
              <div className="bg-gray-200 flex mx-2 lg:w-4/5 rounded-lg py-4 md:py-8 justify-around lg:mx-auto items-center">
                <BsPeopleCircle className="md:text-9xl text-7xl" />
                <div className="flex flex-col items-center">
                  <p className="text-2xl">Position</p>
                  <button className="bg-yellow-400 py-2 px-8 rounded-md font-bold text-xl my-2 shadow-xl">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connections;
