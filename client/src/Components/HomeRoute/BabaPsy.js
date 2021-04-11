import React from "react";
import img from "../../img/blogs.png";
import circle from "../../img/circle.png";

function BabaPsy() {
  return (
    <div className="py-4 lg:py-0">
      <div className="w-4/5 m-auto">
        <div>
          <h1 className="text-2xl md:text-3xl xl:text-5xl text-center py-2 lg:py-8">
            HealMyMind through <span>BabaPsy</span>
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:flex-none space-y-2 lg:grid grid-cols-5 grid-row-2 lg:gap-4 my-2 lg:my-8 lg:pb-4">
          <div className="bg-white order-1 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2 border-2 rounded">
            <p className="lg:p-8 lg:py-12 lg:text-xl text-lg py-4 px-4">
              Come explore your inner peace! We help you say no to your fears
              and stay calm while you climb the ladder of success!
            </p>
          </div>

          <div className="relative order-2 bg-blue-700 py-12 col-start-4 col-end-6 xl:col-start-5 xl:col-end-6 rounded-xl">
            <a href="https://www.healmymind.in/" className="lg:ml-20">
              <p className="p-2 text-white text-center mx-8 text-xl pb-4">
                Book your free session today!
              </p>
              <span className="absolute bg-gray-200 rounded-b w-full text-center text-black bottom-0 p-2">
                Apply Here
              </span>
            </a>
          </div>
          <div className="flex order-4 items-center justify-center col-start-1 col-end-2 row-start-2 row-end-3 w-full">
            <img src={img} alt="" className="" />
          </div>
          <div className="flex order-4 items-center justify-center col-start-2 col-end-3 row-start-2 row-end-3 w-full">
            <img src={img} alt="" className=" " />
          </div>
          <div className="flex order-4 items-center justify-center col-start-3 col-end-4 row-start-2 row-end-3 w-full">
            <img src={img} alt="" />
          </div>
          <div className="col-start-4 py-2 order-3 col-end-6 row-start-2 row-end-3 flex bg-gray-100 rounded-xl">
            <div className="self-center p-2 px-4">
              <img src={circle} alt="" />
            </div>
            <div className="flex-1 self-center p-4 lg:p-2 order-3">
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
