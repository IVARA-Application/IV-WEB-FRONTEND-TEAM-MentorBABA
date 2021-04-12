import React from "react";
import img from "../../img/Swiggy.jpeg";
import * as AiIcons from "react-icons/ai";

function Swiggy() {
  return (
    <div className="business min-h-screen xl:relative bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center min-h-screen w-4/5 xl:absolute xl:top-0 xl:left-52">
        <div className="left-side-blog flex-1 relative flex flex-col items-center justify-center mx-12 bg-white rounded-lg max-w-lg">
          <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
            12 <br /> Apr
          </span>
          <h1 className="px-2 py-2 pt-16 xl:pb-4 text-2xl italic">Swiggy</h1>
          <div className="overflow-y-scroll">
            <div className="px-4 max-h-96 space-y-2 text-base lg:text-lg">
              <p>
                Swiggy is India’s largest online food ordering and delivery
                platform, founded in 2014. Swiggy is based in Bangalore, India,
                and as of March 2019, was operating in 100 Indian cities. In
                early 2019, Swiggy expanded into general product deliveries
                under the name Swiggy Stores.In 2013, the two founders, Nandan
                Reddy and Sriharsha Majety, designed an e-commerce website
                called Bundl to facilitate courier service and shipping within
                India.Bundl was halted, and was rebranded to enter the food
                delivery market.At the time, the food delivery sector was in
                turmoil as several notable startups, such as Foodpanda (later
                acquired by Ola Cabs), TinyOwl (later acquired by Zomato) and
                Ola Cafe (later closed) were struggling. Majety and Reddy
                approached Rahul Jaimini, formerly with Myntra, and founded
                Swiggy and parent holding company Bundl Technologies in 2014.
                The company built a dedicated delivery network and grew rapidly,
                primarily driven by the focus on logistics and locking in key
                resources. In May 2020, Swiggy laid off 1100 employees during
                the COVID-19 pandemic. In 2015, the company began attracting
                external investments. The first was a $2 million investment from
                Accel and SAIF Partners, along with an additional investment
                from Norwest Venture Partners. The next year, Swiggy raised $15
                million from new and existing investors, including Bessemer
                Venture Partners and Harmony Partners.
              </p>
              <p>
                In 2017, Naspers led an $80 million funding round into Swiggy.
                Swiggy received $100 million from China-based Meituan-Dianping
                and Naspers in 2018 and a string of investments boosted the
                company’s valuation to over a $1 billion.In February 2019,
                Swiggy acquired Bengaluru-based AI startup Kint.io.In April
                2020, Swiggy received around $43 million funding which valued
                the company at $3.6 billion.
              </p>
            </div>
          </div>
          <div className="flex items-center py-6 border-t-4 my-2 border-indigo-500">
            <textarea
              placeholder="Comment Here"
              name=""
              id=""
              cols="25"
              rows="1"
              className="resize-none border-none rounded-md shadow-md"
            ></textarea>
            <button className="text-3xl rounded-md text-indigo-600 bg-white">
              <AiIcons.AiOutlineCaretRight />
            </button>
          </div>
        </div>
        <div className="right-side-blog flex flex-col items-center justify-center flex-1 py-4 lg:py-0">
          <div className="object-contain">
            <img src={img} alt="" className="rounded-md max-h-96" />
          </div>
          <div className="flex space-x-16 lg:space-x-32 items-center text-2xl py-8">
            <div
              className="flex items-center space-x-2 text-white cursor-pointer"
              //   onClick={() => {
              //     displayPreviousItems(startFrom);
              //   }}
            >
              <AiIcons.AiOutlineLeft />
              <p>Previous</p>
            </div>
            <div
              className="flex items-center space-x-2 text-white cursor-pointer"
              //   onClick={() => {
              //     displayNextItems(startFrom);
              //   }}
            >
              <p>Next</p>
              <AiIcons.AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swiggy;
