import React from "react";
import img from "../img/blogs.png";
import circle from "../img/circle.png";

function BabaPsy() {
  return (
    <div className="bg-gray-50">
      <div className="w-1/2 m-auto">
        <div>
          <h1 className="text-5xl text-center py-8">
            HealMyMind through <span>BabaPsy</span>
          </h1>
        </div>
        <div className="grid grid-cols-5 grid-row-2 gap-6 my-8 pb-4">
          <div className="bg-white col-start-1 col-end-4 row-start-1 row-end-2 border-2 rounded">
            <p className="p-8 py-12 text-xl">
              Come explore your inner peace! We help you say no to your fears
              and stay calm while you climb the ladder of success!
            </p>
          </div>
          <div className="relative bg-blue-700 py-12 col-start-5 col-end-6 rounded-xl ">
            <p className="p-2 text-white text-center mx-8 text-xl pb-4">
              Book your free session today!
            </p>
            <span className="absolute bg-gray-200 rounded-b w-full text-center text-black bottom-0 p-2">
              Apply Here
            </span>
          </div>
          <div className="flex items-center justify-center col-start-1 col-end-2 row-start-2 row-end-3 w-full">
            <img src={img} alt="" className="" />
          </div>
          <div className="flex items-center justify-center col-start-2 col-end-3 row-start-2 row-end-3 w-full">
            <img src={img} alt="" className=" " />
          </div>
          <div className="flex items-center justify-center col-start-3 col-end-4 row-start-2 row-end-3 w-full">
            <img src={img} alt="" />
          </div>
          <div className="col-start-4 col-end-6 row-start-2 row-end-3 flex bg-gray-100 rounded-xl">
            <div className="self-center p-2 px-4">
              <img src={circle} alt="" />
            </div>
            <div className="flex-1 self-center p-2">
              <h1>
                <span> Our Conunsellor</span>
              </h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BabaPsy;
