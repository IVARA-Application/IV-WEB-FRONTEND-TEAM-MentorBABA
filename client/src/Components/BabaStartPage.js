import React from "react";
import img from "../img/groww.jpeg";
import zomato from "../img/Zomato.png";
import swiggy from "../img/Swiggy.png";
import dunzo from "../img/Dunzo.png";
import search from "../img/Search.png";

function BabaStartPage() {
  return (
    <div className="bsp-container lg:min-h-screen">
      <div>
        <h1 className="text-3xl md:text-5xl text-center py-8">
          <span>Baba</span>Start
        </h1>
      </div>
      <div className="w-3/4 m-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-8">
          <div className="flex md:col-start-1 md:col-end-3 xl:col-start-1 xl:col-end-4 w-full">
            <input
              type="text"
              placeholder="Search"
              className="rounded-l-xl lg:px-8 pr-8 w-full shadow-md"
            />
            <button className="text-white bg-gray-700 rounded-r-xl px-4 py-2 shadow-none">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <select className="text-white text-xl bg-gray-700 rounded-xl px-4 py-2 md:col-start-4 md:col-end-5 shadow-none">
            <option defaultValue>Domain</option>
            <option value="">Newspapers</option>
            <option value="">Non-profit Organization Management</option>
            <option value="">Oil & Energy</option>
            <option value="">Online Media</option>
            <option value="">outsourcing / Offshoring</option>
            <option value="">Package / Freight Delivery</option>
            <option value="">Packaging & Containers</option>
            <option value="">Paper & Forest Products</option>
            <option value="">Performing Arts</option>
            <option value="">Pharmaceuticals</option>
            <option value="">Philanthropy</option>
            <option value="">Photography</option>
            <option value="">Plastics</option>
            <option value="">Political Organization</option>
            <option value="">Primary/Secondary Education</option>
            <option value="">Printing</option>
            <option value="">Professional Training & Coaching</option>
            <option value="">Program Development</option>
            <option value="">Public Policy</option>
            <option value="">Public Relations & Communications</option>
            <option value="">Public Safety</option>
            <option value="">Publishing</option>
            <option value="">Railroad manufacture</option>
            <option value="">Ranching</option>
            <option value="">Real Estate</option>
            <option value="">Recreational Facilities & Services</option>
            <option value="">Religious Institutions</option>
            <option value="">Renewable & Environment</option>
            <option value="">Research</option>
            <option value="">Restaurants</option>
            <option value="">Retail</option>
            <option value="">Security & Investigations</option>
            <option value="">Semiconductors</option>
            <option value="">Shipbuilding</option>
            <option value="">Sporting Goods</option>
            <option value="">Sports</option>
            <option value="">Staffing & Recruiting</option>
            <option value="">Supermarkets</option>
            <option value="">Telecommunications</option>
            <option value="">Textiles</option>
            <option value="">Think tanks</option>
            <option value="">Tobacco</option>
            <option value="">Translation & Localization</option>
            <option value="">Transportation/Trucking/Railroad</option>
            <option value="">Utilities</option>
            <option value="">Venture Capital & Private equity</option>
            <option value="">Veterinary</option>
            <option value="">Warehousing</option>
            <option value="">Wholesale</option>
            <option value="">Wine & Spirits</option>
            <option value="">Wireless</option>
            <option value="">Writing & Editing</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center mt-8 w-3/4 m-auto">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 w-full">
          <div className="md:flex col-start-1 col-end-2 xl:col-start-1 xl:col-end-4">
            <img className="rounded" src={img} alt="" width="500rem" />
            <div className="startup rounded md:rounded-r-2xl text-xl md:text-2xl flex justify-center items-center">
              <h1 className="p-2">StartUp of the Week</h1>
            </div>
          </div>
          <div className="bg-white options rounded-2xl">
            <p className="text-center md:text-xl my-2 2xl:mb-8">Options</p>
            <form action="" className="flex flex-col p-4">
              <input
                type="text"
                placeholder="State"
                className="my-2 py-4 px-2 bg-gray-100 rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="my-2 py-4 px-2 bg-gray-100 rounded"
              />
            </form>
          </div>
        </div>
      </div>
      <h1 className="text-center text-xl md:text-2xl py-8 md:font-semibold text-white">
        Famous Startups of India
      </h1>
      <div className="w-3/4 m-auto">
        <div
          className="grid grid-cols-2
           lg:grid-cols-4"
        >
          <img
            className="lg:col-start-1 lg:col-end-2 w-full"
            src={zomato}
            alt=""
          />
          <img
            className="lg:col-start-2 lg:col-end-3 w-full"
            src={swiggy}
            alt=""
          />
          <img
            className="lg:col-start-3 lg:col-end-4 w-full"
            src={dunzo}
            alt=""
          />
          <img
            className="lg:col-start-4 lg:col-end-5 w-full"
            src={search}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default BabaStartPage;
