function Hero() {
  return (
    <section  id="home"
  className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:
"url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div className="text-white">

          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-white text-sm font-semibold border border-white/20">
            ⭐ India's Smartest Property Estimator
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-xl">
            Predict House
            <br />
            Prices with
            <span className="text-blue-400"> Confidence</span>
          </h1>

         <p className="mt-8 text-xl leading-9 text-gray-200 max-w-xl">
Predict accurate house prices using Machine Learning.
Compare locations, market trends, amenities and property features
to get an instant valuation in seconds.
</p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold shadow-xl">
              Predict Now
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition px-8 py-4 rounded-xl">
              Learn More
            </button>
          </div>

          

        </div>

        {/* RIGHT */}
        <div className="flex justify-center animate-[float_6s_ease-in-out_infinite]">

          <div className="bg-white backdrop-blur-xl rounded-[32px] p-10 shadow-2xl border border-white/40">

            <h2 className="text-3xl font-bold text-gray-800">
              Quick Price Estimate
            </h2>

            <p className="text-gray-500 mt-2">
              Fill the details below
            </p>

            <div className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Location"
                className="w-full border border-gray-200 rounded-2xl p-4 text-lg focus:ring-4 focus:ring-blue-200 outline-none transition outline-none focus:border-blue-500"
              />

              <input
                type="number"
                placeholder="Square Feet"
                className="w-full border border-gray-200 rounded-2xl p-4 text-lg focus:ring-4 focus:ring-blue-200 outline-none transition outline-none focus:border-blue-500"
              />

              <div className="grid grid-cols-2 gap-4">

                <input
                  type="number"
                  placeholder="Bedrooms"
                  className="border border-gray-200 rounded-2xl p-4 text-lg focus:ring-4 focus:ring-blue-200 outline-none transition"
                />

                <input
                  type="number"
                  placeholder="Bathrooms"
                  className="border border-gray-200 rounded-2xl p-4 text-lg focus:ring-4 focus:ring-blue-200 outline-none transition"
                />

              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300 text-white py-4 rounded-2xl font-bold shadow-xl">
                Predict Price
              </button>

            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-5">

              <p className="text-gray-500">
                Estimated Price
              </p>

              <h2 className="text-4xl font-bold text-blue-700 mt-2">
                ₹84,50,000
              </h2>

              <p className="text-green-600 mt-2">
                Confidence: 95%
              </p>

            </div>

          </div>

        </div>

      </div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

<div className="absolute top-20 right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
    </section>
  );
}

export default Hero;