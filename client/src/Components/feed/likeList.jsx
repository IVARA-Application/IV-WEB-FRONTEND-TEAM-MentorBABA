import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function LikeList(props) {
  if (props.data.length !== 0)
    return (
      <dialog
        className="mx-auto h-2/3 mt-20 p-8 md:p-10 w-10/12 md:w-1/2 lg:w-2/5 border-4 border-gray-600 rounded-md overflow-x-hidden overflow-y-auto"
        open={props.open}
      >
        <AiOutlineCloseCircle
          className="float-right text-xl md:text-2xl lg:text-3xl cursor-pointer"
          title="Close this list"
          onClick={(event) => {
            event.preventDefault();
            document.getElementsByTagName("dialog")[0].close();
            props.onOpenChange();
          }}
        />
        {props.data.map((element, index) => {
          return (
            <div key={index} className="my-2">
              <img
                src={element.profilePic}
                alt="User Profile"
                className="inline-block w-10 md:w-12 lg:w-14"
              />
              <p className="inline-block pl-2 lg:pl-4 text-base md:text-xl lg:text-2xl">
                {element.name}
              </p>
            </div>
          );
        })}
      </dialog>
    );
  else
    return (
      <dialog
        className="mx-auto h-2/3 mt-20 p-8 md:p-10 w-10/12 md:w-1/2 lg:w-2/5 border-4 border-gray-600 rounded-md overflow-x-hidden overflow-y-auto text-center"
        open={props.open}
      >
        {" "}
        <AiOutlineCloseCircle
          className="float-right text-xl md:text-2xl lg:text-3xl cursor-pointer"
          title="Close this list"
          onClick={(event) => {
            event.preventDefault();
            event.target.parentElement.close();
            props.onOpenChange();
          }}
        />
        <p className="mt-10 text-base md:text-xl lg:text-2xl">
          No users have liked this post. <br />
          <br /> Be the first one to do so!
        </p>
      </dialog>
    );
}
