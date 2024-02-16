import Features from "@/components/home/Features";
import { BiAlarm, BiFile } from "react-icons/bi";
import { FaPeopleCarry, FaPersonBooth } from "react-icons/fa";

// Other imports...

const AboutUs = () => {
  return (
    <section className="py-10 min-h-screen lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          {/* Left Content */}
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-yellow-500">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Discover Our
                </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  Joni & Co Shop
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                Explore our exquisite collection of jewelry crafted with
                precision and passion. Find the perfect piece that suits your
                style.
              </p>
              {/* Features */}
              <div className="flex flex-wrap items-center">
                {/* Feature 1 */}
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-yellow-500 dark:text-yellow-400">
                      <BiFile />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      Wide Selection
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">
                      Explore our diverse range of jewelry options.
                    </h2>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-yellow-500 dark:text-yellow-400">
                      <FaPeopleCarry />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      Expert Handmade
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">
                      Our jewelry is crafted with precision by skilled artisans.
                    </h2>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-yellow-500 dark:text-yellow-400">
                      <BiAlarm />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      Timely Delivery
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">
                      Receive your order on time, every time.
                    </h2>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-gray-900">
                    <span className="text-yellow-500 dark:text-yellow-400">
                      <FaPersonBooth />
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                      Customer Satisfaction
                    </p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">
                      We prioritize customer satisfaction in every purchase.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg"
              alt=""
              className="relative z-40 object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
      <Features />
      
    </section>
    // Other About Us styles...
  );
};

export default AboutUs;
