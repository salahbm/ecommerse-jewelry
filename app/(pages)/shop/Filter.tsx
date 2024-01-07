import React from "react";

const Filter = () => {
  // Sample data for each section
  const categories = [
    "Sweater",
    "Socks",
    "T-Shirt",
    "Shoes",
    "Hoodies & Pants",
  ];
  const sizes = ["XL", "S", "M", "XS"];
  const colors = [
    "emerald",
    "orange",
    "rose",
    "amber",
    "green",
    "pink",
    "indigo",
    "cyan",
    "stone",
    "orange",
  ];
  const brands = ["Amul", "RIGO", "Nyptra", "Shangri-la"];

  return (
    <div className="w-full pr-4 lg:w-1/4 lg:block">
      {/* Product Categories */}
      <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-400">
          Product Categories
        </h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-400"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg">{category}</span>
              </label>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="text-base font-medium text-orange-500 hover:underline dark:text-orange-400"
        >
          View More
        </a>
      </div>

      {/* Size */}
      <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-400 ">Size</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <div className="flex flex-wrap -mx-2 -mb-2">
          {sizes.map((size, index) => (
            <button
              key={index}
              className="py-1 mb-2 mr-1 border w-11 hover:border-orange-400 dark:border-gray-400 hover:text-orange-600 dark:hover:border-gray-300 dark:text-gray-400"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-400">Colors</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <div className="flex flex-wrap -mx-2 -mb-2">
          {colors.map((color, index) => (
            <button key={index} className="p-1 mb-2 mr-4 ">
              <div className={`w-5 h-5 bg-${color}-400`}></div>
            </button>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-400">Brand</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          {brands.map((brand, index) => (
            <li key={index} className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-300"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg dark:text-gray-400">{brand}</span>
              </label>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="text-base font-medium text-orange-500 hover:underline dark:text-orange-400"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default Filter;
