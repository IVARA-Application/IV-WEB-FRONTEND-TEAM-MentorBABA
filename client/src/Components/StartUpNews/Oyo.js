import React from "react";
import img from "../../img/Oyo.jpeg";
import * as AiIcons from "react-icons/ai";

function Oyo() {
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
                Oyo Rooms (stylised as OYO), also known as Oyo Hotels & Homes,
                is an Indian hospitality chain of leased and franchised hotels,
                homes and living spaces.Founded in 2013 by Ritesh Agarwal, OYO
                initially consisted mainly of budget hotels. The startup
                expanded globally with thousands of hotels, vacation homes and
                millions of rooms in India, Malaysia, UAE, Nepal, China, Brazil,
                Mexico, UK, Philippines, Japan, Saudi Arabia, Sri
                Lanka,Indonesia, Vietnam, the United States and more.
              </p>
              <p>
                OYO stands for “on your own” rooms, which sounds like something
                a teenager might make up. Maybe that’s because OYO’s Indian
                founder and CEO, Ritesh Agarwal, founded his company when he was
                a 19-year-old college dropout.Partnership Model. Oyo Rooms
                provide visitors with quality hotel room stays at different
                places around India. They have partnered with hotels and made
                them work with them under their name.OYO provides safe and
                secure hotels to unmarried couples. Most OYO hotels allow
                unmarried couples and accept local Ids; they have well-trained
                staff who ensure safety and privacy.
              </p>
              <p>
                They are famous for their Faster and easier service – It allows
                you to book premium and budget accommodation with just one tap.
                It has more than 6500 hotels in 220+ cities which makes it one
                of the largest budget hotel chains in India. The growing
                popularity of the company made it possible for people to book
                hotel rooms in a go.
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

export default Oyo;
