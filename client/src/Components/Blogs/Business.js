import React from "react";
import img from "../../img/blog1.jpeg";
import * as AiIcons from "react-icons/ai";

function Business() {
  return (
    <div className="business min-h-screen xl:relative bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center min-h-screen w-4/5 xl:absolute xl:top-0 xl:left-52">
        <div className="left-side-blog flex-1 relative flex flex-col items-center justify-center mx-12 bg-white rounded-lg max-w-lg">
          <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
            30 <br /> Jan
          </span>
          <h1 className="px-2 py-2 pt-16 xl:pb-4 text-2xl italic">
            Business - Meaning and concept
          </h1>
          <div className="overflow-y-scroll">
            <div className="px-4 max-h-96 space-y-2 text-base lg:text-lg">
              <p>
                It refers to an organization or enterprising entity engaged in
                commercial, industrial, or professional activities.
              </p>
              <p>
                The businesses can be classified as profit making or not for
                profit making organizations. The non-profit organizations
                operate to fulfills a charitable mission or further a social
                cause. The term business refers to organized efforts and
                activities of individual or individuals to produce or sell or
                both of goods and services for profit. The businesses range from
                sole proprietorship to international corporations. The various
                forms of business organizations include- limited liability
                partnership, company, sole proprietorship, partnership, etc.
                Business organizations range from small operations in one
                industry to large operations operating in many industries around
                the world.
              </p>
              <p>
                The businesses can be classified as profit making or not for
                profit making organizations. The non-profit organizations
                operate to fulfills a charitable mission or further a social
                cause. The term business refers to organized efforts and
                activities of individual or individuals to produce or sell or
                both of goods and services for profit. The businesses range from
                sole proprietorship to international corporations. The various
                forms of business organizations include- limited liability
                partnership, company, sole proprietorship, partnership, etc.
                Business organizations range from small operations in one
                industry to large operations operating in many industries around
                the world.
              </p>
              <p className="underline italic text-xl">Business Plan</p>
              <p>
                The formation of business is dependent on the development of
                business plan. A business plan is a formal document detailing a
                business’s goals and objectives and its strategies of how it
                will achieve the goals and objectives. Business plans are
                crucial tool when the business has to borrow capital in the
                beginning of its operations.{" "}
              </p>
              <p>
                It is an important document which determines legal structure of
                a business. Depending on the type of business, it may be needed
                to secure some permits, adhere to registration requirements, and
                obtain licenses to legally operate.{" "}
              </p>
              <p className="underline italic text-xl">Business Sizes</p>
              <p>
                Business sizes ranges from small owner- operated companies, such
                as family restaurants to multinational conglomerates. Large
                business may issue corporate stocks in order to finance its
                operation while small business owner borrow money from banks or
                their relatives to finance their operations. To be more specific
                in the case mentioned before a company is publicly traded and
                has to follow reporting and operating restrictions.
                Alternatively, as the money borrowed by a small business owner
                is not taken from public at large therefore they have relatively
                independent from regulations of a regulators.
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

export default Business;
