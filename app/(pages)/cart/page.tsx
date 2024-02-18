'use client'
import Features from '@/components/home/Features'
import SocialMediaSection from '@/components/home/Socials'
import { Loader } from '@/components/shared/Loader'
import {
  deleteItem,
  minusQuantity,
  plusQuantity,
  resetCart,
} from '@/redux/shop-slicer'
import { ProductTypes } from '@/types/user'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const [loading, setLoading] = useState(true)
  const [totalAMT, setTotalAMT] = useState('')
  const dispatch = useDispatch()
  const cartProducts = useSelector((state: any) => state.shop.cart)
  const totalPriceOfProduct = (product: ProductTypes) => {
    if (!product.quantity) {
      return product.newPrice
    }
    return (product.newPrice * product?.quantity).toFixed(1)
  }

  useEffect(() => {
    if (cartProducts.length > 0) {
      setLoading(false)
    }
    let price = 0
    cartProducts.map((item: any) => {
      price += item.newPrice * item.quantity
      return price
    })
    setTotalAMT(price.toFixed(2))
  }, [cartProducts])

  return (
    <div>
      <div className="flex h-full flex-col md:flex-row  overflow-y-scroll bg-white shadow-md rounded-md">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 border-r ">
          <div className="mt-8">
            <div className="flow-root">
              {loading ? (
                <Loader />
              ) : (
                <ul role="list" className=" divide-y divide-gray-200">
                  {cartProducts.length !== 0 ? (
                    cartProducts.map((product: ProductTypes) => (
                      <li key={product._id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image
                            width={200}
                            height={200}
                            src={
                              product.images.length > 0
                                ? product.images[0]
                                : '/assets/icons/no-image.svg'
                            }
                            alt={product.title}
                            className="h-full w-full object-cover object-center p-1"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <Link href={`/product-detail/${product?._id}`}>
                                  {product.title}
                                </Link>
                              </h3>
                              <p className="ml-4">${product.newPrice}</p>
                            </div>
                            <p className="ml-4 text-right">
                              ${totalPriceOfProduct(product)}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex flex-row justify-center items-center">
                              <button
                                type="button"
                                className="font-medium text-lime-600 hover:text-amber-500"
                                onClick={() => dispatch(plusQuantity(product))}
                              >
                                {' '}
                                <FaPlus />
                              </button>
                              <p className="text-neutral-600 font-serif text-xl font-semibold mx-2">
                                {product.quantity}
                              </p>

                              <button
                                type="button"
                                className="font-medium text-red-600 hover:text-amber-500"
                                onClick={() => dispatch(minusQuantity(product))}
                              >
                                <FaMinus />
                              </button>
                            </div>

                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-amber-600 hover:text-amber-500"
                                onClick={() =>
                                  dispatch(deleteItem(product._id))
                                }
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <div className="flex items-center justify-center">
                      <p className="text-base font-medium text-neutral-800">
                        It is empty
                      </p>
                    </div>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="  px-4 py-6 sm:px-6 flex flex-col justify-around">
          <SocialMediaSection />
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900 mt-2">
              <p>Subtotal</p>
              <p>${totalAMT}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700"
              >
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>or</p>
              <button
                type="button"
                className="font-medium text-amber-600 hover:text-amber-500 mx-1"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Features />
      {/* <AboutSection /> */}
    </div>
  )
}

export default Cart
