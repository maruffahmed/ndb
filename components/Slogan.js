import React from "react";

import { Builder } from "@builder.io/react";
Builder.registerComponent(Slogan, {
  name: "Slogan",
  inputs: [
    {
      name: "Title",
      type: "text",
      defaultValue: "Stories No One Dares To Tell!",
    },
  ],
});

function Slogan(props) {
  return (
    <div className=" bg-gradient-to-br from-lightYellow to-deepYellow p-4 text-center">
      <p className="font-bold italic text-2xl text-deepBlue">
        Stories No One Dares To Tell!
      </p>
    </div>
  );
}

export default Slogan;
