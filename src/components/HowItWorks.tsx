export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Enter Property Details",
      description:
        "Provide location, area, bedrooms, bathrooms, age, and other property information.",
    },
    {
      step: "02",
      title: "AI Analyzes Data",
      description:
        "Our machine learning model studies property features and historical housing patterns.",
    },
    {
      step: "03",
      title: "Get Price Prediction",
      description:
        "Receive an estimated property value with confidence score and market insights.",
    },
  ];

  return (
    <section className="bg-[#0D0D0D] py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            How It Works
          </h2>

          <p className="text-gray-400 mt-3">
            Predict house prices in three simple steps
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((item) => (

            <div
              key={item.step}
              className="relative bg-white/5 border border-white/10 
              rounded-3xl p-8 hover:-translate-y-3 
              transition duration-300"
            >

              <div className="text-5xl font-black text-cyan-400 mb-6">
                {item.step}
              </div>


              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>


              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}