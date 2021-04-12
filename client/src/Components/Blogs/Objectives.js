import React from "react";
import img from "../../img/blog2.jpeg";
import * as AiIcons from "react-icons/ai";

function Objectives() {
  return (
    <div className=" min-h-screen xl:relative bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center min-h-screen w-4/5 xl:absolute xl:top-0 xl:left-52">
        <div className="left-side-blog flex-1 relative flex flex-col items-center justify-center mx-12 bg-white rounded-lg max-w-lg">
          <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
            12 <br /> Apr
          </span>
          <h1 className="px-2 py-2 pt-16 xl:pb-4 text-2xl italic">
            Objectives of Business
          </h1>
          <div className="overflow-y-scroll">
            <div className="px-4 max-h-96 space-y-2 text-base lg:text-lg">
              <p>
                Objectives are the end towards which the activities of the
                business are directed. These are the goals established to guide
                the efforts of the company. As far as possible a businessman
                must set up specific objective. Objectives should not be set up
                in general terms. For example, the specific objective of a
                firm/organization could be “Increase in sale by 10% in one year
                time” whereas general objective could be “Increase in sale”.
              </p>
              <p>
                The businessman always has multiple objectives to achieve. They
                cannot follow only one objective. All objectives are important
                but most important objective is to earn profit. Earning profit
                is important and prime objective for every business but it
                cannot be sole or only objective. The business objectives may be
                classified broadly into three categories. These are:
              </p>
              <ol className="space-y-2 px-2 com">
                <li>1. Economic objectives</li>
                <li>2. Social Objectives</li>
                <li>3. Human or Individual objectives</li>
              </ol>
              <p className="italic underline">Economic objectives</p>
              <p>
                As a business is an economic activity so the most important
                objective are the economic objectives. Under economic
                objectives, the following objectives are included:
              </p>
              <ul className="px-4 space-y-2 com">
                <li>
                  • Survival- the basic purpose of every organization is to
                  survive and exist in the competition market for long period of
                  time and it is possible only when it is able to cover its cost
                  and earn profit.
                </li>
                <li>
                  • Profit- The most important objective of every organization
                  is earning adequate amount of profit. Profit is essential for
                  survival, growth and expansion of business. Profit is the
                  reward given to businessman for bearing risk.
                </li>
                <li>
                  • Growth- Business organization must grow and expand their
                  activities. The success of any organization is measured by
                  growth rate and growth rate is measure by growth in terms of
                  sales, number of branches, number of products, number of
                  employees, etc.
                </li>
              </ul>
              <p className="underline italic">Social Objective</p>
              <p>
                Social objective of businesses deals with commitment of business
                towards the society. Business is an integral part of society. It
                makes use of resources of the society. It earns profit by
                selling products or services to the members of society.
                Therefore, it owes something to the society. It becomes
                obligatory on part of businessman to do something for the
                society. No businessman can be successful in long run by
                ignoring the interest of society. The businessman can keep
                economic objective as primary objectives but at secondary level
                must also meet his social objectives.
              </p>
              <p className="italic underline">Human or individual objectives</p>
              <p>
                Human or individual objectives are related to employees of the
                organization. Employees are a valuable resource who contribute
                significantly to the success in business. To get maximum from
                employees and to keep them motivated, the business must take
                steps to take care of their employees by pursuing the individual
                objectives. Some of the common individual objectives are-
              </p>
              <ul className="px-4 space-y-2 com">
                <li>• Providing good working conditions</li>
                <li>
                  • Payment of competitive and satisfactory wages and salaries
                </li>
                <li>• Personal growth</li>
                <li>• Peer recognition and respect</li>
                <li>
                  • Providing special benefits like housing and medical
                  facilities
                </li>
              </ul>
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

export default Objectives;
