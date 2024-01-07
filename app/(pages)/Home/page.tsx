import AboutSection from "@/components/home/About";
import Category from "@/components/home/Category";
import JewelryCollection from "@/components/home/Collection";
import Features from "@/components/home/Features";
import HomeHero from "@/components/home/Hero";
import SocialMediaSection from "@/components/home/Socials";
import Testimonials from "@/components/home/Testomonial";
import ContactUs from "@/components/home/contact";

import React from "react";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Features />
      <Category />
      <ContactUs />
      <JewelryCollection />
      <AboutSection />
      <Testimonials />
      <SocialMediaSection />
    </>
  );
};

export default Home;
