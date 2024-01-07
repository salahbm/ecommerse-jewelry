"use client";
import React, { useState } from "react";
import slider_img_1 from "../../public/assets/images/ring/ring-1.png";
import slider_img_2 from "../../public/assets/images/chain/chain.png";
import slider_img_3 from "../../public/assets/images/ring/ring-2.png";
import slider_img_4 from "../../public/assets/images/ring/ring-3.png";
import nav_icon_1 from "../../public/assets/images/stone/stone.png";
import nav_icon_2 from "../../public/assets/images/stone/stone-1.png";
import nav_icon_3 from "../../public/assets/images/stone/stone-2.png";
import nav_icon_4 from "../../public/assets/images/stone/stone-3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
// slider data
const slider_data = [
  { subtitle: "The original", title: "Shine bright", img: slider_img_1 },
  { subtitle: "The original", title: "Creative Design", img: slider_img_2 },
  { subtitle: "The original", title: "Gold Plateted", img: slider_img_3 },
  { subtitle: "The original", title: "Unique shapes", img: slider_img_4 },
];

// slider nav data
const slider_nav_data = [
  {
    icon: nav_icon_1,
    title: <>Ring & Earring</>,
  },
  {
    icon: nav_icon_2,
    title: <>Bangles & Bracelets</>,
  },
  {
    icon: nav_icon_3,
    title: <>Drop Necklaces</>,
  },
  {
    icon: nav_icon_4,
    title: <>Diamond Necklaces</>,
  },
];

const HomeHero = () => {
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);

  // slider setting
  const main_slider_setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: false,
  };
  // nav slider setting
  const nav_slider_setting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  };
  return (
    <div className="relative bg-gradient-to-r from-neutral-400 via-pink-200 to-red-100 mb-2 max-h-[450px]">
      <Slider
        {...main_slider_setting}
        asNavFor={slider2}
        ref={(slider: any) => setSlider1(slider)}
        className="absolute w-full max-h-[450px]"
      >
        {slider_data.map((item, i) => (
          <div key={i} className="relative w-full flex-center">
            <Image
              src={item.img}
              alt="slider img"
              className="object-contain w-full max-h-[450px]"
            />

            <h3 className="absolute top-24 font-bold md:top-1/4 md:right-10 -right-16 text-white text-[32px] md:text-[44px]  md:text-center -rotate-90 md:rotate-0">
              {item.title} <br />
              <span className="font=semibold text-lg md:block hidden">
                {item.subtitle}
              </span>
            </h3>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-[150px] font-semibold md:bottom-1/4 md:left-24 left-10 text-white  md:max-h-[100px] max-h-[50px]">
        <Slider
          {...nav_slider_setting}
          asNavFor={slider1}
          ref={(slider) => setSlider2(slider)}
        >
          {slider_nav_data.map((item, i) => (
            <div key={i} className="">
              <Image
                src={item.icon}
                alt="icon"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-white">{item.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
      <Link
        href="/products"
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Button type="button">Discover Now</Button>
      </Link>
      <div className="absolute right-10 bottom-10 z-1 cursor-pointer ">
        <button
          className="m-1 p-1 hover:text-neutral-100 hover:border rounded-full"
          onClick={() => slider1?.slickPrev()}
        >
          <FaArrowLeft />
        </button>
        <button
          className="m-1 p-1 hover:text-neutral-100 hover:border rounded-full"
          onClick={() => slider1?.slickNext()}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
