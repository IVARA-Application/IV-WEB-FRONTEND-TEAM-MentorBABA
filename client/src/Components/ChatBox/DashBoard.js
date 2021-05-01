import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";

import { BsPeopleCircle } from "react-icons/bs";
import * as Ficons from "react-icons/fi";
import { IoChatbubbleEllipsesOutline, IoPersonOutline } from "react-icons/io5";
import { IoMdShareAlt } from "react-icons/io";
import img from "../../img/connect.svg";
import plcehld from "../../img/placeholder.png";

function DashBoard() {
  return (
    <div className="bg-indigo-600">
      <div className="flex p-4 gap-4 items-center justify-center h-screen">
        {/* left side */}
        <div className="md:w-4/5 bg-white flex flex-col rounded-md h-full">
          <div className="flex py-4 gap-5 md:w-4/5 mx-auto">
            <BsPeopleCircle className="text-7xl" />
            <div className="flex flex-1 self-center">
              <input
                placeholder="Search"
                type="search"
                name=""
                id=""
                className="w-full rounded-l-lg bg-gray-200"
              />
              <button className="px-6 rounded-r-lg bg-indigo-600">
                <Ficons.FiSearch className="text-2xl text-white" />
              </button>
            </div>
          </div>
          <textarea
            placeholder="Write Post..."
            name=""
            id=""
            cols="30"
            rows="2"
            className="bg-gray-200 text-gray-400 text-xl border-none rounded-md md:w-4/5 self-center mt-8 py-8"
          ></textarea>
          <div className="flex gap-4 py-4 md:py-0 md:w-4/5 mx-auto flex-wrap items-center justify-center h-full overflow-hidden">
            {/* left-side */}
            <div className="w-4/5 mx-auto  flex-1">
              <div className="flex items-center space-x-2">
                <IoPersonOutline className="text-7xl mx-2" />
                <p className="md:text-3xl text-gray-600"> Name of the Author</p>
              </div>
              {/* paragraph */}
              <div>
                <p className="text-gray-600 md:text-2xl md:my-6 p-2 md:p-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  facere ut suscipit veniam. Architecto molestiae nam distinctio
                  rem. Placeat iure quibusdam, error reprehenderit consequuntur
                  officia.
                </p>
              </div>
              {/* Actions */}
              <div className="text-4xl flex gap-4">
                <AiOutlineLike />
                <BiMessageRoundedDetail />
                <IoMdShareAlt />
              </div>
            </div>
            <div className="mb-12">
              <img
                src={plcehld}
                alt=""
                className="h-auto w-4/5 md:w-full mx-auto rounded-md object-contain"
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="hidden md:block w-2/5 h-full">
          {/* icons */}
          <div className="md:flex bg-white  rounded-md flex-col items-center space-y-2 h-full">
            <div className="flex text-5xl items-center gap-12 py-2 my-12">
              <Ficons.FiBell />
              <IoChatbubbleEllipsesOutline />
              <img src={img} alt="" />
            </div>
            {/* List */}
            <div className="flex flex-col space-y-6 text-center text-2xl">
              <a href="" className="px-4 py-1 bg-gray-100 rounded-md">
                BabaStart
              </a>
              <a href="" className="px-4 py-1 bg-gray-100 rounded-md">
                BabaCube
              </a>
              <a href="" className="px-4 py-1 bg-gray-100 rounded-md">
                BabaNews
              </a>
              <a href="" className="px-4 py-1 bg-gray-100 rounded-md">
                BabaInc
              </a>
              <a href="" className="px-4 py-1 bg-gray-100 rounded-md">
                BabaValuator
              </a>
              <a href="" className="px-4 py-1 bg-gray-100 rounded-md">
                BabaPsy
              </a>
              <a href="" className="px-4 py-1 bg-gray-100 rounded-md">
                Know your Baba
              </a>
              <a href="" className="px-4 py-1 bg-gray-100 rounded-md">
                Contact Baba
              </a>
            </div>
            {/* Bottom button */}
            <div className="my-8">
              <button className="text-white my-12 px-2 bg-indigo-600 rounded-md py-2 text-2xl">
                Learn with IVARA!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
