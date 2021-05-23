import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Notification(props) {
  const [notificationsLoaded, setNotificationsLoaded] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [containerScrollLength, setContainerScrollLength] = useState(0);
  const [shouldLoadNotifications, setShouldLoadNotifications] = useState(false);
  async function loadContent(event) {
    event.preventDefault();
    if (event.target.scrollHeight !== containerScrollLength) {
      try {
        const response = await axios.get(
          `https://1qfcnu37he.execute-api.ap-south-1.amazonaws.com/latest/feed?set=${notifications.length}`,
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
        setShouldLoadNotifications(true);
        setNotifications((notifications) => [
          ...notifications,
          ...response.data.data,
        ]);
      } catch (error) {
        console.error(error);
      }
    }
  }
  useEffect(() => {
    async function loadNotifications() {
      try {
        const response = await axios.get(
          `https://1qfcnu37he.execute-api.ap-south-1.amazonaws.com/latest/notification`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
            validateStatus: function (status) {
              return status >= 200 && status < 404;
            },
          }
        );
        if (response.status === 403) return (window.location.href = "/login");
        setNotificationsLoaded(true);
        setContainerScrollLength(
          document.getElementById("notification-container").scrollHeight
        );
        setNotifications(response.data.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    !notificationsLoaded && loadNotifications();
  });
  return (
    <dialog
      className="mx-auto h-2/3 mt-20 p-8 md:p-10 w-10/12 md:w-2/3 lg:w-3/5 border-4 border-gray-600 rounded-md overflow-x-hidden overflow-y-auto text-center"
      open={props.open}
      id="notification-dialog"
    >
      {" "}
      <AiOutlineCloseCircle
        className="float-right text-xl md:text-2xl lg:text-3xl cursor-pointer"
        title="Close this list"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("notification-dialog").close();
          props.onOpenChange();
        }}
      />
      <div
        id="notification-container"
        className="overflow-y-auto overflow-x-hidden mt-10"
        onScroll={(event) => {
          if (
            event.target.scrollTop >= (event.target.scrollHeight - 600) / 2 &&
            shouldLoadNotifications
          ) {
            setShouldLoadNotifications(false);
            loadContent(event);
          }
        }}
      >
        {notifications.map((element, index) => {
          return (
            <table className="w-full my-4">
              <tr
                key={index}
                className="text-left bg-gray-100 text-base md:text-xl w-full"
              >
                <td className="w-3/12 lg:w-1/12 text-center">
                  <img
                    className="w-8 inline-block mx-auto"
                    src={element.profilePic}
                  />
                </td>
                <td className="p-4 rounded-xl rounded-l-none">
                  {element.message}
                </td>
              </tr>
            </table>
          );
        })}
      </div>
    </dialog>
  );
}
