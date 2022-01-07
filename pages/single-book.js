import BookDescription from "components/BookDescription";
import BookDetails from "components/BookDetails";
import Footer from "components/Footer";
import Hero from "components/Hero";
import Navbar from "components/Navbar";
import Slogan from "components/Slogan";
import Subscribe from "components/Subscribe";
import React from "react";

function SingleBook(props) {
  return (
    <>
      <Navbar />
      <Slogan />
      <Hero />
      <BookDetails
        title="Patsy: A Novel"
        quotes="“Dennis-Benn is a prodigious world-straddler, and not just
          geographically; her characters are <br /> memorable and fully drawn,
          and the devastating meta-legacies they conjure are all too real.”"
        author="VOGUE"
      />
      <BookDescription />
      <Subscribe />
      <Footer />
    </>
  );
}

export default SingleBook;
