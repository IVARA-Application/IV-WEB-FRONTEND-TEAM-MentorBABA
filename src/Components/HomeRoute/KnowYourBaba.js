import React from "react";
import kyb from "../../img/kyb.png";
import kyb1 from "../../img/kyb1.png";
import kyb3 from "../../img/kyb3.png";
import kyb4 from "../../img/kyb4.png";

function KnowYourBaba() {
  return (
    <div className="kyb-container lg:mt-16">
      <div>
        <h1 className="text-center text-3xl  lg:text-5xl my-4 lg:mb-16">
          <span>Know Your</span> Baba!
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center ">
        <div className="left-kyb kyb object-contain flex justify-center items-center flex-1">
          <span className="hidden lg:block rectangle"></span>
          <img src={kyb} alt="" />
        </div>
        <div className="right-kyb flex-1 xl:pr-40">
          <p className=" md:text-2xl lg:py-8 px-8">
            MentorBaba was ideated at IIT Gandhinagar in 2019 when Kamalesh
            Dwivedi and Krishna Kunapuli of 3Lines Venture Capital, Denver, USA
            were conducting a HyperAccelerator program for Startups. The beta
            was launched in July 2019. Now IVentors Initiatives is launching the
            production version of MentorBaba. The vision behind MentorBaba is to
            bring together the Founders, Investors and Mentors on one platform
            in India from a highly fragmented space currently and serve the
            Innovation Economy of India better.
          </p>
        </div>
      </div>
      <div className="meet-the-team">
        <h1 className="text-center text-3xl lg:text-5xl py-6 lg:py-12">
          <span>Meet</span> The Team
        </h1>
        <span className="hidden xl:block line"></span>
        <div className="flex md:flex-row flex-wrap gap-6 items-center justify-center lg:py-8">
          <img src={kyb1} alt="" />
          <img src={kyb1} alt="" />
          <img src={kyb3} alt="" />
          <img src={kyb4} alt="" />
          <img src={kyb4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default KnowYourBaba;
