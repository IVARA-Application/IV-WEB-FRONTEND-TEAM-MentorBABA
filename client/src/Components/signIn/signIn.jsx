import React, { useState } from "react";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import fb from "../../img/facebook.png";
import google from "../../img/google.png";
import linkedin from "../../img/linkedin.png";
import { Link } from "react-router-dom";

function SignIn() {
  const [disabled, setDisabled] = useState("");
  const [invalidCreds, setInvalidCreds] = useState("hidden");
  const [message, setMessage] = useState("Sign In");
  async function handleLoginSubmission(event) {
    event.preventDefault();

    setMessage("Please Wait");
    setDisabled("true");
    console.log("Sending...");
    try {
      const response = await axios.post(
        "https://1qfcnu37he.execute-api.ap-south-1.amazonaws.com/latest/user/login",
        {
          username: document.getElementById("email-input").value,
          password: document.getElementById("password-input").value,
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
      if (response.status === 404 || response.status === 403) {
        setInvalidCreds("block");
        setDisabled("");
        setMessage("Sign In");
        return;
      }
      if (!response.data.success) throw Error(response.data.message);
      window.localStorage.setItem("token", response.data.token);
      window.location.href = "/feed";
    } catch (error) {
      console.error(error);
      alert(error.message);
      setDisabled("");
      setMessage("Sign In");
    }
  }
  return (
    <div className="flex flex-wrap signin-container">
      <div className="left-signin w-full md:w-3/5 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl mt-4 text-center md:mt-24 font-bold pb-4 md:pb-8">
          Sign in to MentorBaba
        </h1>
        <div className="signin-options flex space-x-4 lg:space-x-8">
          <img
            className="object-contain opacity-25"
            src={linkedin}
            alt="Linkedin"
            title="Coming soon!"
          />
          <img
            className="object-contain opacity-25"
            src={google}
            alt="Google"
            title="Coming soon!"
          />
          <img
            className="object-contain opacity-25"
            src={fb}
            alt="Facebook"
            title="Coming soon!"
          />
        </div>
        <p className="py-4 lg:py-10 text-xl text-gray-600">
          or use your email account:
        </p>
        <p className={["text-red-600", invalidCreds].join(" ")}>
          Incorrect login credentials
        </p>
        <form className="lg:py-2 px-8 lg:px-0" id="login-form">
          <input
            className="rounded"
            type="text"
            placeholder="Email"
            name="email"
            id="email-input"
          />
          <br />
          <input
            className="rounded"
            type="password"
            placeholder="Password"
            name="password"
            id="password-input"
          />
        </form>
        <p className="py-10 text-lg lg:text-2xl underline leading-3">
          Forget your password?
        </p>
        <button
          className="rounded-full py-2 px-20 mb-4 lg:mb-0 text-2xl"
          onClick={handleLoginSubmission}
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
      <div className="right-signin w-full md:w-2/5 flex flex-col items-center md:justify-center">
        <h1 className="text-3xl md:text-5xl font-bold pt-2 md:pt-0">
          Namaste!
        </h1>
        <p className="py-12 text-2xl text-center">
          Enter your personal details <br /> and start journey with us
        </p>
        <Link Link to="/register">
          <button className="rounded-full py-2 px-20 border-2 border-white text-2xl ">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
