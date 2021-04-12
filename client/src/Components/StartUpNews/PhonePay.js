import React from "react";
import img from "../../img/PhonePay.jpeg";
import * as AiIcons from "react-icons/ai";

function PhonePay() {
  return (
    <div className="business min-h-screen xl:relative bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center min-h-screen w-4/5 xl:absolute xl:top-0 xl:left-52">
        <div className="left-side-blog flex-1 relative flex flex-col items-center justify-center mx-12 bg-white rounded-lg max-w-lg">
          <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
            12 <br /> Apr
          </span>
          <h1 className="px-2 py-2 pt-16 xl:pb-4 text-2xl italic">PhonePay</h1>
          <div className="overflow-y-scroll">
            <div className="px-4 max-h-96 space-y-2 text-base lg:text-lg">
              <p>
                PhonePe is a financial services company specialised in Indian
                Digital Payments which is headquartered in Bangalore, India.
                PhonePe was founded in December 2015, by Sameer Nigam, Rahul
                Chari and Burzin Engineer. The PhonePe app, is based on the
                Unified Payments Interface (UPI), which was launched in August
                2016.
              </p>
              <p>
                FxMart received its operational licence on 26 August 2014.
                PhonePe was incorporated in December 2015. In April 2016, the
                company was taken over by Flipkart. and as a part of the
                Flipkart acquisition, the FxMart license was transferred to
                PhonePe and it was branded in the market once again as the
                PhonePe wallet. PhonePe's founder Sameer Nigam was appointed as
                the CEO of the company.
              </p>
              <p>
                In August 2016, the company partnered with Yes Bank to launch a
                UPI-based mobile payment app, based on the government-backed UPI
                platform.
              </p>
              <p>
                Within 3 months of launch, the app was downloaded by over 10
                million users. In 2018, PhonePe also became the fastest Indian
                payment app to get a 50 million badge on the Google play store.
              </p>
              <p>
                On 14 January 2017, PhonePe transactions were blocked by ICICI
                Bank, stating that it did not meet the NPCI guidelines.
                Initially, on 19 January 2017, ICICI Bank was instructed to
                allow UPI transactions via PhonePe. During this period, Airtel
                also stopped all PhonePe transactions on its platforms. On 20
                January 2017, NPCI announced that the previous instructions
                stating the reason that PhonePe indeed violated the UPI norms.
                This in turn led to, PhonePe closing its operations on
                Flipkart's website, to agree with the terms stated in the
                updated verdict from NPCI. By February, 2017, PhonePe resolved
                the issues with ICICI. PhonePe has hit an total annual payment
                value(TPV) run rate of $388 Billion in March this year. It has
                also crossed a Billion UPI payments record in the month of March
                and total transactions across all types of payment makes upto
                1.3 Billion
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

export default PhonePay;
