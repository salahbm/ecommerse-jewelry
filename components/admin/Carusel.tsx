'use client'
import React, { useState } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

// slider data

const ProductImgCarousel = ({ images }: { images: string[] | any }) => {
  const [slider1, setSlider1] = useState<any>(null)
  const [slider2, setSlider2] = useState<any>(null)

  // slider setting
  const main_slider_setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: false,
  }
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
  }
  return (
    <div className="relative  mb-2 md:max-h-[550px] max-h-[450px] rounded-b-md">
      <Slider
        {...main_slider_setting}
        asNavFor={slider2}
        ref={(slider: any) => setSlider1(slider)}
        className="absolute w-full md:max-h-[650px] max-h-[450px]"
      >
        {images.length === 0 ? (
          <div className="relative w-full flex-center">
            <Image
              width={200}
              height={200}
              src={images}
              alt="slider img"
              priority
              className="object-contain w-full md:max-h-[550px] max-h-[450px]"
            />
          </div>
        ) : (
          images.map((item: any, i: number) => (
            <div key={i} className="relative w-full flex-center">
              <Image
                width={200}
                height={200}
                src={item}
                alt="slider img"
                priority
                className="object-contain w-full md:max-h-[550px] max-h-[450px]"
              />
            </div>
          ))
        )}
      </Slider>
      <div className="absolute bottom-[30px] font-semibold md:bottom-1/4 md:left-8 left-2 text-white  md:max-h-[100px] max-h-[50px]">
        <Slider
          {...nav_slider_setting}
          asNavFor={slider1}
          ref={(slider) => setSlider2(slider)}
        >
   {images.map((item: any, i: number) => (
<div>

    <Image
    key={i}
      width={100}
      height={100}
      src={item}
      alt="icon"
      className="w-10 h-10 object-contain border border-neutral-500 p-1 rounded-md"
    />
</div>
))}

        </Slider>
      </div>

      <div className="absolute right-10 bottom-10 z-1 cursor-pointer text-neutral-700">
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
  )
}

export default ProductImgCarousel
