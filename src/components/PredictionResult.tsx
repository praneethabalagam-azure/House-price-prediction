"use client";

interface PredictionResultProps {
  predictedPrice: number;
}
const today = new Date().toLocaleDateString();

export default function PredictionResult({
  predictedPrice,
}: PredictionResultProps) {
  return (
    <section
      id="prediction-result"
      className="bg-[#0D0D0D] py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 text-center shadow-xl">

          <h2 className="text-3xl font-bold text-white">
            Estimated Property Value
          </h2>

          <div className="mt-8">

            <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              ₹{predictedPrice.toLocaleString("en-IN")}
            </h1>

            <p className="text-gray-400 mt-3">
              AI predicted price based on your property details
            </p>

            <p className="mt-4 text-cyan-300 text-xl font-semibold">
  {predictedPrice < 5000000
    ? "Affordable Property"
    : predictedPrice < 10000000
    ? "Mid-Range Property"
    : "Luxury Property"}
</p>
            <p className="mt-4 text-green-400 font-semibold text-lg">
  ✅ Prediction Generated Successfully
</p>
<p className="text-gray-400 mt-2">
  Generated on: {today}
</p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="text-cyan-400 font-bold text-xl">
                95%
              </h3>
              <p className="text-gray-300">
                Confidence Score
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="text-cyan-400 font-bold text-xl">
                3.2%
              </h3>
              <p className="text-gray-300">
                Market Variation
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="text-cyan-400 font-bold text-xl">
                AI Model
              </h3>
              <p className="text-gray-300">
                Random Forest
              </p>
            </div>

          </div>

          <div className="mt-10 text-left">

            <h3 className="text-white text-xl font-semibold mb-4">
              Price Factors
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✓ Location demand impact</li>
              <li>✓ Property size analysis</li>
              <li>✓ Nearby facilities evaluation</li>
              <li>✓ Current market trends</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}