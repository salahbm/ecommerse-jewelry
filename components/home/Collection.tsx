import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const JewelryCollection = () => {
  return (
    <div className="relative bg-gray-100 p-8 md:p-16">
      {/* Desktop layout */}
      <div className="hidden md:flex md:flex-row md:space-x-8 items-center">
        {/* Left column with jewelry collection */}
        <div className="md:w-1/2 flex flex-col">
          <div className="mb-8">
            <h2 className="text-[44px]  text-amber-700 font-extralight  mb-4 text-center animate-pulse">
              Our Collection
            </h2>
            <div className="flex items-center mb-4">
              <Image
                width={250}
                height={250}
                src="/assets/images/ring/wedding-ring.png" // Replace with your image URL
                alt="Jewelry Collection"
                className=" rounded-lg shadow-md mr-4"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-amber-700">
                  Spring Collection
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Explore our latest jewelry pieces inspired by the beauty of
                  spring.
                </p>
                <button className="  text-neutral-600 underline text-decoration flex items-center justify-center    py-2 px-4 rounded-md hover:text-blue-300 transition duration-300">
                  <span className="mx-4">Shop Now</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Right column with details */}
          <div className="flex">
            <div className="w-1/2 mr-4">
              <Image
                width={250}
                height={250}
                src="/assets/images/ear-ring/ear-ring.png" // Replace with your image URL
                alt="Jewelry Detail 1"
                className="object-cover rounded-lg shadow-md"
              />

              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold mb-2 text-amber-700">
                  Elegant Necklace
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Adorn yourself with our exquisite collection of elegant
                  necklaces.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                width={250}
                height={250}
                src="/assets/images/ear-ring/ear-ring-2.png" // Replace with your image URL
                alt="Jewelry Detail 1"
                className="object-cover rounded-lg shadow-md"
              />

              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold mb-2 text-amber-700">
                  Statement Ring
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Make a statement with our stunning collection of rings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column with details */}
        <div className="w-1/2">
          <Image
            width={500}
            height={500}
            src="/assets/images/chain/chain-1.png" // Replace with your image URL
            alt="Jewelry Detail 2"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Jewelry Collection
          </h2>
          <Image
            width={500}
            height={500}
            src="/assets/images/ring/wedding-ring.png" // Replace with your image URL
            alt="Jewelry Collection"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2 text-amber-700">
              Spring Collection
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Explore our latest jewelry pieces inspired by the beauty of
              spring.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <Image
            width={500}
            height={500}
            src="/assets/images/ear-ring/ear-ring.png" // Replace with your image URL
            alt="Jewelry Detail 1"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold mb-2 text-amber-700">
              Elegant Necklace
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Adorn yourself with our exquisite collection of elegant necklaces.
            </p>
          </div>
        </div>

        <div>
          <Image
            width={500}
            height={500}
            src="/assets/images/chain/chain-1.png" // Replace with your image URL
            alt="Jewelry Detail 2"
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold mb-2 text-amber-700">
              Statement Ring
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Make a statement with our stunning collection of rings.
            </p>
            <button className="  text-neutral-600 underline text-decoration flex items-center justify-center  text-center   py-2 px-4 rounded-md hover:text-blue-300 transition duration-300">
              <span className="mx-4">Shop Now</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryCollection;
