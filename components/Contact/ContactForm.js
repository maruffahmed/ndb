import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import Button from "components/utils/Button";
import parse from "html-react-parser";

import { Builder } from "@builder.io/react";
Builder.registerComponent(ContactForm, {
  name: "ContactForm",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Want to reach out to <br /> Nicole Dennis-Benn?",
    },
    {
      name: "instruction",
      type: "text",
      defaultValue: "Please fill out the form below.",
    },
  ],
});

function ContactForm({ title, instruction }) {
  return (
    <div className=" text-center p-8 container mx-auto">
      <div className=" pb-8">
        <h1 className=" font-bold text-lg text-deepBlue">{parse(title)}</h1>
        <p className=" text-gray-500 italic">{parse(instruction)}</p>
      </div>

      <form className=" flex flex-col gap-10 mt-4 pb-10">
        <div className=" flex flex-col gap-2 items-start">
          <label htmlFor="fullname" className=" font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Please enter your full name"
            className=" p-8 rounded-md shadow-lg w-full"
          />
        </div>

        <div className=" flex flex-col gap-2 items-start">
          <label htmlFor="email" className=" font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Please enter your email"
            className=" p-8 rounded-md shadow-lg w-full"
          />
        </div>

        <div className=" flex flex-col gap-2 items-start relative">
          <label htmlFor="inquiry" className=" font-bold">
            Choose Inquiry Type
          </label>
          {/* <input
            type="email"
            id="email"
            placeholder="Please enter your email"
            className=" p-8 rounded-md shadow-lg w-full"
          /> */}
          <select
            className=" p-8 rounded-md shadow-lg w-full bg-white text-gray-400"
            id="inquiry"
          >
            <option>Publicity Inquiry</option>
            <option>option</option>
            <option>option</option>
            <option>option</option>
          </select>
          <div className=" absolute right-3 top-12">
            <RiArrowDownSFill size="3rem" className=" text-lightIndigo" />
          </div>
        </div>

        <div className=" flex flex-col gap-2 items-start">
          <label htmlFor="message" className=" font-bold">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message..."
            className=" p-8 rounded-md shadow-lg w-full"
            rows={4}
          />
        </div>
        <Button title="Send" className=" w-full py-4" type="submit" />
      </form>
    </div>
  );
}

export default ContactForm;
