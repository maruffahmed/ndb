import BookDetails from "components/BookDetails";
import React from "react";

function BookCard({ bookDetails }) {
  const { title, quotes, author, href, thumbnail } = bookDetails;
  return (
    <div className="card">
      <div className="card-image flex justify-center items-center ">
        <img src={thumbnail} alt="book" className=" w-5/6" />
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
