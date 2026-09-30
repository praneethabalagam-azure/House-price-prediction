import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import PredictionForm from "./components/PredictionForm";
import PredictionResult from "./components/PredictionResult";
import MarketInsights from "./components/MarketInsights";
import FeaturedCities from "./components/FeaturedCities";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
function App() {
  const [predictedPrice, setPredictedPrice] = useState(0);
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="bg-[#0D0D0D] min-h-screen">

      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <HowItWorks />

      <PredictionForm
        setPredictedPrice={setPredictedPrice}
        setShowResult={setShowResult}
      />

      {showResult && (
        <PredictionResult predictedPrice={predictedPrice} />
      )}

      <MarketInsights />

      <FeaturedCities />

      <Testimonials />

      <CTA />

      <Footer />

    </div>
  );
}

export default App;