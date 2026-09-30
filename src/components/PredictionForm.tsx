"use client";

import { useState } from "react";

interface PredictionFormProps {
  setPredictedPrice: React.Dispatch<React.SetStateAction<number>>;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PredictionForm({
  setPredictedPrice,
  setShowResult,
}: PredictionFormProps) {
  const [formData, setFormData] = useState({
    location: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    floors: "",
    age: "",
    furnishing: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePredict = () => {
    if (
      !formData.location ||
      !formData.area ||
      !formData.bedrooms ||
      !formData.bathrooms ||
      !formData.floors ||
      !formData.age ||
      !formData.furnishing
    ) {
      alert("Please fill all the fields.");
      return;
    }

    setLoading(true);
    setShowResult(false);

    setTimeout(() => {
      let price =
        Number(formData.area) * 4500 +
        Number(formData.bedrooms) * 500000 +
        Number(formData.bathrooms) * 250000 +
        Number(formData.floors) * 150000 -
        Number(formData.age) * 20000;

      const city = formData.location.toLowerCase();

      if (city.includes("hyderabad")) price += 800000;
      else if (city.includes("bangalore")) price += 1200000;
      else if (city.includes("mumbai")) price += 3500000;
      else if (city.includes("delhi")) price += 1000000;
      else if (city.includes("chennai")) price += 600000;
      else if (city.includes("pune")) price += 500000;

      if (price < 1000000) price = 1000000;

      setPredictedPrice(price);
      setLoading(false);
      setShowResult(true);

      setTimeout(() => {
        document
          .getElementById("prediction-result")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      location: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      floors: "",
      age: "",
      furnishing: "",
    });

    setShowResult(false);
  };

  return (
    <section className="bg-[#0D0D0D] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Predict Your House Price
          </h2>

          <p className="text-gray-400 mt-3">
            Enter property details and get an AI-powered estimate
          </p>
        </div>

        <div className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              name="location"
              value={formData.location}
              placeholder="Location"
              onChange={handleChange}
              className="inputStyle"
            />

            <input
              name="area"
              value={formData.area}
              placeholder="Area (sq.ft)"
              onChange={handleChange}
              className="inputStyle"
            />

            <input
              name="bedrooms"
              value={formData.bedrooms}
              placeholder="Bedrooms"
              onChange={handleChange}
              className="inputStyle"
            />

            <input
              name="bathrooms"
              value={formData.bathrooms}
              placeholder="Bathrooms"
              onChange={handleChange}
              className="inputStyle"
            />

            <input
              name="floors"
              value={formData.floors}
              placeholder="Number of Floors"
              onChange={handleChange}
              className="inputStyle"
            />

            <input
              name="age"
              value={formData.age}
              placeholder="Property Age"
              onChange={handleChange}
              className="inputStyle"
            />

            <select
              name="furnishing"
              value={formData.furnishing}
              onChange={handleChange}
              className="inputStyle"
            >
              <option value="">Furnishing Status</option>
              <option>Fully Furnished</option>
              <option>Semi Furnished</option>
              <option>Unfurnished</option>
            </select>

          </div>

          <button
            onClick={handlePredict}
            disabled={loading}
            className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:scale-[1.02] transition disabled:opacity-60"
          >
            {loading ? "Analyzing Property..." : "Predict Price"}
          </button>

          <button
            onClick={handleReset}
            className="mt-4 w-full py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition"
          >
            Reset Form
          </button>

        </div>

      </div>
    </section>
  );
}