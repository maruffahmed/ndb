import React from "react";

import { Builder } from "@builder.io/react";
Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "Title",
      type: "text",
      defaultValue: "Text here",
    },
  ],
});

function Hero(props) {
  return (
    <div className="flex justify-center items-center relative">
      <img src="./imgs/06_book.png" alt="book" className=" w-10/12 z-20" />
      <div className=" absolute inset-0 z-10">
        <img src="./imgs/itemBg1.png" alt="bg" className=" h-full w-full" />
      </div>
    </div>
  );
}

export default Hero;
