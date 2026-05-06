import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO SECTION */}
      <section
        className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1764069415220-909767290088?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative z-10 text-white text-5xl font-bold">
          About Us
        </h1>
      </section>

      {/* 🧾 ABOUT CONTENT */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Who We Are
        </h2>

        <p className="text-gray-600 leading-7 max-w-3xl mx-auto">
          We are a modern fashion brand dedicated to bringing you the latest trends 
          with premium quality and affordable prices. Our mission is to help you 
          express your unique style with confidence and comfort.
        </p>
      </section>

      {/* 🎯 FEATURES */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div className="p-6 bg-black shadow rounded-xl">
            <h3 className="text-xl text-white font-semibold mb-3">✨ Trendy Designs</h3>
            <p className="text-white">
              Stay ahead with the latest fashion trends curated just for you.
            </p>
          </div>

          <div className="p-6 shadow bg-black rounded-xl">
            <h3 className="text-xl text-white font-semibold mb-3">🚚 Fast Delivery</h3>
            <p className= " text-white ">
              Quick and reliable shipping to your doorstep.
            </p>
          </div>

          <div className="p-6 bg-black shadow rounded-xl">
            <h3 className="text-xl text-white font-semibold mb-3">💎 Premium Quality</h3>
            <p className="text-white">
              Carefully crafted products with top-quality materials.
            </p>
          </div>

        </div>
      </section>

      {/* 👥 TEAM / VISION */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
          alt="team"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-7">
            Our vision is to become a global fashion destination where style meets 
            comfort. We believe fashion is not just about clothing, but a way to 
            express individuality and confidence.
          </p>
        </div>

      </section>

      {/* 🎯 CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Shopping Today
        </h2>

        <p className="mb-6">
          Discover your perfect style with our latest collection
        </p>

        <a
          href="/product"
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold"
        >
          Explore Products
        </a>
      </section>

    </div>
  );
};

export default About;
