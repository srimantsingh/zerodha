import React from "react";

function Hero() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 max-w-5xl mx-auto">
        <img
          src="/media/landing.png "
          alt="Zerodha Dashboard"
          className="max-w-full h-auto mb-10"
        />

        <h1 className="text-4xl font-semibold mb-4 text-gray-800">
          Invest in everything
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <button className="bg-blue-600 hover:bg-black text-white font-semibold py-3 px-6 rounded-md transition duration-300">
          Sign up for free
        </button>
      </section>
    </>
  );
}

export default Hero;
