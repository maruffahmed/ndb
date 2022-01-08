import React from "react";
import BookCard from "./BookCard";

import { Builder } from "@builder.io/react";
Builder.registerComponent(Books, {
  name: "Books",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: "Books",
    },
    {
      name: "books",
      type: "JSON",
    },
  ],
});

const books = [
  {
    title: "Patsy: A Novel",
    quotes:
      "“Dennis-Benn is a prodigious world-straddler, and not just geographically; her characters are memorable and fully drawn, and the devastating meta-legacies they conjure are all too real.”",
    author: "VOGUE",
    href: "/single-book",
    thumbnail: "./imgs/06_book.png",
  },
  {
    title: "Patsy: A Novel",
    quotes:
      "“Dennis-Benn is a prodigious world-straddler, and not just geographically; her characters are memorable and fully drawn, and the devastating meta-legacies they conjure are all too real.”",
    author: "VOGUE",
    href: "/single-book",
    thumbnail: "./imgs/06_book.png",
  },
];

function Books({ title }) {
  return (
    <div>
      <div className=" flex justify-center items-start py-4 shadow-lg">
        <h2 className=" text-2xl">Books</h2>
      </div>
      <div className=" px-8 py-16 flex flex-col gap-10">
        {books.map((item, index) => (
          <BookCard key={index} bookDetails={item} />
        ))}
      </div>
    </div>
  );
}

export default Books;
