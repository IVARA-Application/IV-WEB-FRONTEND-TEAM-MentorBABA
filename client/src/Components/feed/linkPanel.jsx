import React, { useEffect } from "react";
import { BiBell, BiMessageRoundedDots } from "react-icons/bi";
import { GrShareOption } from "react-icons/gr";

const linkArray = [
  {
    name: "BabaStart",
  },
  {
    name: "BabaCube",
  },
  {
    name: "BabaNews",
  },
  {
    name: "BabaInc",
  },
  {
    name: "BabaValuator",
  },
  {
    name: "BabaPsy",
  },
  {
    name: "Know Your Baba",
  },
  {
    name: "Contact Baba",
  },
];

export default function LinkPanel() {
  return (
    <div className="w-full text-center pt-8">
      <div className="w-2/3 md:w-1/3 lg:w-10/12 flex mx-auto my-2 md:my-3 py-3 text-3xl md:text-4xl rounded-lg place-content-around">
        <BiBell className="cursor-pointer" title="Notifications" />
        <BiMessageRoundedDots className="cursor-pointer" title="Messages" />
        <GrShareOption className="cursor-pointer" title="Share" />
      </div>
      {linkArray.map((element) => {
        return (
          <div
            key={element.name}
            className="bg-gray-100 w-2/3 md:w-1/3 lg:w-10/12 block mx-auto my-2 md:my-3 py-3 text-lg md:text-xl rounded-lg cursor-pointer"
            title={`Go to ${element.name}`}
          >
            {element.name}
          </div>
        );
      })}
      <div
        className="bg-indigo-600 text-white w-2/3 md:w-1/3 lg:w-10/12 block mx-auto my-16 py-3 text-lg md:text-xl rounded-lg cursor-pointer"
        title="Visit Ivara"
      >
        Learn With Ivara
      </div>
    </div>
  );
}
