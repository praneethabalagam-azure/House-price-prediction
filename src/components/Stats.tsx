function Stats() {
  const stats = [
    {
      number: "12K+",
      title: "Predictions",
      color: "from-blue-600 to-cyan-500",
    },
    {
      number: "95%",
      title: "Accuracy",
      color: "from-indigo-600 to-blue-500",
    },
    {
      number: "350+",
      title: "Cities",
      color: "from-sky-500 to-cyan-500",
    },
    {
      number: "₹500Cr+",
      title: "Property Value",
      color: "from-blue-700 to-indigo-600",
    },
  ];

  return (
    <section className="bg-[#0D0D0D] py-24 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

      {stats.map((item) => (
        <div
          key={item.title}
          className={`bg-gradient-to-r ${item.color} rounded-3xl p-8 text-white shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300`}
        >
          <h1 className="text-5xl font-black">
            {item.number}
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            {item.title}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
  );
}

export default Stats;