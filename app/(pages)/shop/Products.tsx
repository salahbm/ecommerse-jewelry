'use client'
import React, { useEffect, useState } from 'react'
import { BiCart } from 'react-icons/bi'
import { FaHeart, FaCartPlus } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { ProductTypes } from '@/types/user'
import { getALlProducts } from '@/lib/admin/add-product'
import { Loader } from '@/components/shared/Loader'

const Products = () => {
  const [allProducts, setAllProducts] = useState<ProductTypes[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchRecentStores = async () => {
      try {
        setLoading(true)
        const _allProducts: any = await getALlProducts()
        if (_allProducts) {
          setAllProducts(_allProducts)
        }
      } catch (error) {
        console.log(`error:`, error)
      } finally {
        setLoading(false)
      }
    }
    fetchRecentStores()
  }, [])
  return (
    <div className="w-full px-3 lg:w-3/4">
      <div className="px-3 ">
        <div className="items-center justify-between hidden px-4 py-2 mb-4 bg-gray-100 md:flex dark:bg-gray-900 ">
          <h2 className="text-2xl dark:text-gray-400">Search Our Products</h2>
          <div className="flex items-center justify-between">
            <div>
              <select
                name=""
                id=""
                className="block w-40 text-base bg-gray-100 dark:text-gray-400 dark:bg-gray-900"
              >
                <option value="">Sort by latest</option>
                <option value="">Sort by Popularity</option>
                <option value="">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap items-center">
          {allProducts?.map((product, _id) => (
            <div key={_id} className="w-full px-3 my-2 sm:w-1/2 md:w-1/3">
              <div className="border border-gray-200 rounded-md dark:border-gray-800">
                <div className="relative bg-gray-200">
                  <Link href={`/product-detail/${_id}`} className="p-1">
                    <Image
                      src={
                        product.images.length > 0
                          ? product.images[0]
                          : '/assets/icons/no-image.svg'
                      }
                      alt="ProductImage"
                      width={500}
                      height={500}
                      className="object-contain w-full h-56 mx-auto"
                    />
                  </Link>

                  <div className="absolute top-0 right-0 z-10 flex items-center justify-center w-12 h-12  text-center ">
                    <FaHeart className="text-red-500 dark:text-gray-400  text-lg" />
                  </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-medium dark:text-gray-400">
                      {product.title}
                    </h3>

                    <p className="text-lg ">
                      <span className="text-lime-500 dark:text-gray-400 mx-1">
                        ${product.newPrice}
                      </span>
                      <span className="text-gray-400 line-through dark:text-gray-400">
                        {product.oldPrice}
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-row items-center justify-between ">
                    <p className="text-base font-normal text-gray-400 dark:text-gray-400">
                      <span>{product.description}</span>
                    </p>
                    <button className="flex justify-center px-4 py-2 text-amber-600 border border-amber-300 rounded-md dark:border-gray-600 dark:text-gray-400 hover:bg-amber-700 hover:text-gray-100 dark:hover:bg-gray-800 dark:hover:border-gray-900">
                      <FaCartPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-end mt-6">
        <nav aria-label="page-navigation">
          <ul className="flex list-style-none">
            <li className="page-item disabled ">
              <Link
                href="#"
                className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-amber-600"
              >
                Previous
              </Link>
            </li>
            <li className="page-item ">
              <Link
                href="#"
                className="relative block px-3 py-1.5 mr-3 text-base hover:text-amber-700 transition-all duration-300 hover:bg-amber-200 dark:hover:text-gray-400 dark:hover:bg-gray-700 rounded-md text-gray-100 bg-amber-600"
              >
                1
              </Link>
            </li>
            <li className="page-item disabled ">
              <Link
                href="#"
                className="relative block pointer-events-none px-3 py-1.5 mr-3 text-base text-gray-700 transition-all duration-300  rounded-md dark:text-gray-400 hover:text-gray-100 hover:bg-amber-600"
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Products
