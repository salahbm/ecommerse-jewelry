import React from 'react'
import Products from './Products'

const Shop = () => {
  return (
    <section className="py-4 bg-gray-50  dark:bg-gray-600 ">
      <div className="px-4 py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap mb-24 -mx-3">
          <Products />
        </div>
      </div>
    </section>
  )
}

export default Shop
