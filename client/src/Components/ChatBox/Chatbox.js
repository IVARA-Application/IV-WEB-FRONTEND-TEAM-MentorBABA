import React from "react";
import "./ChatBox.css";
import * as Ficons from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";
import { MdInsertEmoticon } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";

function Chatbox() {
  return (
    <div className="bg-gray-600">
      <div className="Chatbox-container flex gap-2 p-2 h-screen">
        {/* Left Side */}
        <div className="bg-gray-200 hidden md:block left-side-chatbox w-2/5 rounded-md overflow-y-auto">
          <div className="left-top-bar bg-white border-b-2 border-gray-400 p-2 py-4 flex items-center justify-between">
            <BsPeopleCircle className="text-3xl" />
            <BiDotsVerticalRounded className="text-3xl" />
          </div>
          {/* Search box */}
          <div className="flex justify-center mx-auto w-full border-gray-400 border-b-2 py-2">
            <div className="flex bg-white items-center w-4/5 rounded-2xl px-2">
              <Ficons.FiSearch className="text-xl" />
              <input
                type="text"
                className="focus:outline-none focus:ring-0 w-full"
              />
            </div>
          </div>
          <div className="h-full flex-1 overflow-hidden">
            <div className=" bg-gray-200 gap-2 py-1">
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-gray-400 px-2 m-2 rounded-xl">
                <div className="flex items-center py-2 ">
                  <BsPeopleCircle className="text-3xl mx-2" />
                  <div>
                    <p> User Name</p>
                    <p className="text-sm">Description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="bg-white right-side-chatbox flex flex-col flex-1 w-3/5 rounded-md">
          {/* Top bar */}
          <div className="Top-bar flex items-center border-b-2 border-gray-400 justify-between p-2 py-4">
            <div className="flex items-center space-x-2">
              <BsPeopleCircle className="text-3xl" />
              <h1>User Name</h1>
            </div>
            <div className="flex text-2xl">
              <Ficons.FiSearch />
              <BiDotsVerticalRounded />
            </div>
          </div>
          {/* mid area */}
          <div className="mid-div bg-white relative flex-1">Hello</div>
          {/* bottom section */}
          <div className="bottom-bar flex items-center bg-gray-200 space-x-4 lg:text-2xl px-4 py-2 text-xl">
            <MdInsertEmoticon />
            <GrAttachment />
            <input type="text" className="rounded-xl flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
