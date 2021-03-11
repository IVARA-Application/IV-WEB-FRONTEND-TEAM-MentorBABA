import React from "react";
import startup from "../../img/startupnews.png";
import blog from "../../img/babablog.png";
import entre from "../../img/entrenews.png";
import arrow from "../../img/Arrow.png";
import { Link } from "react-router-dom";

function BabaNews() {
  return (
    <div className="news-container px-28">
      <div className="flex justify-between items-center">
        <h1 className="text-7xl py-8 tracking-wide">
          <span>Baba</span> News
        </h1>
        <p className="text-4xl text-white tracking-widest">
          News that matters!
        </p>
      </div>
      <span className="left"></span>
      <span className="right"></span>
      <div className="flex gap-10 justify-evenly pt-20">
        <Link to="/StartupNews">
          <div className="flex flex-col justify-center items-center bg-white card">
            <div className="relative">
              <img src={startup} alt="" />
              <p className="absolute text-white bottom-4 text-xl left-0 text-center w-full">
                Startup News
              </p>
            </div>
            <span className="bg-yellow-300 w-full items-center justify-center flex visit">
              <p>Visit now</p>
              <img src={arrow} alt="" />
            </span>
          </div>
        </Link>
        <Link to="/BabaBlogs">
          <div className="   flex flex-col justify-center items-center  bg-white card">
            <div className="relative">
              <img src={blog} alt="" />
              <p className="absolute text-white bottom-4 text-xl left-0 text-center w-full">
                BabaBlog
              </p>
            </div>
            <span className="bg-yellow-300 w-full items-center justify-center flex visit">
              <p>Visit now</p>
              <img src={arrow} alt="" />
            </span>
          </div>
        </Link>
        <Link to="/EntrepreneurNews">
          <div className="flex flex-col justify-center items-center bg-white card">
            <div className="relative">
              <img src={entre} alt="" />
              <p className="absolute text-white bottom-4 text-xl left-0 text-center w-full">
                Entrepreneur News
              </p>
            </div>
            <span className="bg-yellow-300 w-full items-center justify-center flex visit cursor-pointer">
              <p>Visit now</p>
              <img src={arrow} alt="" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BabaNews;
