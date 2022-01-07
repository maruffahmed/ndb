import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

function Subscribe(props) {
  return (
    <div className=" border-t-4 border-b-4 border-deepIndigo bg-gradient-to-r from-deepYellow to-lightYellow flex flex-col justify-center items-center p-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className=" relative w-full">
          <input
            type="text"
            placeholder="Enter your email here"
            className=" p-2 border-2 border-white rounded bg-transparent w-full placeholder:text-white"
          />
          <button className=" absolute right-4 inset-y-0 text-deepBlue">
            <RiSendPlaneFill size="1.3rem" />
          </button>
        </div>
        <p className="text-white text-center">
          Stay updated with Nicole Dennis-Benn By subscribing to her mailing
          list!
        </p>
      </div>
    </div>
  );
}

export default Subscribe;
