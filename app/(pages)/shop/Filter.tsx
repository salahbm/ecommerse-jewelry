'use client'
import { Slider } from '@/components/ui/slider'
import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const Filter = () => {
  const [expand, setExpand] = useState(false)
  // Sample data for each section
  const categories = [
    'Rings',
    'Wedding Rings',
    'Necklaces',
    ' Bracelets',
    'Ear-rings',
  ]
  const colors = [
    'red-700',
    'yellow-300',
    'amber-600',
    'green-600',
    'blue-600',
    'indigo-600',
    'cyan-500',
    'pink-500',
  ]

  const materials = ['Gold', 'Rose Gold', 'Silver', 'Titanium', 'Platinum']
  var gemstones = [
    'Diamond',
    'Sapphire',
    'Ruby',
    'Emerald',
    'Aquamarine',
    'Pearl',
    'Turquoise',
    'Peridot',
  ]

  return (
    <div
      className={`relative w-full pr-4 lg:w-1/4 lg:block lg:max-h-full ${
        expand ? 'max-h-full' : 'max-h-[250px] overflow-y-hidden'
      }`}
    >
      {/* expand btn */}
      <button
        onClick={() => setExpand(!expand)}
        type="button"
        className="absolute left-1/2 transform -translate-x-1/2 lg:hidden block bottom-0 z-1 animate-bounce rounded-full border-neutral-500 border"
      >
        {expand ? (
          <MdKeyboardArrowUp size={30} />
        ) : (
          <MdKeyboardArrowDown size={30} />
        )}
      </button>
      {/* Product Categories */}
      <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-400">Product Price</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <Slider defaultValue={[50, 500]} max={1000} step={10} />
      </div>
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
      </div>

      {/* Size */}
      <div className="p-4 mb-5 bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-400 ">Size</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <div className="flex flex-wrap -mx-2 -mb-2">
          <Slider defaultValue={[50, 500]} max={1000} step={10} />
        </div>
      </div>

      {/* Colors */}
      <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-400">Colors</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <div className="flex flex-wrap -mx-2 -mb-2">
          {colors.map((color, index) => (
            <button key={index} className="p-1 mb-2 mr-4 ">
              <div
                className={`w-5 h-5 bg-${color} border border-neutral-500 hover:border-${color}`}
              ></div>
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-400">Material</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          {materials.map((Material, index) => (
            <li key={index} className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-300"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg dark:text-gray-400">{Material}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Material */}
      <div className="p-4 mb-5 bg-white border border-gray-200 dark:border-gray-900 dark:bg-gray-900">
        <h2 className="text-2xl font-bold dark:text-gray-400">Gemstones</h2>
        <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
        <ul>
          {gemstones.map((stones, index) => (
            <li key={index} className="mb-4">
              <label
                htmlFor=""
                className="flex items-center dark:text-gray-300"
              >
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-lg dark:text-gray-400">{stones}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Filter
