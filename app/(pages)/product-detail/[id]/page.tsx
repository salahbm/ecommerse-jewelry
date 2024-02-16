import { redirect } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import { getProductByID } from '@/lib/admin/product'
import { Loader } from '@/components/shared/Loader'
import ProductImgCarousel from '@/components/shop/Carusel'
import AddProductFooter from '@/components/shop/Add-product'

interface pageProps {
  params: { id: string }
}

const ProductDetail = async ({ params }: pageProps) => {
  let loading = true
  if (!params) redirect('/shop')
  const product: any = await getProductByID(params.id)
  if (!product) {
    redirect('/shop')
  } else {
    loading = false
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
          <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 ">
                <div className="sticky top-0 z-50 overflow-hidden ">
                  <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                    <ProductImgCarousel images={product.images} />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 ">
                <div className="lg:pl-20">
                  <div className="mb-4 border-b border-gray-500">
                    <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                      New
                    </span>
                    <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                      {product.title}
                    </h2>

                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                      {product.description}
                    </p>
                    <p className="inline-block mb-8 text-4xl font-bold text-lime-700 dark:text-gray-400 ">
                      <span>${product?.newPrice}</span>
                      <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                        ${product.oldPrice}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center mb-8">
                    <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                      Colors:
                    </h2>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      <button className="p-1 mb-2 mr-2 border border-transparent hover:border-orange-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                        <div>{product?.color}</div>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mb-8">
                    <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                      Material:
                    </h2>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      <button className="p-1 mb-2 mr-2 border border-transparent hover:border-orange-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                        <p>{product?.material}</p>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mb-8">
                    <h2 className="w-16 text-xl font-bold dark:text-gray-400">
                      Size:
                    </h2>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      <button className="py-1 mb-2 mr-1 border w-11 hover:border-orange-400 dark:border-gray-400 hover:text-orange-600 dark:hover:border-gray-300 dark:text-gray-400">
                        {product.size}
                      </button>
                    </div>
                  </div>
                  {/* <div className="w-32 mb-8 ">
                    <label
                      htmlFor=""
                      className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400"
                    >
                      Quantity
                    </label>
                    <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                      <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        type="number"
                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                        placeholder="1"
                      />
                      <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div> */}
                  <AddProductFooter product={product} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default ProductDetail
