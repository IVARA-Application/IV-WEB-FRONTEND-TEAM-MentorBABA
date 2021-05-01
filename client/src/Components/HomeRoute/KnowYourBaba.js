import React from "react";
import Mentor1 from "../../img/Mentor1.png";
import Mentor2 from "../../img/Mentor2.jpeg";
import Mentor3 from "../../img/Mentor3.jpeg";
import Mentor4 from "../../img/Mentor4.jpg";
import Mentor5 from "../../img/Mentor5.jpg";
import Mentor6 from "../../img/Mentor6.jpg";

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
          <span className="hidden rectangle"></span>
          <img
            src={Mentor5}
            className="object-contain w-4/5 h-auto rounded pb-2"
            alt=""
          />
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
      <div className="meet-the-team pb-4">
        <h1 className="text-center text-3xl lg:text-5xl py-6 lg:py-12">
          <span>Meet</span> The Team
        </h1>
        <span className="hidden xl:block line"></span>
        <div className="flex md:flex-row flex-wrap gap-6 items-center justify-center lg:py-8">
          <a href="https://www.linkedin.com/in/dwivedivyansh">
            <div className="kyb1 kybimg">
              <img
                src={Mentor1}
                className="object-contain w-48 rounded"
                alt=""
              />
              <div class="overlay rounded">
                <div class="text">Divyansh Dwivedi</div>
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/aditi-mishra-b123641a">
            <div className="kyb1 kybimg">
              <img
                src={Mentor2}
                className="object-contain w-40 rounded"
                alt=""
              />
              <div class="overlay rounded">
                <div class="text">Aditi Mishra</div>
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/tarun-bharadwaj-a83a02172">
            <div className="kyb1 kybimg">
              <img
                src={Mentor3}
                className="object-contain w-48 rounded"
                alt=""
              />
              <div class="overlay rounded">
                <div class="text">Tarun Bharadwaj</div>
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/barath-kumar-b-09062000">
            <div className="kyb1 kybimg">
              <img
                src={Mentor4}
                className="object-contain w-32 h-48 rounded"
                alt=""
              />
              <div class="overlay rounded">
                <div class="text">Barath Kumar</div>
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/tanishk-singh-722ab21b3">
            <div className="kyb1 kybimg">
              <img
                src={Mentor6}
                className="object-contain w-48 rounded"
                alt=""
              />
              <div class="overlay rounded">
                <div class="text">Tanishk Singh</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default KnowYourBaba;
