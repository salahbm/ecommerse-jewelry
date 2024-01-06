"use client";
import React, { useState } from "react";
import slider_img_1 from "../../public/images/ring/ring.png";
import slider_img_2 from "../../public/images/ring/ring.png";
import slider_img_3 from "../../public/images/ring/ring.png";
import slider_img_4 from "../../public/images/ring/ring.png";
import nav_icon_1 from "../../public/images/ring/ring-1.png";
import nav_icon_2 from "../../public/images/ring/ring-1.png";
import nav_icon_3 from "../../public/images/ring/ring-1.png";
import nav_icon_4 from "../../public/images/ring/ring-1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Link } from "lucide-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
    title: (
      <>
        Ring <br />& Earring
      </>
    ),
  },
  {
    icon: nav_icon_2,
    title: (
      <>
        Bangles & <br />
        Bracelets
      </>
    ),
  },
  {
    icon: nav_icon_3,
    title: (
      <>
        Drop <br /> Necklaces
      </>
    ),
  },
  {
    icon: nav_icon_4,
    title: (
      <>
        Diamond <br /> Necklaces
      </>
    ),
  },
];

const HomeHero = () => {
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);
  const [play, setPlay] = useState(false);

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
    <section className="relative max-h-[550px] md:px-5 bg-slate-500 mb-2">
      <Slider
        {...main_slider_setting}
        asNavFor={slider2}
        ref={(slider: any) => setSlider1(slider)}
        className=" max-h-[350px]ssss"
      >
        {slider_data.map((item, i) => (
          <div key={i} className=" flex items-center">
            <div className="flex-center">
              <Image
                src={item.img}
                alt="slider img"
                className="object-contain "
              />
              <div className="">
                <span className=""></span>
                <span className=""></span>
              </div>
            </div>

            <div className="">
              <div className="row md:items-center">
                <div className=" relative">
                  <span>{item.subtitle}</span>
                  <h3 className="">{item.title}</h3>
                  <div className=" hidden sm:block">
                    <Link href="/products">
                      <p className="">Discover Now</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className=" absolute right-10 bottom-10 z-1 cursor-pointer">
        <button className="m-1" onClick={() => slider1?.slickPrev()}>
          <FaArrowLeft />
        </button>
        <button className="m-1" onClick={() => slider1?.slickNext()}>
          <FaArrowRight />
        </button>
      </div>

      <div className=" absolute bottom-2 md:bottom-10 left-14">
        <Slider
          {...nav_slider_setting}
          asNavFor={slider1}
          ref={(slider) => setSlider2(slider)}
          className=""
        >
          {slider_nav_data.map((item, i) => (
            <div key={i} className="">
              <div className="max-w-12 max-h-12">
                <span>
                  <Image src={item.icon} alt="icon" className="w-10 h-10" />
                </span>
              </div>
              <div className="">
                <h3 className="">{item.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeHero;
