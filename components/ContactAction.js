import React from "react";
import Button from "./utils/Button";
import parse from "html-react-parser";

import { Builder } from "@builder.io/react";
Builder.registerComponent(ContactAction, {
  name: "ContactAction",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Want to reach out to <br /> Nicole Dennis-Benn?",
    },
  ],
});

function ContactAction({ title }) {
  return (
    <div className=" p-8">
      <div className=" contactAction p-8 flex flex-col gap-4">
        <h1 className=" text-xl text-center">{parse(title)}</h1>
        <Button
          title="Contact Nicole"
          className=" py-4 w-full"
          href="/contact"
        />
      </div>
    </div>
  );
}

export default ContactAction;
