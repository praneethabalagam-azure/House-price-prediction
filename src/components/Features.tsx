"use client";

import { Home, Brain, BarChart3, MapPin, ShieldCheck, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Home,
      title: "Smart Price Prediction",
      description:
        "Get accurate house price estimates using advanced machine learning models based on property details.",
    },
    {
      icon: Brain,
      title: "AI Powered Analysis",
      description:
        "Our ML algorithm analyzes location, size, rooms, amenities and market patterns.",
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description:
        "Understand how city, neighborhood and nearby facilities influence property value.",
    },
    {
      icon: BarChart3,
      title: "Market Insights",
      description:
        "Visualize trends and compare property prices for better decisions.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Estimates",
      description:
        "Model evaluation ensures predictions are accurate and trustworthy.",
    },
    {
      icon: Zap,
      title: "Fast Results",
      description:
        "Receive instant predictions through a simple and user-friendly interface.",
    },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white">
            Powerful Features
          </h2>
          <p className="text-gray-400 mt-3">
            Making real estate decisions smarter with AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="p-6 rounded-2xl text-center w-full max-w-smbg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 mb-5">
                  <Icon className="text-white" size={26} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}