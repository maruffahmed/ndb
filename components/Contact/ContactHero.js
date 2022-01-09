import React from "react";

import { Builder } from "@builder.io/react";
Builder.registerComponent(ContactHero, {
  name: "ContactHero",
});

function ContactHero(props) {
  return (
    <div className=" pb-8">
      <div className=" flex justify-center items-start py-4 shadow-xl">
        <h2 className=" text-2xl">Contact Nicole</h2>
      </div>
      <div className="flex justify-center mt-1">
        <img src="./imgs/NDennisBenn_pic.png" alt="Nicole" className="w-full" />
      </div>
    </div>
  );
}

export default ContactHero;
