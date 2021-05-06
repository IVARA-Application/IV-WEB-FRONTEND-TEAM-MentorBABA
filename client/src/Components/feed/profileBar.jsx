import React from "react";
import { FaSearch } from "react-icons/fa";

export default function ProfileBar(props) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1">
        <img
          src={props.profilePic}
          alt="User Profile"
          className="w-10 md:w-20 lg:w-20 m-4 inline-block"
        />
      </div>
      <div
        className="border border-black inline-block col-start-3 col-span-10 md:col-start-2 md:col-span-11 rounded-lg mx-3 md:ml-10 my-2 md:mt-6 lg:mt-8 bg-indigo-600"
        style={{ height: "fit-content" }}
      >
        <input
          type="text"
          className="bg-gray-100 w-10/12 md:w-11/12 rounded-l-lg"
          placeholder="Search"
        ></input>
        <span className="w-2/12 md:w-1/12 inline-block h-full text-center text-white text-2xl">
          <FaSearch className="mx-auto pt-2" />
        </span>
      </div>
    </div>
  );
}
