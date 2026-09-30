export default function FeaturedCities() {

  const cities = [
    {
      name: "Hyderabad",
      description: "Growing IT hub with high real estate demand",
      price: "₹65 Lakhs Avg.",
    },
    {
      name: "Bangalore",
      description: "Premium market driven by technology sector",
      price: "₹85 Lakhs Avg.",
    },
    {
      name: "Chennai",
      description: "Affordable housing with steady growth",
      price: "₹70 Lakhs Avg.",
    },
    {
      name: "Mumbai",
      description: "Luxury properties with premium valuation",
      price: "₹1.2 Cr Avg.",
    },
  ];


  return (
    <section className="bg-[#0D0D0D] py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-white">
            Explore Top Cities
          </h2>

          <p className="text-gray-400 mt-3">
            Discover real estate trends across major locations
          </p>

        </div>


        <div className="grid md:grid-cols-4 gap-8">

          {cities.map((city) => (

            <div
              key={city.name}
              className="bg-white/5 border border-white/10 rounded-3xl p-6
              hover:-translate-y-3 transition duration-300"
            >

              <h3 className="text-2xl font-bold text-cyan-400">
                {city.name}
              </h3>

              <p className="text-gray-400 mt-4">
                {city.description}
              </p>

              <div className="mt-6 text-white font-semibold">
                {city.price}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}