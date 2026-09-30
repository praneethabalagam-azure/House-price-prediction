export default function CTA() {
  return (
    <section className="bg-[#0D0D0D] py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <div
          className="rounded-3xl p-12 text-center
          bg-gradient-to-r from-blue-600 to-cyan-500
          shadow-2xl"
        >

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Ready to Know Your Property Value?
          </h2>


          <p className="text-blue-100 mt-5 text-lg max-w-2xl mx-auto">
            Get instant AI-powered house price predictions
            and make smarter real estate decisions.
          </p>


          <button
            className="mt-8 px-10 py-4 rounded-full
            bg-white text-blue-700 font-bold text-lg
            hover:scale-105 transition duration-300"
          >
            Predict Now
          </button>


        </div>

      </div>

    </section>
  );
}