import React, { useState } from "react";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import fb from "../../img/facebook.png";
import google from "../../img/google.png";
import linkedin from "../../img/linkedin.png";
import { Link } from "react-router-dom";

const occupationValues = [
  "Investor",
  "Founder",
  "Working Professional",
  "Student",
];

export default function SignUp() {
  const [disabled, setDisabled] = useState("");
  const [errorText, setErrorText] = useState("Unknown");
  const [message, setMessage] = useState("Sign Up");

  async function handleRegisterSubmission(event) {
    event.preventDefault();
    setMessage("Please Wait");
    setDisabled("true");
    try {
      const response = await axios.post(
        "https://1qfcnu37he.execute-api.ap-south-1.amazonaws.com/latest/user/register",
        {
          name: document.getElementById("name-input").value,
          email: document.getElementById("email-input").value,
          password: document.getElementById("password-input").value,
          occupation: document.getElementById("occupation-input").value,
          phone: document.getElementById("phone-input").value,
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
      window.localStorage.setItem("token", response.data.token);
      window.location.href = "/makeprofile";
    } catch (error) {
      console.error(error);
      setErrorText(error.message);
      document.getElementsByTagName("dialog")[0].show();
    }
  }

  return (
    <>
      <div className="flex flex-wrap createacc-container">
        <div className="left-createacc w-full md:w-2/5 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Namaste!</h1>
          <p className="py-12 text-2xl text-center">
            To keep connected with us please <br /> login with your personal
            info
          </p>
          <Link to="/login">
            <button className="rounded-full py-2 px-20 border-2 border-white text-2xl ">
              Sign in
            </button>
          </Link>
        </div>
        <div className="right-createacc w-full md:w-3/5 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl mt-12 font-bold pb-8">
            Create Account
          </h1>
          <div className="signin-options flex space-x-4 lg:space-x-8">
            <img
              className="object-contain opacity-25"
              src={google}
              alt="Google"
              title="Coming soon!"
            />
            <img
              className="object-contain opacity-25"
              src={linkedin}
              alt="LinkedIn"
              title="Coming soon!"
            />
            <img
              className="object-contain opacity-25"
              src={fb}
              alt="Facebook"
              title="Coming soon!"
            />
          </div>
          <p className="py-10 text-xl">or use your email for registration</p>
          <form className="py-2 flex flex-col px-4 md:px-0">
            <input
              className="my-3"
              type="text"
              placeholder="Name"
              id="name-input"
              required
            />{" "}
            <input
              className="my-3"
              type="email"
              placeholder="Email"
              id="email-input"
              required
            />
            <input
              type="password"
              className="my-3"
              placeholder="Password"
              id="password-input"
              required
            />
            <select
              className="py-2 text-gray-500 text-xl border-none w-full my-3"
              id="occupation-input"
            >
              {occupationValues.map((element) => {
                return <option value={element.toLowerCase()}>{element}</option>;
              })}
            </select>
            <input
              type="text"
              className="my-3"
              placeholder="Phone Number"
              id="phone-input"
              required
            />
          </form>
          <button
            className="rounded-full py-2 px-20 text-2xl my-4"
            onClick={handleRegisterSubmission}
            disabled={disabled}
          >
            {message}
          </button>
          <p
            className="my-1 lg:mt-4 text-base md:text-xl cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              window.location.href = "/";
            }}
          >
            <BiArrowBack className="inline-block" /> Back to Home
          </p>
        </div>
        <dialog className="z-10 mt-60 mx-auto border border-black">
          <div className="p-10 text-center">
            <p>There was some problem while registering you. Please retry.</p>
            <p>Error: {errorText}</p>
            <br />
            <button
              className="border border-base-primary bg-base-primary text-white p-2 text-center block mx-auto"
              onClick={(event) => {
                event.preventDefault();
                setMessage("Sign Up");
                setDisabled("");
                document.getElementsByTagName("dialog")[0].close();
              }}
            >
              Close
            </button>
          </div>
        </dialog>
      </div>
    </>
  );
}
