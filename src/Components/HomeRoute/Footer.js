import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className=" flex justify-around">
        <div className="">
          <h1 className="text-2xl mt-24 text-left tracking-wide leading-8">
            Mon - fri: 10:00 - 17:00 <br /> Closed on Weekends
          </h1>
          <h1 className="text-2xl my-8 mt-12 tracking-wide leading-8">
            Connect with us through <br /> WhatsApp at 24 x 7
          </h1>
        </div>
        <div className="border-solid border-white border-l-2 border-r-2 px-24 my-12">
          <h1 className="my-12 text-4xl text-center">Contact Us: </h1>
          <p className="my-8  text-center text-2xl">
            1800-xxxx-xxx <br />
            hello@iventorsinitiatives.com <br />
            Uttar Pradesh, India
          </p>
        </div>
        <div className="text-2xl text-center mt-16">
          <ul className="">
            <li className="border-solid border-b-2 border-white my-8">FAQ</li>
            <li className="border-solid border-b-2 border-white my-8">Blogs</li>
            <li className="border-solid border-b-2 border-white my-8">IVARA</li>
            <li className="border-solid border-b-2 border-white my-8">Terms</li>
          </ul>
        </div>
      </div>

      <div className="flex pb-14 ml-28 items-center gap-24">
        <ul className="flex gap-10 text-3xl ml-16">
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

        <div className="text-center text-2xl ml-96">
          2021 IVentors Initiatives Pvt. Ltd
        </div>
      </div>
    </div>
  );
}

export default Footer;
