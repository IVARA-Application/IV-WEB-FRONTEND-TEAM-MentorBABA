import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import axios from "axios";
import ProfileBar from "./profileBar";
import LinkPanel from "./linkPanel";

export default function Feed() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [linksState, setLinksState] = useState(false);
  const [rowLength, setRowLength] = useState(4);
  const [userData, setUserData] = useState({});
  const [errorText, setErrorText] = useState("Loading...");
  const [feeds, setFeeds] = useState([
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam metus, tincidunt ac fermentum id, consequat porttitor sem. Aliquam et gravida elit. Proin mauris tortor, scelerisque in ultricies et, posuere ac tellus. Quisque pellentesque libero magna, at sollicitudin enim aliquet et. Nulla quis tellus laoreet, molestie sapien vel, dignissim turpis. Suspendisse nec ligula sem. Praesent ut sagittis turpis, non facilisis risus. Praesent metus elit, molestie scelerisque dignissim at, aliquet condimentum enim. Nulla consectetur leo sapien, non lacinia ipsum pulvinar vel. Nam vestibulum neque id nunc pretium, quis consequat tellus suscipit. Ut rhoncus, nisl sed lobortis mollis, nisl sapien tempus tellus, vel efficitur purus turpis a mauris. Nulla placerat augue quis semper aliquam. Suspendisse hendrerit ante eget nisl consequat finibus et at ante. Nulla pretium scelerisque eros ut finibus. In egestas bibendum risus sed aliquam.",
      author: "B Barat",
      profilePic: "https://www.w3schools.com/css/pineapple.jpg",
    },
    {
      content:
        "Sed varius commodo massa. Proin at mollis eros. Nulla viverra elit id enim pretium, feugiat placerat leo scelerisque. Pellentesque tempor aliquam dolor. Maecenas quis sodales velit. Nullam suscipit pellentesque leo quis molestie. Praesent gravida pellentesque aliquam. Suspendisse mollis enim et ex posuere, non mattis odio pulvinar. Donec a nunc lobortis, iaculis dolor id, maximus lacus. Nullam tincidunt pulvinar auctor. Phasellus sagittis porta sem ac volutpat. Mauris nunc neque, pharetra eu risus in, tempus mattis magna. Vivamus vitae feugiat erat, eget blandit lectus. Mauris et condimentum ipsum, a pharetra purus. Sed dignissim, diam nec tincidunt molestie, odio eros luctus mauris, in molestie felis dolor id tellus.",
      author: "Tarun",
      profilePic: "https://picsum.photos/id/998/200/200",
    },
    {
      content:
        "Morbi venenatis, arcu sit amet maximus mattis, libero mi consectetur tellus, sit amet hendrerit nisi mi et leo. Quisque tempor justo libero, vitae rutrum quam volutpat sit amet. Suspendisse mattis elementum fermentum. Praesent ac fermentum ante. Donec feugiat blandit arcu, a pharetra est. Phasellus finibus orci vel nulla commodo, non eleifend lacus hendrerit. Sed nec odio vulputate, bibendum augue sit amet, facilisis orci. Mauris hendrerit eget justo ac eleifend. Fusce dignissim cursus fermentum. Nullam justo est, bibendum a libero dignissim, ullamcorper gravida arcu. Morbi eu justo nec arcu dapibus placerat. Donec eu suscipit est, vitae ultricies augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pretium venenatis interdum.",
      author: "Aditi",
      profilePic: "https://picsum.photos/id/101/200/200",
    },
  ]);

  function loadContent(event) {
    event.preventDefault();
    console.log(event.target.scrollTop, event.target.scrollHeight);
    if (event.target.scrollTop >= (event.target.scrollHeight - 600) / 2) {
      console.log("Inside Function", feeds.length);
      if (feeds.length != 4) {
        console.log("Add");
        setFeeds((feeds) => [
          ...feeds,
          {
            content:
              "Curabitur ac urna cursus, sollicitudin mi id, malesuada est. Nam elementum lectus eu felis tempor mollis. Praesent ultrices, sem laoreet congue bibendum, leo nisl vestibulum turpis, ut semper ante elit in eros. Vivamus commodo nisi nunc, nec ullamcorper nibh elementum ac. Sed ut aliquam ligula, eget faucibus eros. Quisque sed pretium risus, commodo volutpat ipsum. Aliquam eget erat molestie, tristique massa eu, lacinia ante. Sed id molestie enim. Nullam ac urna vel quam maximus molestie. Nam egestas cursus sem a sodales. Donec lacinia diam suscipit pretium rhoncus.",
            author: "Aniruddha",
            profilePic: "https://picsum.photos/id/900/200/200",
          },
        ]);
      }
    }
  }

  useEffect(() => {
    async function fetchUserProfile() {
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
        if (response.status === 403) window.location.href = "/login";
        if (response.status != 200) throw new Error("Could not fetch data");
        setUserData(response.data.data);
        const width = window.innerHeight;
        if (width < 900) setRowLength(2);
        setPageLoaded(true);
      } catch (error) {
        console.log(error);
        setErrorText(error.message);
      }
    }
    !pageLoaded && fetchUserProfile();
  }, [pageLoaded]);
  return (
    <>
      <div className={pageLoaded ? "hidden" : "block"}>
        <p className="w-full text-center mt-64 md:mt-80 lg:mt-96 text-xl animate-bounce">
          {errorText}
        </p>
      </div>
      <div className={pageLoaded ? "bg-indigo-600 block" : "hidden"}>
        <div className="p-4 grid grid-cols-12 items-center min-h-screen w-full">
          <div
            className="bg-white col-span-12 lg:col-span-9 rounded-md my-2 md:my-0 md:mx-2"
            style={{ minHeight: "96vh" }}
          >
            <ProfileBar profilePic={userData.profilePic} />
            <div
              className="w-full text-center lg:hidden text-base md:text-xl"
              onClick={() => {
                const property = document.getElementById(
                  "linkPanelForSmallScreen"
                ).style.display;
                document.getElementById(
                  "linkPanelForSmallScreen"
                ).style.display = property === "none" ? "block" : "none";
                setLinksState(!linksState);
              }}
            >
              Links{" "}
              <FaArrowDown className={linksState ? "hidden" : "inline-block"} />
              <FaArrowUp className={linksState ? "inline-block" : "hidden"} />
            </div>
            <div style={{ display: "none" }} id="linkPanelForSmallScreen">
              <LinkPanel />
            </div>
            <div className="my-4 mx-2 md:mx-8">
              <textarea
                className="w-full rounded-lg md:rounded-3xl resize-none text-base md:text-xl bg-gray-100 overflow-auto"
                rows={rowLength}
                placeholder="Write a post"
              />
            </div>
            <div
              id="feed-container"
              className="overflow-y-auto overflow-x-hidden mx-2 md:mx-8"
              style={{ height: "65vh" }}
              onScroll={(event) => {
                loadContent(event);
              }}
            >
              {feeds.map((element, index) => {
                return (
                  <div key={index} className="mb-7 md:mb-10">
                    <div className="text-lg md:text-2xl">
                      <img
                        src={element.profilePic}
                        alt="Author Profile Picture"
                        className="inline-block w-8 md:w-12 lg:w-14 rounded-full mr-1 md:mr-3 border border-black"
                      />{" "}
                      {element.author}
                    </div>
                    <p className="mt-3 mb-2 md:mb-3 md:text-xl">
                      {element.content}
                    </p>

                    <div className="text-2xl md:text-3xl ">
                      <AiFillLike
                        className="hidden mr-2 md:mr-4 cursor-pointer"
                        title="Unlike this post"
                        id={`unlike-icon${index}`}
                        onClick={(event) => {
                          document.getElementById(
                            `unlike-icon${index}`
                          ).style.display = "none";
                          document.getElementById(
                            `like-icon${index}`
                          ).style.display = "inline-block";
                        }}
                      />
                      <BiLike
                        className="inline-block mr-2 md:mr-4 cursor-pointer"
                        title="Like this post"
                        id={`like-icon${index}`}
                        onClick={(event) => {
                          document.getElementById(
                            `like-icon${index}`
                          ).style.display = "none";
                          document.getElementById(
                            `unlike-icon${index}`
                          ).style.display = "inline-block";
                        }}
                      />
                      <BsChatDots
                        className="inline-block mr-2 md:mr-4 cursor-pointer"
                        title="Comment on this post"
                      />
                      <RiShareForwardLine
                        className="inline-block cursor-pointer"
                        title="Share this post"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="bg-white hidden lg:block lg:col-span-3 rounded-md my-2 md:my-0 md:mx-2"
            style={{ minHeight: "96vh" }}
          >
            <LinkPanel />
          </div>
        </div>
      </div>
    </>
  );
}
