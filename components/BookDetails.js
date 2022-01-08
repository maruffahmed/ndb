import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Button from "./utils/Button";

import { Builder } from "@builder.io/react";
Builder.registerComponent(BookDetails, {
  name: "BookDetails",
  inputs: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "quotes",
      type: "text",
      defaultValue:
        "“Dennis-Benn is a prodigious world-straddler, and not just geographically; her characters are <br /> memorable and fully drawn, and the devastating meta-legacies they conjure are all too real.”",
    },
    {
      name: "author",
      type: "text",
      defaultValue: "VOGUE",
    },
    {
      name: "href",
      type: "text",
    },
  ],
});

function BookDetails({ title, quotes, author, href }) {
  return (
    <div className="container mx-auto px-8 pt-10 pb-20">
      {title && (
        <h1 className=" text-center mb-4 text-2xl text-deepBlue">{title}</h1>
      )}
      <div className="flex flex-col gap-4">
        <p className=" italic text-gray-500 text-sm">{parse(quotes)}</p>
        <p className="text-center text-deepBlue font-bold text-lg italic">
          - {author}
        </p>
      </div>
      {href && (
        <div className=" flex justify-center mt-10">
          <Button title="Learn More" href={href} className="py-4 px-16" />
        </div>
      )}
    </div>
  );
}

export default BookDetails;
