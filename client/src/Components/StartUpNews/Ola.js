import React from "react";
import img from "../../img/Ola.jpeg";
import * as AiIcons from "react-icons/ai";

function Ola() {
  return (
    <div className="business min-h-screen xl:relative bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center min-h-screen w-4/5 xl:absolute xl:top-0 xl:left-52">
        <div className="left-side-blog flex-1 relative flex flex-col items-center justify-center mx-12 bg-white rounded-lg max-w-lg">
          <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
            12 <br /> Apr
          </span>
          <h1 className="px-2 py-2 pt-16 xl:pb-4 text-2xl italic">Ola Cabs</h1>
          <div className="overflow-y-scroll">
            <div className="px-4 max-h-96 space-y-2 text-base lg:text-lg">
              <p>
                Ola Cabs was founded on 3 December 2010 as an online cab
                aggregator in Mumbai, Kochi, Chennai and is now based in
                Bengaluru. As of 2019, the company has expanded to a network of
                more than 1.5 million drivers across 250 cities.In November
                2014, Ola diversified to incorporate auto rickshaws on a trial
                basis in Bengaluru. After the trial phase, Ola Auto expanded to
                other cities like Delhi, Pune, Chennai and Hyderabad starting in
                December 2014.In January 2018, Ola extended into its first
                overseas market, Australia, and in New Zealand in September
                2018. In March 2019, Ola began its UK operations introducing
                auto rickshaws in UK. More than 10,000 drivers have applied both
                in online and offline mode ahead of its launch in London. In
                February 2020, Ola launched its taxi-hailing services with over
                25,000 drivers registered Ola Cabs’ technology came under
                criticism regarding the security of its mobile app. The API
                calls could be replayed to top up its wallet.In August 2016, a
                privacy breach occurred when customers’ details such as names,
                phone numbers and addresses, in Bangalore, were received as SMS
                messages by an individual in Chennai. Although these
                unanticipated messages were reported to Ola, the company ignored
                them, even under the threat of being reported to the TRAI.The
                issue was reportedly fixed three weeks later after receiving
                considerable media coverage and social media attention.
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

export default Ola;
