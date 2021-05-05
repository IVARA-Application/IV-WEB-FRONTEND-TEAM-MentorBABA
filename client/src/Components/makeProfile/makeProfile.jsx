import React, { useState, useEffect } from "react";
import axios from "axios";

const occupationValues = [
  "Investor",
  "Founder",
  "Working Professional",
  "Student",
];

export default function MakeProfile() {
  const [buttonText, setButtonText] = useState("Continue");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorText, setErrorText] = useState("Loading...");

  async function handleProfileUpdate(event) {
    event.preventDefault();
    setButtonText("Please Wait");
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const occupation = document.getElementById("user-occupation").value;
    console.log(name, email, occupation);
    try {
      const response = await axios.put(
        `https://1qfcnu37he.execute-api.ap-south-1.amazonaws.com/latest/user/update`,
        { name, email, occupation, profilePic: userData.profilePic },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      window.location.href = "/connections";
    } catch (error) {
      console.error(error);
      alert("Opps");
      setButtonText("Continue");
    }
  }

  useEffect(() => {
    async function fetchUserProfileData() {
      try {
        const response = await axios.get(
          "https://1qfcnu37he.execute-api.ap-south-1.amazonaws.com/latest/user/profile",
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
            validateStatus: function (status) {
              return status >= 200 && status < 500;
            },
          }
        );
        if (response.status != 200) throw new Error("Could not fetch data");
        setUserData(response.data.data);
        setPageLoaded(true);
      } catch (error) {
        console.error(error);
        setErrorText(error.message);
        document.getElementsByTagName("dialog")[0].show();
      }
    }
    fetchUserProfileData();
  }, [pageLoaded]);

  return (
    <>
      <div className={pageLoaded ? "hidden" : "block"}>
        <p className="w-full text-center mt-64 md:mt-80 lg:mt-96 text-xl animate-bounce">
          {errorText}
        </p>
      </div>
      <div className={pageLoaded ? "bg-indigo-600 block" : "hidden"}>
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
              src={userData && userData.profilePic}
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
                defaultValue={userData && userData.name}
                type="text"
                aria-label="Name"
                name="name"
                id="user-name"
              />
            </div>
            <label className="text-center block mx-auto mt-5 text-lg">
              Email
            </label>
            <div className="border border-black w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded">
              <input
                className=" block w-full mx-auto text-center text-base md:text-xl"
                defaultValue={userData && userData.email}
                type="text"
                aria-label="Name"
                name="email"
                id="user-email"
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
                id="user-occupation"
              >
                {userData &&
                  occupationValues.map((element) => {
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
            <button
              className="mx-auto block my-10 p-3 text-xl text-white rounded-lg"
              disabled={buttonText !== "Continue"}
              onClick={handleProfileUpdate}
            >
              {buttonText}
            </button>
          </div>
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
                setButtonText("Continue");
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
