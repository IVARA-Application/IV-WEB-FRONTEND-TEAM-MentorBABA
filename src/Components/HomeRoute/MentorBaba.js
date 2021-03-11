import React from "react";
import img from "../../img/MentorBaba-Front.png";
import menu from "../../img/menu.png";
import { Link } from "react-router-dom";

function MentorBaba() {
  return (
    <>
      <div className="main">
        <header className="header">
          <h1 className="text-4xl px-16 py-4 ml-6">
            Mentor<span className="logo">Baba</span>
          </h1>
          <span className="menu">
            <img src={menu} alt="" />
          </span>
        </header>
        <div className="container flex mb-20">
          <div className="mentor-left ml-32 w-6/12 pt-8 mt-40">
            <h1 className="text-6xl tracking-wide">
              Mentor<span className="baba">Baba</span>
            </h1>
            <p className="mt-8 mr-52 leading-8 text-xl tracking-wide">
              A gateway to success! <br /> A platform that caters to all your
              entrepreneurial needs. An ecosystem for young entrepreneurs,
              mentors and investors who come together to nurture a start-Up to
              be the next Brahma Bull of India!
            </p>
            <span></span>
            <Link to="/login">
              <button className="text-base text-white py-2 px-8 rounded-3xl mt-16">
                Explore the BABA in you!
              </button>
            </Link>
          </div>
          <div className="mentor-right flex">
            <img className="ml-36 mt-16 justify-center" src={img} alt="" />
            <span className="circle"></span>
            <span className="grad-circle"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorBaba;
