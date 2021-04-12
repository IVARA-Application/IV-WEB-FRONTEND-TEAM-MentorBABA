import React from "react";
import img from "../../img/OyoInfo.jpeg";
import * as AiIcons from "react-icons/ai";

function OyoInfo() {
  return (
    <div className="business min-h-screen xl:relative bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center min-h-screen w-4/5 xl:absolute xl:top-0 xl:left-52">
        <div className="left-side-blog flex-1 relative flex flex-col items-center justify-center mx-12 bg-white rounded-lg max-w-lg">
          <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
            12 <br /> Apr
          </span>
          <h1 className="px-2 py-2 pt-16 xl:pb-4 text-2xl italic">Oyo</h1>
          <div className="overflow-y-scroll">
            <div className="px-4 max-h-96 space-y-2 text-base lg:text-lg">
              <p>
                Ritesh Agarwal says, Failures marks your journey to success.
                This 27 year young entrepreneur, has some great advise for the
                budding young entrepreneurs. He was a millionaire at an age of
                22, but as we know every success is derived from failures. His
                app, OYO, provides hospitality to thousands of people every day.{" "}
              </p>{" "}
              <p>
                In his recent tweet, he says, “Young founders often ask me if
                experience plays a big factor in success? To them, I say: More
                than your experience in the domain, what matters is your
                experience with failures. If you are learning & failing early,
                your ability to succeed later on goes up manifold.”
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

export default OyoInfo;
