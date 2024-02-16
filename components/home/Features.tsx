import React from "react";
import { FaDollarSign, FaShippingFast, FaHeadphones } from "react-icons/fa";

const Features = () => {
  return (
    <div className=" p-8">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {/* Feature 1: Shipping */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
          <FaShippingFast className="text-4xl mb-2 text-amber-700" />
          <h3 className="text-xl font-semibold text-neutral-600">
            Fast Shipping
          </h3>
          <p className="text-sm text-neutral-800">
            Get your products delivered quickly.
          </p>
        </div>

        {/* Feature 2: Refund */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
          <FaDollarSign className="text-4xl mb-2 text-amber-700" />
          <h3 className="text-xl font-semibold text-neutral-600">
            Easy Refund
          </h3>
          <p className="text-sm text-neutral-800">
            Simple and hassle-free refund process.
          </p>
        </div>

        {/* Feature 3: Support */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
          <FaHeadphones className="text-4xl mb-2 text-amber-700" />
          <h3 className="text-xl font-semibold text-neutral-600">
            24/7 Support
          </h3>
          <p className="text-sm text-neutral-800">
            Reach out to us anytime for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
