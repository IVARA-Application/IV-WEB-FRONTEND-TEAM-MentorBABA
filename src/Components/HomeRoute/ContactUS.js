import React from "react";

function ContactUS() {
  return (
    <div className="contactUs-container">
      <div className="flex items-center justify-center flex-col">
        <h2 className=" text-3xl mt-8">
          Contact<span className="font-semibold text-white"> Baba !</span>
        </h2>
        <h1 className="text-5xl font-light py-4 mb-4">We're here to help</h1>
      </div>
      <div className="flex justify-evenly text-center w-4/5 m-auto">
        <div className="flex-1">
          <h1 className="py-4 text-3xl">Call Us</h1>
          <p className="text-xl">1800-XXX-XXXX</p>
        </div>
        <div className="border-l-2 border-r-2 px-12">
          <h1 className="py-4 text-3xl">Mail Us</h1>
          <p className="text-xl">hello@metorbaba.co</p>
        </div>
        <div className="flex-1">
          <h1 className="py-4 text-3xl">Address</h1>
          <p className="mx-8 text-xl">
            Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <form action="" className="grid grid-cols-1 gap-4 w-1/4 text-black">
          <span className="grid grid-cols-2 gap-2 text-black">
            <input
              type="text"
              placeholder="First Name"
              className="p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 rounded"
            />
          </span>
          <input
            type="email"
            placeholder="Work Email"
            className="p-2 rounded"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="p-2 rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-2 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            className="p-2 rounded"
          />
        </form>
      </div>
      <div className="flex justify-center">
        <button className="py-2 px-8 rounded-xl my-8 text-black text-xl bg-white border-none shadow-none">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactUS;
