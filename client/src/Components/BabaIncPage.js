import React from "react";

function BabaIncPage() {
  return (
    <div className="babainc-container flex flex-col items-center">
      <div className="text-white p-4 flex flex-col items-center text-center">
        <h1 className="text-5xl">
          Baba<span className="text-black">Inc</span>
        </h1>
        <h2 className="text-xl md:text-3xl py-4">
          Register your company, <br />
          get a trademark and lot more
        </h2>
        <p className="lg:w-1/2 px-4 text-center m-auto text-md md:text-xl">
          In order to launch the venture, an entrepreneur needs to incorporate
          his/her business entity, be it proprietorship firm,partnership, LLP or
          pvt ltd company. They also need to fulfill other regulatory
          compliances while opening their bank accounts and running business
          operations. They may need to go for applying trade or service marks
          for their products or services. As a one hop solution for
          entrepreneurs, mentorBaba will offer these services under our
          sub-brand called BabaInc.
        </p>
      </div>
      <div>
        <h1 className="text-white text-3xl py-4">Our Services</h1>
      </div>
      <div className="babainc-bottom-container flex flex-wrap w-4/5 xl:w-2/4 m-auto rounded-xl justify-around mb-12">
        <div className="left-babainc px-4 flex-1 md:border-r-2 border-black">
          <h1 className="py-4">Business Registrations</h1>
          <div className="py-2">
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Private Limited Company</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Limited Liability Partnership</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>One Person Company</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Partnership Firm</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Proprietorship Firm</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Nidhi Company</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Producer Company</p>
            </div>
          </div>
          <h1>Copyright & patent</h1>
          <div className="py-2">
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Copyright Registration</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Provisional Patent</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Patent</p>
            </div>
          </div>
        </div>
        <div className="right-babainc px-4 flex-1">
          <h1 className="py-4">Business Registrations</h1>
          <div className="py-2">
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Investor Pitch Deck Preparation</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Logo design and Branding</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Website Design</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Explainer Video Creation</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Mobile Application Design</p>
            </div>
          </div>
          <h1>Business Registrations</h1>
          <div className="py-2">
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Trademark Registration</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Trademark Objection</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Trademark Assignment</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Trademark Renewal</p>
            </div>
            <div className="bg-gray-200 p-2 my-2 rounded">
              <p>Trademark Watch</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-white rounded-2xl p-2 px-8 mb-4 text-xl"
        onClick={() => {
          window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLSfPEHdW4pLsNz9AvgSkeaPF8CQ5spa9lA5hpyCkWLiRV4DNog/viewform?usp=sf_link";
        }}
      >
        Apply Here
      </button>
    </div>
  );
}

export default BabaIncPage;
