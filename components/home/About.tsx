import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="bg-gray-100 p-8 md:p-16 border rounded-md my-2">
      {/* Desktop layout */}
      <div className="hidden md:flex md:flex-row md:space-x-8">
        {/* Left column with large image and hover title */}
        <div className="md:w-1/2 relative">
          <div className="h-full w-full relative overflow-hidden rounded-lg group">
            <Image
              layout="fill"
              objectFit="cover"
              src="/assets/images/chain/chain-2.png"
              alt="About Image 1"
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-bold">Our Story</h3>
            </div>
          </div>
        </div>

        {/* Right column with image and text */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="w-3/4 mx-auto">
            <Image
              width={300}
              height={300}
              src="/assets/images/bracelet/bracelet-3.png"
              alt="About Image 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg font-bold mb-2 text-amber-700">
              Learn More About Us
            </p>
            <p className="text-gray-600">
              Welcome to Joni&Co, where passion meets craftsmanship. Our
              handcrafted pieces blend tradition with innovation, embodying
              elegance and individuality. From materials to design, we
              prioritize excellence. Explore our story, celebrate artistry, and
              adorn yourself with timeless creations. Join us at Joni&Co, where
              each piece is a chapter in a story of beauty and self-expression.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col space-y-8">
        {/* Top div with large image and hover title */}
        <div className="relative hidden md:block">
          <div className="h-60 w-full relative overflow-hidden rounded-lg group">
            <Image
              layout="fill"
              objectFit="cover"
              src="/assets/images/bracelet/bracelet-3.png"
              alt="About Image 1"
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom div with image and text */}
        <div className="w-full">
          <div className="w-3/4 mx-auto">
            <Image
              width={300}
              height={300}
              src="/assets/images/chain/chain-2.png"
              alt="About Image 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg font-bold mb-2 text-amber-700">
              Learn More About Us
            </p>
            <p className="text-gray-600 shadow-md  p-2 rounded-md px-4">
              Welcome to Joni&Co, where passion meets craftsmanship. Our
              handcrafted pieces blend tradition with innovation, embodying
              elegance and individuality. From materials to design, we
              prioritize excellence. Explore our story, celebrate artistry, and
              adorn yourself with timeless creations. Join us at Joni&Co, where
              each piece is a chapter in a story of beauty and self-expression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
