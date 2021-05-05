import React from "react";

const userData = {
  name: "Aniruddha Chatterjee",
  occupation: "Investor",
  email: "ruddha.mine@gmail.com",
  profilePic: "https://mentorbaba.s3.ap-south-1.amazonaws.com/sampleUser.jpg",
  occupation: "student",
};

const occupationValues = [
  "Investor",
  "Founder",
  "Working Professional",
  "Student",
];

export default function MakeProfile() {
  return (
    <div className="bg-indigo-600">
      <div className="p-4 flex flex-col items-center min-h-screen">
        <div
          className="bg-white w-full rounded-md"
          style={{ minHeight: "96vh" }}
        >
          <h1 className="text-center text-4xl mt-10 py-4">
            Welcome to Mentor<span className="text-baba-indigo">Baba</span>
          </h1>
          <p className="text-center my-4 text-xl">Let's get you started</p>
          <img
            className="block mx-auto mt-14 rounded-full w-24 h-24 lg:w-36 lg:h-36"
            src={userData.profilePic}
            alt="Profile Picture"
          />
          <p
            className="text-center mt-2 cursor-pointer hover:underline"
            title="Upload a new profile picture for your account"
          >
            Change your profile picture
          </p>
          <label className="text-center block mx-auto mt-10 text-lg">
            Name
          </label>
          <div className="border border-black w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded">
            <input
              className=" block w-full mx-auto text-center text-base md:text-xl"
              value={userData.name}
              type="text"
              aria-label="Name"
            />
          </div>
          <label className="text-center block mx-auto mt-5 text-lg">
            Email
          </label>
          <div className="border border-black w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded">
            <input
              className=" block w-full mx-auto text-center text-base md:text-xl"
              value={userData.email}
              type="text"
              aria-label="Name"
            />
          </div>
          <label className="text-center block mx-auto mt-5 text-lg">
            Occupation
          </label>
          <div className="border border-black w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded">
            <select
              name="occupation"
              className="text-center w-full text-base md:text-xl bg-white"
              style={{ textAlignLast: "center", padding: "8px 12px" }}
            >
              {occupationValues.map((element) => {
                return (
                  <option
                    value={element.toLowerCase()}
                    selected={element.toLowerCase() === userData.occupation}
                  >
                    {element}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="mx-auto block my-10 p-3 text-xl text-white rounded-lg">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
