import React from "react";
import img from "../../img/MentorBaba-Front.png";
import menu from "../../img/menu.png";
import { Link } from "react-router-dom";

function MentorBaba() {
  return (
    <>
      <div className="main">
        <header className="header flex justify-between items-center md:w-4/5 md:m-auto xl:w-full xl:m-auto">
          <h1 className="text-2xl lg:text-4xl xl:px-16 px-4 py-2 xl:pb-6 xl:py-4 xl:ml-6">
            Mentor<span className="logo">Baba</span>
          </h1>
          <div className="flex items-center justify-center xl:pb-6 xl:py-4 xl:mr-6">
            <img src={menu} className="w-1/2 lg:w-3/4" alt="" />
          </div>
        </header>
        <div className="lg:flex px-4 md:mt-8 xl:w-4/5 xl:m-auto">
          <div className="mentor-left flex-1  lg:mt-20 xl:mt-40">
            <h1 className="text-3xl lg:text-6xl lg:tracking-wide">
              Mentor<span className="baba">Baba</span>
            </h1>
            <div className="flex flex-col justify-center items-center">
              <p className="lg:mt-8 mt-4 md:leading-8 text-xl md:tracking-wide">
                A gateway to success! <br /> A platform that caters to all your
                entrepreneurial needs. An ecosystem for young entrepreneurs,
                mentors and investors who come together to nurture a start-Up to
                be the next Brahma Bull of India!
              </p>
              <span className="left-circle hidden xl:block"></span>
              <Link to="/login">
                <button className="text-base text-white md:my-12 py-2 px-8 rounded-3xl my-4 lg:mt-16">
                  Explore the BABA in you!
                </button>
              </Link>
            </div>
          </div>
          <div className="mentor-right flex flex-1 justify-center items-center">
            <img className="w-3/4 lg:w-full" src={img} alt="" />
            <span className="circle hidden xl:block"></span>
            <span className="grad-circle hidden xl:block"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorBaba;
