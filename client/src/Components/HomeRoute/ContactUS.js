import React from "react";

function ContactUS() {
  return (
    <div className="contactUs-container">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-xl lg:text-3xl mt-2 lg:mt-8">
          Contact<span className="font-semibold text-white"> Baba !</span>
        </h2>
        <h1 className="text-2xl lg:text-5xl font-light py-2 lg:py-4 lg:mb-4">
          We're here to help
        </h1>
      </div>
      <div className="lg:flex justify-evenly items-center text-center ">
        <div className="flex-1">
          <h1 className="text-xl py-2 lg:py-4 lg:text-3xl underline lg:no-underline">
            Call Us
          </h1>
          <p className="lg:text-xl">1800-XXX-XXXX</p>
        </div>
        <div className=" flex-1 lg:border-l-2 lg:border-r-2 lg:px-12">
          <h1 className="py-2 text-xl lg:py-4 lg:text-3xl underline lg:no-underline">
            Mail Us
          </h1>
          <p className="lg:text-xl">hello@iventorsinitiatives.com</p>
        </div>
        <div className="flex-1">
          <h1 className="py-2 text-xl lg:py-4 lg:text-3xl underline lg:no-underline">
            Address
          </h1>
          <p className="mx-8 lg:text-xl">
            Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-2 lg:my-8">
        <form
          action=""
          className="grid grid-cols-2 gap-2 md:gap-4 w-1/2 md:w-1/3 lg:w-1/4 text-black"
        >
          <input
            type="text"
            placeholder="First Name"
            className="p-2 rounded col-start-1 col-end-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 rounded col-start-2 col-end-3"
          />
          <input
            type="email"
            placeholder="Work Email"
            className="p-2 rounded col-start-1 col-end-3"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="p-2 rounded col-start-1 col-end-3"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-2 rounded col-start-1 col-end-3"
          />
          <input
            type="text"
            placeholder="Description"
            className="p-2 rounded col-start-1 col-end-3"
          />
        </form>
      </div>
      <div className="flex justify-center">
        <button className="py-2 px-8 rounded-md my-2 lg:my-8 text-black text-lg md:text-xl bg-white border-none shadow-none">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactUS;
