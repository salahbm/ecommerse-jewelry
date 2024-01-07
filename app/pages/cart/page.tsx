import AboutSection from "@/components/home/About";
import Features from "@/components/home/Features";
import SocialMediaSection from "@/components/home/Socials";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc: "/assets/images/ring/ring-1.png",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc: "/assets/images/ear-ring/ear-ring-1.png",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const Cart = () => {
  return (
    <div>
      <div className="flex h-full flex-col md:flex-row  overflow-y-scroll bg-white shadow-md rounded-md">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 border-r ">
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        width={500}
                        height={500}
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center p-1"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex flex-row justify-center items-center">
                          <button
                            type="button"
                            className="font-medium text-lime-600 hover:text-amber-500"
                          >
                            <FaPlus />
                          </button>
                          <p className="text-neutral-600 font-serif text-xl font-semibold mx-2">
                            {product.quantity}
                          </p>

                          <button
                            type="button"
                            className="font-medium text-red-600 hover:text-amber-500"
                          >
                            <FaMinus />
                          </button>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-amber-600 hover:text-amber-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="  px-4 py-6 sm:px-6 flex flex-col justify-around">
          <SocialMediaSection />
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900 mt-2">
              <p>Subtotal</p>
              <p>$262.00</p>
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
      <AboutSection />
    </div>
  );
};

export default Cart;
