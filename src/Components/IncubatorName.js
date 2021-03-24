import React from "react";
import heart from "../img/heart.png";

function IncubatorName() {
  return (
    <div className="incu-name">
      <div className="w-1/2 m-auto py-8">
        <div>
          <h1 className="text-3xl ml-24 py-8">Incubator Name</h1>
        </div>
        <div className="flex flex-col items-center my-8">
          <div className="grid grid-cols-5 gap-4">
            <div className="grid grid-rows-4 gap-4 col-start-1 col-end-4">
              <textarea
                name=""
                placeholder="Description Of the StartUp"
                id=""
                cols="30"
                rows="10"
                className="row-start-1 row-end-4 p-2"
              ></textarea>
              <div className="text-center row-start-4 row-end-5">
                <div>
                  <div className="flex justify-between items-center mt-10">
                    <i class="fas fa-chevron-left"></i>
                    <img src={heart} alt="" />
                    <i class="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white col-start-4 col-end-6 flex justify-center py-4">
              <h1 className="text-gray-500 text-center">More Startups</h1>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncubatorName;
