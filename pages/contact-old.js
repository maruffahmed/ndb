import ContactForm from "components/Contact/ContactForm";
import ContactHero from "components/Contact/ContactHero";
import ContactInfo from "components/Contact/ContactInfo";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Slogan from "components/Slogan";
import Subscribe from "components/Subscribe";
import React from "react";

function Contact(props) {
  return (
    <>
      <Navbar />
      <Slogan />
      <ContactHero />
      <ContactForm />
      <Subscribe />
      <ContactInfo />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Contact;
