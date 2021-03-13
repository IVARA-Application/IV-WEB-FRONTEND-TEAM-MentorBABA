import React from "react";
import startup from "../img/startupnews.png";
import blog from "../img/babablog.png";
import entre from "../img/entrenews.png";
import arrow from "../img/Arrow.png";

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
        <div className="flex flex-col justify-center items-center bg-white card">
          <div>
            <img src={startup} alt="" />
          </div>
          <span className="bg-yellow-300 w-full items-center justify-center flex visit">
            <p> Visit now </p> <img src={arrow} alt="" />
          </span>
        </div>
        <div className="   flex flex-col justify-center items-center  bg-white card">
          <div className="">
            <img src={blog} alt="" />
          </div>
          <span className="bg-yellow-300 w-full items-center justify-center flex visit">
            <p> Visit now </p> <img src={arrow} alt="" />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center bg-white card">
          <div className="">
            <img src={entre} alt="" />
          </div>
          <span className="bg-yellow-300 w-full items-center justify-center flex visit">
            <p> Visit now </p> <img src={arrow} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default BabaNews;
