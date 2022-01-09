import BookDetails from "components/BookDetails";
import React from "react";

function BookCard({ bookDetails }) {
  const { title, quotes, author, href, thumbnail } = bookDetails;
  return (
    <div className="card">
      <div className="flex justify-center items-center relative">
        <img src={thumbnail} alt="book" className=" w-5/6 z-20" />
        <div className=" absolute inset-0 z-10">
          <img src="./imgs/itemBg1.png" alt="bg" className=" h-full w-full" />
        </div>
      </div>
      <div className=" bg-white">
        <BookDetails
          title={title}
          quotes={quotes}
          author={author}
          href={href}
        />
      </div>
    </div>
  );
}

export default BookCard;
