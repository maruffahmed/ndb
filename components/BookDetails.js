import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import Button from "./utils/Button";

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
