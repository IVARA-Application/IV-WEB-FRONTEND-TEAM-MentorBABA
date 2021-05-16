import React from "react";
import { BiBell, BiMessageRoundedDots } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";

const linkArray = [
  {
    name: "BabaStart",
    link: "/BabaStart",
  },
  {
    name: "BabaCube",
    link: "/BabaCube",
  },
  {
    name: "BabaNews",
    link: "/StartupNews",
  },
  {
    name: "BabaInc",
    link: "/BabaInc",
  },
  {
    name: "BabaValuator",
    link: "/BabaValuator",
  },
  {
    name: "BabaPsy",
    link: "/#baba-psy",
  },
  {
    name: "Know Your Baba",
    link: "/#know-baba",
  },
  {
    name: "Contact Baba",
    link: "/#contact-us",
  },
];

export default function LinkPanel() {
  return (
    <div className="w-full text-center pt-8">
      <div className="w-2/3 md:w-1/3 lg:w-10/12 flex mx-auto my-2 md:my-3 py-3 text-3xl md:text-4xl rounded-lg place-content-around">
        <BiBell className="cursor-pointer" title="Notifications" />
        <BiMessageRoundedDots className="cursor-pointer" title="Messages" />
        <GrLogout
          className="cursor-pointer"
          title="Logout"
          onClick={(event) => {
            event.preventDefault();
            window.localStorage.setItem("token", "");
            window.location.href = "/";
          }}
        />
      </div>
      {linkArray.map((element) => {
        return (
          <div
            key={element.name}
            className="bg-gray-100 w-2/3 md:w-1/3 lg:w-10/12 block mx-auto my-2 md:my-3 py-3 text-lg md:text-xl rounded-lg cursor-pointer"
            title={`Go to ${element.name}`}
            onClick={(event) => {
              event.preventDefault();
              window.open(element.link, "_blank");
            }}
          >
            {element.name}
          </div>
        );
      })}
      <div
        className="bg-indigo-600 text-white w-2/3 md:w-1/3 lg:w-10/12 block mx-auto my-16 py-3 text-lg md:text-xl rounded-lg cursor-pointer"
        title="Visit Ivara"
        onClick={(event) => {
          event.preventDefault();
          window.open("https://www.ivaraedu.com", "_blank");
        }}
      >
        Learn With Ivara
      </div>
    </div>
  );
}
