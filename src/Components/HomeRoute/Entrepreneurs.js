import React from "react";
import img from "../../img/rights.png";
import entre from "../../img/entre.png";

function Entrepreneurs() {
  return (
    <div className="Entre-container flex flex-col lg:mx-20 h-full m-4 lg:mt-8">
      <div>
        <h1 className=" lg:text-center text-2xl lg:text-5xl lg:pb-20">
          By entrepreneurs For entrepreneurs
        </h1>
      </div>
      <div className="flex flex-col md:flex-row lg:py-8 lg:mx-32 items-center justify-between">
        <p className="text-xl my-4 lg:text-2xl flex-1">
          MentorBaba, helps young entrepreneurs to explore and learn more about
          the Start-Up culture. Right from the first step of registering their
          start-ups, to investment and then the big launch, we help the
          start-ups to achieve it all.
        </p>
        <div>
          <img src={img} className="md:px-2 md:pl-8" alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:py-8 lg:mx-32 items-center justify-between">
        <p className="text-xl my-4 lg:text-2xl flex-1">
          MentorBaba, helps them up-skilling in entrepreneurial skills and in
          building the right team,which is driven by hard-work, motivation and
          an urge to succeed.
        </p>
        <div>
          <img src={img} className=" flex-1 md:px-2 md:pl-8" alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:py-8 lg:mx-32 items-center justify-between">
        <p className="text-xl my-4 lg:text-2xl flex-1">
          Mentors at MentorBaba, coach the new founders with the ability to
          pitch, to make pitch decks,to market their product and to plan their
          business model. We also connect them with the right investor too!
        </p>
        <div>
          <img src={img} className="flex-1 md:px-2 md:pl-8" alt="" />
        </div>
      </div>
      <img src={entre} className="w-full py-4 lg:pt-9" alt="" />
    </div>
  );
}

export default Entrepreneurs;
