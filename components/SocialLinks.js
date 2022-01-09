import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";

import { Builder } from "@builder.io/react";
Builder.registerComponent(SocialLinks, {
  name: "SocialLinks",
  inputs: [
    {
      name: "facebook",
      type: "text",
      defaultValue: "/",
    },
    {
      name: "twitter",
      type: "text",
      defaultValue: "/",
    },
    {
      name: "facebook",
      type: "text",
      defaultValue: "/",
    },
  ],
});

function SocialLinks({ instagram, twitter, facebook }) {
  return (
    <div className=" bg-gradient-to-r from-lightYellow to-deepYellow p-8 flex items-center justify-around">
      <a
        href={instagram}
        className=" bg-gradient-to-r from-lightIndigo to-deepIndigo flex items-center justify-center p-3 rounded text-white"
      >
        <AiOutlineInstagram size="3rem" />
      </a>

      <a
        href={twitter}
        className=" bg-gradient-to-r from-lightIndigo to-deepIndigo flex items-center justify-center p-3 rounded text-white"
      >
        <AiOutlineTwitter size="3rem" />
      </a>

      <a
        href={facebook}
        className=" bg-gradient-to-r from-lightIndigo to-deepIndigo flex items-center justify-center p-3 rounded text-white"
      >
        <CgFacebook size="3rem" />
      </a>
    </div>
  );
}

export default SocialLinks;
