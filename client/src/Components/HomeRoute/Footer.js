import React from "react";

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
            1800-xxxx-xxx <br />
            hello@iventorsinitiatives.com <br />
            Uttar Pradesh, India
          </p>
        </div>
        <div className="text-xl lg:text-2xl text-center mt-4 lg:mt-16 flex-1 underline">
          <ul className="">
            <li>FAQ</li>
            <li className="my-2 lg:my-8">Blogs</li>
            <li className="my-2 lg:my-8">IVARA</li>
            <li className="my-2 lg:my-8">Terms</li>
          </ul>
        </div>
      </div>
      <div className="block lg:flex py-2 lg:pb-4 xl:ml-28 justify-evenly">
        <ul className="flex justify-center items-center gap-4 lg:gap-10 text-xl lg:text-3xl">
          <li>
            <i class="fab fa-facebook"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
          <li>
            <i class="fab fa-linkedin-in"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
        </ul>

        <div className="text-center lg:text-2xl my-4 lg:ml-96">
          2021 IVentors Initiatives Pvt. Ltd
        </div>
      </div>
    </div>
  );
}

export default Footer;