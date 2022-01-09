import AboutDescription from "components/About/AboutDescription";
import AboutHero from "components/About/AboutHero";
import ContactAction from "components/ContactAction";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Slogan from "components/Slogan";
import SocialLinks from "components/SocialLinks";
import Subscribe from "components/Subscribe";
import React from "react";

function About(props) {
  return (
    <>
      <Navbar />
      <Slogan />
      <AboutHero
        name="Nicole Dennis-Benn"
        title="Stories No One Dares To Tell!"
      />
      <SocialLinks instagram="/" twitter="/" facebook="/" />
      <AboutDescription />
      <ContactAction title="Want to reach out to <br /> Nicole Dennis-Benn?" />
      <Subscribe />
      <Footer />
    </>
  );
}

export default About;
