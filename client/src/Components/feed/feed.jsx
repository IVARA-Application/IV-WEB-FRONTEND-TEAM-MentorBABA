import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import axios from "axios";
import ProfileBar from "./profileBar";
import LinkPanel from "./linkPanel";
import LikeList from "./likeList";

export default function Feed() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [likeListOpen, setLikeListOpen] = useState(false);
  const [likeListData, setLikeListData] = useState([]);
  const [submitButtonText, setSubmitButtonText] = useState("Submit");
  const [linksState, setLinksState] = useState(false);
  const [rowLength, setRowLength] = useState(4);
  const [containerScrollLength, setContainerScrollLength] = useState(0);
  const [shouldLoadFeed, setShouldLoadFeed] = useState(true);
  const [userData, setUserData] = useState({});
  const [errorText, setErrorText] = useState("Loading...");
  const [feeds, setFeeds] = useState([]);

  async function loadContent(event) {
    event.preventDefault();
    if (event.target.scrollHeight !== containerScrollLength) {
      try {
        const response = await axios.get(
          `https://1qfcnu37he.execute-api.ap-south-1.amazonaws.com/latest/feed?set=${feeds.length}`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
            validateStatus: function (status) {
              return status >= 200 && status < 404;
            },
          }
        );
        if (response.status === 403) window.location.href = "/login";
        setContainerScrollLength(event.target.scrollHeight);
        setShouldLoadFeed(true);
        setFeeds((feeds) => [...feeds, ...response.data.data]);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function addNewFeed() {
    try {
      const content = document.getElementById("newfeed").value;
      if (content.length === 0) throw new Error("Content is empty!");
      const response = await axios.post(
        `https://1qfcnu37he.execute-api.ap-south-1.amazonaws.com/latest/feed/add`,
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
          validateStatus: function (status) {
            return status >= 200 && status < 404;
          },
        }
      );
      if (response.status === 403) window.location.href = "/login";
      setSubmitButtonText("Posted!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert(error.message);
      setSubmitButtonText("Submit");
    }
  }

  async function toggleLikeState(feedId, operation) {
    const index = feeds.findIndex((element) => element.feedId === feedId);
    if (operation === "like") {
      feeds[index].liked = true;
      feeds[index].likes += 1;
    } else {
      feeds[index].liked = false;
      feeds[index].likes -= 1;
    }
    setFeeds((feeds) => [...feeds]);
  }

  function handleDialogCloseStateChange() {
    setLikeListOpen(false);
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
        setContainerScrollLength(
          document.getElementById("feed-container").scrollHeight
        );
        const width = window.innerHeight;
        if (width < 900) setRowLength(2);
      } catch (error) {
        console.log(error);
        setErrorText(error.message);
        throw error;
      }
    }
    async function fetchFeedData() {
      try {
        const response = await axios.get(
          "https://1qfcnu37he.execute-api.ap-south-1.amazonaws.com/latest/feed",
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
            validateStatus: function (status) {
              return status >= 200 && status < 404;
            },
          }
        );
        if (response.status === 403) window.location.href = "/login";
        if (response.status != 200) throw new Error("Could not fetch data");
        setFeeds((feeds) => [...feeds, ...response.data.data]);
      } catch (error) {
        console.log(error);
        setErrorText(error.message);
        throw error;
      }
    }
    if (!pageLoaded) {
      const promiseArray = [fetchFeedData(), fetchUserProfile()];
      Promise.all(promiseArray)
        .then(() => {
          setPageLoaded(true);
        })
        .catch(() => {});
    }
  }, [pageLoaded]);
  return (
    <>
      <div className={pageLoaded ? "hidden" : "block"}>
        <p className="w-full text-center mt-64 md:mt-80 lg:mt-96 text-xl animate-bounce">
          {errorText}
        </p>
      </div>
      <div className={pageLoaded ? "bg-indigo-600 block" : "hidden"}>
        <LikeList
          open={likeListOpen}
          data={likeListData}
          onOpenChange={handleDialogCloseStateChange}
        />
        <div className="p-4 grid grid-cols-12 items-center min-h-screen w-full">
          <div
            className="bg-white col-span-12 lg:col-span-9 rounded-md my-2 md:my-0 md:mx-2"
            style={{ minHeight: "94vh" }}
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
                id="newfeed"
              />
              <button
                className="block mx-auto bg-indigo-600 py-1 md:py-2 px-3 md:px-4 text-sm md:text-xl text-white rounded-xl"
                disabled={submitButtonText !== "Submit"}
                onClick={(event) => {
                  event.preventDefault();
                  setSubmitButtonText("Posting");
                  addNewFeed();
                }}
              >
                {submitButtonText}
              </button>
            </div>
            <div
              id="feed-container"
              className="overflow-y-auto overflow-x-hidden mx-2 md:mx-8"
              style={{ height: "58vh" }}
              onScroll={(event) => {
                if (
                  event.target.scrollTop >=
                    (event.target.scrollHeight - 600) / 2 &&
                  shouldLoadFeed
                ) {
                  setShouldLoadFeed(false);
                  loadContent(event);
                }
              }}
            >
              {feeds.map((element, index) => {
                return (
                  <div key={element.feedId} className="mb-7 md:mb-10 px-1">
                    <div className="text-lg md:text-2xl">
                      <img
                        src={element.profilePic}
                        alt="Author Profile Picture"
                        className="inline-block w-8 md:w-12 lg:w-14 rounded-full mr-1 md:mr-3 border border-black"
                      />{" "}
                      {element.author}
                    </div>
                    <p className="mt-3 mb-2 md:mb-3 md:text-xl whitespace-pre-line">
                      {element.content}
                    </p>
                    <p
                      className="cursor-pointer"
                      onClick={() => {
                        setLikeListData(element.usersLiked);
                        setLikeListOpen(true);
                      }}
                    >
                      {element.likes}{" "}
                      {element.likes === 1 ? "person likes" : "persons like"}{" "}
                      this
                    </p>
                    <div className="text-2xl md:text-3xl ">
                      <AiFillLike
                        className={[
                          "mr-2 md:mr-4 cursor-pointer",
                          element.liked ? "inline-block" : "hidden",
                        ].join(" ")}
                        title="Unlike this post"
                        id={`unlike-icon${index}`}
                        onClick={() => {
                          document.getElementById(
                            `unlike-icon${index}`
                          ).style.display = "none";
                          document.getElementById(
                            `like-icon${index}`
                          ).style.display = "inline-block";
                          element.usersLiked.pop();
                          toggleLikeState(element.feedId, "unlike");
                        }}
                      />
                      <BiLike
                        className={[
                          "mr-2 md:mr-4 cursor-pointer",
                          !element.liked ? "inline-block" : "hidden",
                        ].join(" ")}
                        title="Like this post"
                        id={`like-icon${index}`}
                        onClick={() => {
                          document.getElementById(
                            `like-icon${index}`
                          ).style.display = "none";
                          document.getElementById(
                            `unlike-icon${index}`
                          ).style.display = "inline-block";
                          console.log(userData);
                          element.usersLiked.push({
                            name: userData.name,
                            profilePic: userData.profilePic,
                          });
                          toggleLikeState(element.feedId, "like");
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
            style={{ minHeight: "94vh" }}
          >
            <LinkPanel />
          </div>
        </div>
      </div>
    </>
  );
}
