import Head from "next/head";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>About Us - Your Jewelry Store</title>
        {/* Add any additional meta tags, styles, or scripts here */}
      </Head>

      {/* Navbar (You can include your navigation component here) */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto">
          <Link href="/">
            <p className="text-2xl font-bold text-gray-800">Your Jewelry</p>
          </Link>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
            About Us
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
            Welcome to Your Jewelry, where passion and craftsmanship come
            together to create exquisite pieces that tell a unique story. Our
            journey began with a vision to redefine elegance and celebrate
            individuality through carefully curated collections.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
            At Your Jewelry, we believe in the artistry of handcrafted jewelry.
            Each piece is meticulously designed and created to reflect timeless
            beauty and sophistication. Our commitment to quality craftsmanship
            ensures that every detail is perfected, from the selection of
            materials to the final finishing touches.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
            Join us on this journey of elegance and self-expression. Explore our
            collections and discover the perfect piece that resonates with your
            unique style. At Your Jewelry, every piece is a masterpiece, waiting
            to become a part of your story.
          </p>
        </div>
      </section>

      {/* Footer (You can include your footer component here) */}
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2022 Your Jewelry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
