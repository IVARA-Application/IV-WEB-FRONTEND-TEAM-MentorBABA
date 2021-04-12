import React from "react";
import img from "../../img/blog3.jpeg";
import * as AiIcons from "react-icons/ai";

function Commerce() {
  return (
    <div className=" min-h-screen xl:relative bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center min-h-screen w-4/5 xl:absolute xl:top-0 xl:left-52">
        <div className="left-side-blog flex-1 relative flex flex-col items-center justify-center mx-12 bg-white rounded-lg max-w-lg">
          <span className="quarter-circle absolute flex text-lg text-center pl-2 items-center rounded-br-full w-16 h-16 top-0 left-0">
            12 <br /> Apr
          </span>
          <h1 className="px-2 py-2 pt-16 xl:pb-4 text-2xl italic">
            Industry - Meaning and types
          </h1>
          <div className="overflow-y-scroll">
            <div className="px-4 max-h-96 space-y-2 text-base lg:text-lg">
              <p>
                Industry refers to an activity which converts raw material into
                useful products. Industry includes activities related to
                production and processing as well as activities related to
                rearing and reproduction of animal or other living species.
              </p>
              <p>
                The purpose of industry is to create form utility by converting
                raw materials into useful forms of finished products. The term
                industry is also used to refer to group of firms producing
                similar or related goods. For example- Textile industry, cottage
                industry.
              </p>
              <p>
                Industry may produce consumer goods or capital goods. Goods such
                as bread, butter, cloth, etc. are consumer goods. These goods
                are directly used by the consumer. Goods such as machinery,
                cement etc. are called capital goods as these are used further
                in production process to make useful products.
              </p>
              <p>Industry can be classified into three broad categories-</p>
              <ol className="px-2 space-y-2 com">
                <li>1. Primary industry</li>
                <li>2. Secondary industry</li>
                <li>3. Tertiary or service industry</li>
              </ol>
              <p className="italic">PRIMARY INDUSTRY</p>
              <p>
                Primary industry includes all those industries which are
                concerned with extraction of natural resources and reproduction
                of living species.
              </p>
              <p>
                These industries can further be classified into two categories-
              </p>
              <ul className="space-y-2 px-4 com list-disc">
                <li>Extractive Industries</li>
                <p>
                  These are those industries which involve extraction of
                  something from natural resources such as minerals from earth,
                  fish from rivers, seas, timber from forest, etc. The products
                  of extractive industry can be directly used or become the raw
                  material for other industries.
                </p>
                <li>Genetic industry</li>
                <p>
                  The industries involved in the activities of rearing and
                  breeding of living organisms I.e., birds, plants, animals etc.
                  are known as genetic industry. For example- rearing of cattle
                  for milk, dairy firms, poultry farms, rearing of plants in
                  nursery, growing fish in ponds(pisciculture) etc. are included
                  in genetic industry.
                </p>
              </ul>
              <p className="italic">SECONDARY INDUSTRY</p>
              <p>
                This industry makes use of products which are extracted and
                produced by primary industry as their raw materials and produce
                finished products. For example- mining of iron is done in
                primary industry but steel manufacturing is done in secondary
                industry.
              </p>
              <p>There are two kinds of secondary industry-</p>
              <ol className="px-2 space-y-2 com">
                <li>1. Manufacturing industries</li>
                <li>2. Construction industry</li>
              </ol>
              <p>Manufacturing industries</p>
              <p>
                These industries are engaged in the process of conversion of raw
                materials or semi-finished goods into finished goods. These
                industries create form utility by changing the form of raw
                materials into finished products. For example- timber is
                converted into furniture, iron into steel, sugarcane into sugar,
                cotton into cloth, etc.
              </p>
              <p>The manufacturing industries produce two types of goods:</p>
              <ol className="space-y-2 com px-2">
                <li>i) Consumer goods</li>
                <p>
                  The goods which can be directly consumed by consumers are
                  known as consumer goods. These goods are used for day-to-day
                  consumption. E.g.- cloth, oil, soap.
                </p>
                <li>ii) Industrial goods-</li>
                <p>
                  The goods produced for manufacturing consumer goods are known
                  as industrial goods like machinery, equipment, tools, etc.
                  which are required to manufacture consumer goods.
                </p>
              </ol>
              <p>Manufacturing industries are of following types-</p>
              <ol className="space-y-2 com px-2">
                <li>1. Analytical industry</li>
                <li>2. Synthetic industry</li>
                <li>3. Processing industry</li>
                <li>4. Assembly industry</li>
              </ol>
              <p>Construction industry</p>
              <p>
                These industries are concerned with the construction of
                buildings, dams, roads etc. These industries use products of
                manufacturing industries such as cements, iron and steel, etc.
                The unique feature of these industries is that their products
                cannot be transferred or shifted to the market. They are
                constructed and remain at a fixed site only.{" "}
              </p>
              <p className="italic">TERTIARY OR SERVICE INDUSTRY</p>
              <p>
                Tertiary Industry is concerned with providing services which
                facilitate a smooth flow of goods and services. This industry
                helps in the activities of the primary and secondary industry.
                In other words, this industry provides services which support
                the activities of primary and secondary industry, that is why it
                is also known as service industry. The various type of services
                provided by tertiary industry are:
              </p>
              <ol className="px-2 space-y-2 com">
                <li>i) Transport</li>
                <li>ii) Banking</li>
                <li>iii) Insurance</li>
                <li>iv) Warehouse</li>
                <li>v) Advertising, etc.</li>
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
