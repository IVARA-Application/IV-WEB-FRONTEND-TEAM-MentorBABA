import React from "react";
import * as FaIcons from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className=" block lg:flex lg:justify-around">
        <div className=" flex justify-center items-center flex-col flex-1">
          <h1 className="text-lg md:text-2xl text-center xl:text-left md:tracking-wide md:leading-8">
            Mon - fri: 10:00 - 17:00 <br /> Closed on Weekends
          </h1>
          <h1 className="text-lg md:text-2xl text-center xl:text-left my-4 lg:mt-12  md:tracking-wide md:leading-8">
            Connect with us through <br /> WhatsApp at 24 x 7
          </h1>
        </div>
        <div className="flex-1  lg:border-solid lg:border-white lg:border-l-2 lg:border-r-2 lg:px-8 xl:px-24 lg:my-12">
          <h1 className=" my-4 lg:my-12 text-2xl underline lg:no-underline lg:text-4xl text-center">
            Contact Us:
          </h1>
          <p className="lg:my-8 text-center text-lg lg:text-2xl">
            784-0879-398 <br />
            hello@iventorsinitiatives.com <br />
            Lucknow, India <br />
            Chennai, India
          </p>
        </div>
        <div className="text-xl lg:text-2xl text-center mt-4 lg:mt-16 flex-1 underline">
          <ul className="flex items-center justify-around lg:flex-col lg:justify-center lg:space-y-8">
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hello@iventorsinitiatives.com"
                target="_blank"
                className="hover:text-blue-500"
              >
                FAQ
              </a>
            </li>
            <li className="">Blogs</li>
            <li className="">IVARA</li>
            <li className="">Terms</li>
          </ul>
        </div>
      </div>
      <div className="block lg:flex py-2 lg:pb-4 xl:ml-28 jus">
        <ul className="flex justify-center items-center gap-4 lg:gap-10 text-xl lg:text-3xl">
          <li>
            <a
              className="hover:text-blue-500"
              href="https://www.facebook.com/mentorbaba.co/"
            >
              <FaIcons.FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-500"
              href="https://instagram.com/mentorbababyiv?igshid=zybywnq0mpsq"
            >
              <FaIcons.FaInstagram />
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-500"
              href="https://www.linkedin.com/company/mentor-baba"
            >
              <FaIcons.FaLinkedin />
            </a>
          </li>
          <li>
            <FaIcons.FaTwitter />
          </li>
        </ul>
      </div>
      <div className="text-center lg:text-2xl py-8">
        2021 IVentors Initiatives Pvt. Ltd
      </div>
    </div>
  );
}

export default Footer;
