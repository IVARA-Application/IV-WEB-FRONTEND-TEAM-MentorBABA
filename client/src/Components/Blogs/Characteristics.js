import React from "react";
import img from "../../img/blog5.jpeg";
import * as AiIcons from "react-icons/ai";

function Characteristics() {
  return (
    <div className=" min-h-screen xl:relative bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center min-h-screen w-4/5 xl:absolute xl:top-0 xl:left-52">
        <div className="left-side-blog flex-1 relative flex flex-col items-center justify-center mx-12 bg-white rounded-lg max-w-lg">
          <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
            12 <br /> Apr
          </span>
          <h1 className="px-2 py-2 pt-16 xl:pb-4 text-2xl italic">
            Characteristics of business
          </h1>
          <div className="overflow-y-scroll">
            <div className="px-4 max-h-96 space-y-2 text-base lg:text-lg">
              <p>The business has the following characteristics: -</p>
              <ol className="space-y-2 px-2 com">
                <li className="italic">1. Economic activity</li>
                <p>
                  Business is an economic activity involving production and
                  distribution of good and services. It provides employment
                  opportunities in different sectors like industry, trade,
                  banking, etc which in turn leads to growth of the economy and
                  country. It helps in creating utilities for satisfaction of
                  human wants. It provides source of income to the members of
                  the society.
                </p>
                <li className="italic">2. Buying and selling</li>
                <p>
                  The most basic activity of any business is trading, which in
                  simpler terms means buying and selling. The business involves
                  buying of raw materials, plant and machinery, stationary,
                  property, etc. On the other hand, it sells the finished
                  products to the consumers, wholesalers, retailer, etc. It
                  provides goods and services to various sections of society.
                </p>
                <li className="italic">3. Continuous process</li>
                <p>
                  Business is not a single time activity. It is continuous
                  process of production and distribution of goods and services.
                  A single transaction of trade cannot be termed as business,
                  business should be conducted regularly in order to grow and
                  gain regular returns. It involves in research and
                  developmental competitive advantage. Continuous improvements
                  in the business helps increase profitability of business firm.
                </p>
                <li className="italic">4. Profit motive</li>
                <p>
                  Profit defines success or failure of business. Profit is
                  difference between income and expenses of the business. The
                  primary goal for any business is to attain highest possible
                  profit level through production and sale of goods and
                  services. It is a return on investment and acts as a driving
                  force behind all the business activities.
                </p>
                <p>
                  Profit is essential for survival, growth and expansion of the
                  business. There are many reasons to operate a business but the
                  most important and primary goal behind starting up a business
                  is to earn profit. It is a requirement for creation of
                  economic growth.
                </p>
                <li className="italic">5. Risk and uncertainties</li>
                <p>
                  The effect of uncertainty arising on the objectives of
                  business results in birth of risk. Risk is associated to every
                  kind of business. Business is exposed to two types of risks-
                  Insurable and Non-Insurable. Insurable risks are the one which
                  are predictable and hence can be insured. Insurance and risk
                  management helps in minimizing the risk associated with the
                  business.
                </p>
                <li className="italic">6. Creative and dynamic</li>
                <p>
                  The modern businesses are creative and dynamic in nature.
                  Business firm has to come out with creative ideas, approaches
                  and concepts for production and distribution of goods and
                  services. It means to bring new and fresh things in inventive
                  way. The creativity and innovation are very important as the
                  businesses are required to adapt to the changing social,
                  economic and technological changes. The business should come
                  out with new products to cater emerging needs of society.
                </p>
                <li className="italic">7. Customer satisfaction</li>
                <p>
                  The phase of business has been drastically changed. Firstly,
                  production was more based on supply but now it is demand
                  based. The focus is now on the demands of customers and their
                  needs. Businesses has adopted consumer-oriented approach.
                  Customer satisfaction is the ultimate aim for all the economic
                  activities. Modern businesses believe in satisfying customers
                  by providing them quality products at reasonable prices.
                </p>
                <p>
                  The basic purpose of the business is to create and retain
                  their customers with their services, therefore needs and wants
                  satisfaction of customer is most important ingredient for
                  business success.
                </p>
              </ol>
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

export default Characteristics;
