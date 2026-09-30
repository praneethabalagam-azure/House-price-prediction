function MarketTrends() {
  return (
    <section className="bg-slate-900 py-28 mt-24 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center">
          Live Market Trends
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          Average property appreciation across major Indian cities.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 rounded-3xl p-10">
            <h3 className="text-3xl font-bold">
              Bangalore
            </h3>

            <p className="text-5xl font-black mt-6 text-green-400">
              +18%
            </p>

            <p className="mt-4 text-gray-400">
              Annual Growth
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-10">
            <h3 className="text-3xl font-bold">
              Hyderabad
            </h3>

            <p className="text-5xl font-black mt-6 text-green-400">
              +15%
            </p>

            <p className="mt-4 text-gray-400">
              Annual Growth
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-10">
            <h3 className="text-3xl font-bold">
              Chennai
            </h3>

            <p className="text-5xl font-black mt-6 text-green-400">
              +12%
            </p>

            <p className="mt-4 text-gray-400">
              Annual Growth
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default MarketTrends;