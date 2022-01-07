import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";

function Footer(props) {
  return (
    <div className=" py-16 flex flex-col justify-center items-center gap-6">
      <ul className=" flex items-center gap-6 text-deepBlue">
        <li>
          <a href="/">
            <AiOutlineInstagram size="1.8rem" />
          </a>
        </li>
        <li>
          <a href="/">
            <AiOutlineTwitter size="1.8rem" />
          </a>
        </li>
        <li>
          <a href="/">
            <CgFacebook size="1.8rem" />
          </a>
        </li>
      </ul>
      <div className=" text-center text-gray-500">
        <p>&copy; 2021 Nicole Dennis-Benn</p>
        <p>Website by Katherine Lawrence</p>
      </div>
    </div>
  );
}

export default Footer;
