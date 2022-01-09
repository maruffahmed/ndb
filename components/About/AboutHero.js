import React from "react";

import { Builder } from "@builder.io/react";
Builder.registerComponent(AboutHero, {
  name: "AboutHero",
  inputs: [
    {
      name: "name",
      type: "text",
      defaultValue: "Nicole Dennis-Benn",
    },
    {
      name: "title",
      type: "text",
      defaultValue: "Stories No One Dares To Tell!",
    },
  ],
});

function AboutHero({ name, title }) {
  return (
    <div className=" pb-8">
      <div className=" flex justify-center items-start py-4 shadow-xl">
        <h2 className=" text-2xl">About Nicole</h2>
      </div>
      <div className="flex justify-center mt-1">
        <img src="./imgs/Nicole.png" alt="Nicole" className="w-full" />
      </div>
      <div className=" text-center mt-10">
        <h2 className=" text-3xl">{name}</h2>
        <p className=" font-bold italic text-lightIndigo">{title}</p>
      </div>
    </div>
  );
}

export default AboutHero;
