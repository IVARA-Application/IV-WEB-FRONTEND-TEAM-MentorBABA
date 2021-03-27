import React, { useState } from "react";
import axios from "axios";

function ContactUS() {
  const [disabled, setDisabled] = useState("");
  const [message, setMessage] = useState("Submit");
  async function handleContactSubmission(event) {
    event.preventDefault();
    setMessage("Please Wait");
    setDisabled("true");
    console.log("Sending request...");
    try {
      const response = await axios.post(
        "https://vkrx5omg34.execute-api.ap-south-1.amazonaws.com/latest/contactus",
        {
          firstName: document.getElementById("fname-input").value,
          lastName: document.getElementById("lname-input").value,
          companyName: document.getElementById("company-input").value,
          phoneNumber: document.getElementById("phone-input").value,
          description: document.getElementById("description-input").value,
          workEmail: document.getElementById("work-input").value,
        },
        {
          validateStatus: function (status) {
            return status >= 200 && status < 500;
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.data.success) throw Error(response.data.message);
      alert("Thank you for contacting us. We will get in touch with you soon!");
      setDisabled("");
      setMessage("Submit");
    } catch (error) {
      console.error(error);
      alert(error.message);
      setDisabled("");
      setMessage("Submit");
    }
  }

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
            id="fname-input"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 rounded col-start-2 col-end-3"
            id="lname-input"
            required
          />
          <input
            type="email"
            placeholder="Work Email"
            className="p-2 rounded col-start-1 col-end-3"
            id="work-input"
            required
          />
          <input
            type="text"
            placeholder="Company Name"
            className="p-2 rounded col-start-1 col-end-3"
            id="company-input"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-2 rounded col-start-1 col-end-3"
            id="phone-input"
            required
          />
          <input
            type="text"
            placeholder="Description"
            className="p-2 rounded col-start-1 col-end-3"
            id="description-input"
            required
          />
        </form>
      </div>
      <div className="flex justify-center">
        <button
          className="py-2 px-8 rounded-md my-2 lg:my-8 text-black text-lg md:text-xl bg-white border-none shadow-none"
          onClick={handleContactSubmission}
          disabled={disabled}
        >
          {message}
        </button>
      </div>
    </div>
  );
}

export default ContactUS;
