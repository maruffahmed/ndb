import Head from "next/head";
import Navbar from "components/Navbar";
import Slogan from "components/Slogan";
import Hero from "components/Hero";
import Subscribe from "components/Subscribe";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slogan />
      <Hero />
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-4">
          <p className=" italic text-gray-500 text-sm">
            “Dennis-Benn is a prodigious world-straddler, and not just
            geographically; her characters are <br /> memorable and fully drawn,
            and the devastating meta-legacies they conjure are all too real.”
          </p>
          <p className="text-center text-deepBlue font-bold text-lg italic">
            - VOGUE
          </p>
        </div>
        <div className=" flex justify-center mt-10">
          <button className=" uppercase bg-gradient-to-r from-deepIndigo to-lightIndigo py-4 px-16 text-white font-bold rounded">
            Learn more
          </button>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}
