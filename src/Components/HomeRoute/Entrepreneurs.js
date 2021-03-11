import React from "react";
import img from "../../img/rights.png";
import entre from "../../img/entre.png";

function Entrepreneurs() {
  return (
    <div className="Entre-container flex flex-col mx-20 h-full mt-8">
      <div>
        <h1 className="text-center text-5xl pb-20">
          By entrepreneurs For entrepreneurs
        </h1>
      </div>
      <div className="flex py-8 mx-32 items-center">
        <p className="text-2xl mr-96">
          MentorBaba, helps young entrepreneurs to explore and learn more about
          the Start-Up culture. Right from the first step of registering their
          start-ups, to investment and then the big launch, we help the
          start-ups to achieve it all.
        </p>
        <div>
          <img src={img} className="max-w-none" alt="" />
        </div>
      </div>
      <div className="flex py-8 mx-32 items-center">
        <p className="text-2xl mr-96">
          MentorBaba, helps them up-skilling in entrepreneurial skills and in
          building the right team,which is driven by hard-work, motivation and
          an urge to succeed.
        </p>
        <div>
          <img src={img} className="max-w-none" alt="" />
        </div>
      </div>
      <div className="flex py-8 mx-32 items-center">
        <p className="text-2xl mr-96">
          Mentors at MentorBaba, coach the new founders with the ability to
          pitch, to make pitch decks,to market their product and to plan their
          business model. We also connect them with the right investor too!
        </p>
        <div>
          <img src={img} className="max-w-none" alt="" />
        </div>
      </div>
      <img src={entre} className="mx-32 pt-9" alt="" />
    </div>
  );
}

export default Entrepreneurs;
