import Head from "next/head";
import Navbar from "components/Navbar";
import Slogan from "components/Slogan";
import Hero from "components/Hero";
import Subscribe from "components/Subscribe";
import Footer from "components/Footer";
import BookDetails from "components/BookDetails";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slogan />
      <Hero />
      <BookDetails
        quotes="“Dennis-Benn is a prodigious world-straddler, and not just
          geographically; her characters are <br /> memorable and fully drawn,
          and the devastating meta-legacies they conjure are all too real.”"
        author="VOGUE"
        href="/"
      />
      <Subscribe />
      <Footer />
    </>
  );
}
