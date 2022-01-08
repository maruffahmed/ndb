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
    <div className="hero flex justify-center items-center">
      <img src="./imgs/06_book.png" alt="book" className=" w-10/12" />
    </div>
  );
}

export default Hero;
