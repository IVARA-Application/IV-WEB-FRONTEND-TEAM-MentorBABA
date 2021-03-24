import React from "react";
import fb from "../img/facebook.png";
import google from "../img/google.png";
import linkedin from "../img/linkedin.png";
import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div className="flex flex-wrap createacc-container">
      <div className="left-createacc w-full md:w-2/5 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Namaste!</h1>
        <p className="py-12 text-2xl text-center">
          To keep connected with us please <br /> login with your personal info
        </p>
        <Link to="/login">
          <button className="rounded-full py-2 px-20 border-2 border-white text-2xl ">
            Sign in
          </button>
        </Link>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="right-createacc w-full md:w-3/5 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl mt-12 font-bold pb-8">
          Create Account
        </h1>
        <div className="signin-options flex space-x-4 lg:space-x-8">
          <img src={fb} alt="" />
          <img src={google} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <p className="py-10 text-xl">or use your email for registration</p>
        <form className="py-2 flex flex-col px-4 md:px-0" action="">
          <input type="text" placeholder="Name" /> <br />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <select className="py-2 text-gray-500 text-xl border-none w-full">
            <option defaultValue>Occupation</option>
            <option value="teacher">teacher</option>
          </select>
          <input type="text" placeholder="Phone Number" />
        </form>
        <p className="py-10 text-2xl underline leading-3">
          Forget your password?
        </p>
        <button className="rounded-full py-2 px-20 text-2xl mb-4">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
