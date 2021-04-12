import React from "react";
import img from "../../img/blog3.jpeg";
import * as AiIcons from "react-icons/ai";

function Commerce() {
  return (
    <div className=" min-h-screen xl:relative bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center min-h-screen w-4/5 xl:absolute xl:top-0 xl:left-52">
        <div className="left-side-blog flex-1 relative flex flex-col items-center justify-center mx-12 bg-white rounded-lg max-w-lg">
          <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
            30 <br /> Jan
          </span>
          <h1 className="px-2 py-2 pt-16 xl:pb-4 text-2xl italic">
            Commerce - Meaning and functions
          </h1>
          <div className="overflow-y-scroll">
            <div className="px-4 max-h-96 space-y-2 text-base lg:text-lg">
              <p>
                Commerce refers to all those activities which help directly or
                indirectly in distribution of goods to the ultimate consumers.
                There will be no use of producing goods unless and until these
                goods reach the ultimate consumer. Goods are produced at one
                place and consumers are scattered at different places. The
                consumers are not aware of what kind of goods are produced by
                the manufacturer. Goods are produced in large quantities by
                producers and demanded by consumers in small quantities. All
                these problems of hindrance of place, knowledge, storage, etc.
                are solved by the use of commerce.
              </p>
              <p className="italic">Functions of Commerce-</p>
              <p>
                The commerce segment of business activities is a very important
                area. Commerce is considered as the backbone of the industry.
                The goods produced by the industry reach the ultimate consumer
                only because of commerce, therefore commerce is said to perform
                the following functions-
              </p>
              <ol className="px-2 space-y-2 text-black com">
                <li>
                  <strong>1. Remove hindrance of persons</strong>
                  <p>
                    A large variety of goods are produced by a group of persons
                    called consumers. There is no direct relation between
                    consumers and producers. The trade segment of commerce
                    creates a link between producers and consumers. Traders help
                    in exchanging of goods and services from producers to
                    consumers. Traders help in exchange of goods and services
                    from its producers to its consumers and hence remove the
                    hindrance between producers and consumers.
                  </p>
                </li>
                <li>
                  <strong>2. Removes hindrance of place</strong>
                  <p>
                    Goods are produced at one place but the consumer of that
                    product are scattered in different corners of the country or
                    the world. There is a place gap between the producers and
                    consumers. The transport segment of commerce helps to cater
                    to this hindrance of place gap. The transport moves the
                    goods from the place of production to the markets which are
                    easily accessible by the consumers. Thus, the transport
                    segment plays an essential role in buying and selling of
                    good. It is a crucial function of commerce.
                  </p>
                </li>
                <li>
                  <strong>3. Removes hindrance of time</strong>
                  <p>
                    Some goods are produced in a particular season but consumed
                    throughout the year, e.g., wheat, rice, etc. on the other
                    hand, some of the goods are produced throughout the year but
                    consumed or used in a particular season, e.g., A.C. There is
                    time gap between the production and the consumption. The
                    good need to be kept safe and fresh during this time gap.
                    The goods can be kept safely in the warehouses till they are
                    demanded by the customers.
                  </p>
                </li>
                <li>
                  <strong>4. Removes hindrance of exchange</strong>
                  <p>
                    The goods and services are produced by the manufacturer are
                    sold to the buyers in exchange of money. The common medium
                    of exchange is circulated by the banking sector of commerce.
                    The banks help the buyers and sellers in making and
                    collecting payments. The businessman is also facilitated
                    with different modes of payments like bank draft, cheques,
                    e- banking, etc. Banks also facilitate businessmen the
                    service of lending money by granting loan, credit facility,
                    etc. Banks also help in external trade by issuing letter of
                    credit and by providing foreign currency for international
                    transactions.
                  </p>
                </li>
                <li>
                  <strong>5. Removes hindrance of risk</strong>
                  <p>
                    There are various risks which are prone to businessman and
                    his/ her business. Therefore, the insurance branch of
                    Commerce helps in bridging the inconvenience faced by
                    businessman in times of uncertainties. It helps in removing
                    the hindrance of risk by providing protection and
                    compensation to insured. Insurance companies agree to
                    undertake to make good the loss suffered by the businessmen.
                    Some of the common insurances taken up by businessmen are
                    for damage of goods during transit, storage, by fire, etc.
                  </p>
                </li>
                <li>
                  <strong>6. Removes Hindrance of Knowledge</strong>
                  <p>
                    Generally, consumer or the buyers are not aware about the
                    new goods produced by manufacturers as there is no direct
                    communication between producer and customer. The branch of
                    commerce which acts as a tool to facilitate the awareness
                    amongst the consumers is advertisement. This branch spreads
                    awareness about new products manufactured by the producers.
                  </p>
                </li>
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

export default Commerce;
