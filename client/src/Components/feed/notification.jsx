import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Notification(props) {
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
      <p className="mt-10 text-base md:text-xl lg:text-2xl">Hello</p>
    </dialog>
  );
}
