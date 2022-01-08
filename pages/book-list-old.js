import Books from "components/BookList/Books";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Slogan from "components/Slogan";
import Subscribe from "components/Subscribe";
import React from "react";

function BookList(props) {
  return (
    <>
      <Navbar />
      <Slogan />
      <Books />
      <Subscribe />
      <Footer />
    </>
  );
}

export default BookList;
