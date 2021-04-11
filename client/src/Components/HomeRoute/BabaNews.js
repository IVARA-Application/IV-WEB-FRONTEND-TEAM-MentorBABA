import React from "react";
import startup from "../../img/startupnews.png";
import blog from "../../img/babablog.png";
import entre from "../../img/entrenews.png";
import arrow from "../../img/Arrow.png";
import { Link } from "react-router-dom";

function BabaNews() {
  return (
    <div className="news-container py-2 pb-6 px-8 lg:px-28 bg-blue-200 xl:bg-opacity-0">
      <div className="flex flex-wrap justify-between items-center">
        <h1 className=" text-4xl lg:text-7xl lg:py-8 tracking-wide">
          <span>Baba</span> News
        </h1>
        <p className="text-2xl lg:text-4xl text-white tracking-widest">
          News that matters!
        </p>
      </div>
      <span className="left hidden xl:block min-h-screen"></span>
      <span className="right hidden xl:block min-h-screen"></span>
      <div className="flex gap-8 justify-evenly xl:pt-20 flex-wrap space-y-2 py-4">
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
          <div className="   flex flex-col justify-center items-center bg-white card">
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
