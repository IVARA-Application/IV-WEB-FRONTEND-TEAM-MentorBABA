import React from "react";
import fb from "../../img/facebook.png";
import google from "../../img/google.png";
import linkedin from "../../img/linkedin.png";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="flex signin-container">
      <div className="left-signin w-3/5 flex flex-col items-center justify-center">
        <h1 className="text-5xl mt-24 font-bold pb-8">Sign in to MentorBaba</h1>
        <div className="signin-options flex gap-10">
          <img src={fb} alt="" />
          <img src={google} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <p className="py-10 text-xl">or use your email account:</p>
        <form className="py-2" action="">
          <input type="text" placeholder="Email" /> <br />
          <input type="password" placeholder="Password" />
        </form>
        <p className="py-10 text-2xl underline leading-3">
          Forget your password?
        </p>
        <button className="rounded-full py-2 px-20 text-2xl">Sign In</button>
      </div>
      <div className="right-signin w-2/5 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Namaste!</h1>
        <p className="py-12 text-2xl">
          Enter your personal details <br /> and start journey with us
        </p>
        <Link Link to="/CreateAccount">
          <button className="rounded-full py-2 px-20 border-2 border-white text-2xl ">
            Sign up
          </button>
        </Link>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default SignIn;
