import React from "react";
import JewelryHero from "../../../components/Home/JewelryHero";
import FeatureAreaThree from "@/components/Home/Feature";
import JewelryCollectionBanner from "../../../components/Home/JewelryCollection";
import JewelryShopBanner from "../../../components/Home/JewelryBanner";
import JewelryAbout from "../../../components/Home/JewelryAbout";

const HomeView = () => {
  return (
    <>
      <JewelryHero />
      <FeatureAreaThree />
      <JewelryCollectionBanner />
      <JewelryShopBanner />
      <JewelryAbout />
    </>
  );
};

export default HomeView;
