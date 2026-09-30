"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  {
    city: "Hyderabad",
    price: 65,
  },
  {
    city: "Bangalore",
    price: 85,
  },
  {
    city: "Chennai",
    price: 70,
  },
  {
    city: "Mumbai",
    price: 120,
  },
  {
    city: "Delhi",
    price: 95,
  },
];


export default function MarketInsights() {

  return (

    <section id="insights" className="bg-[#0D0D0D] py-24 px-6">

      <div className="max-w-6xl mx-auto">


        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-white">
            Market Insights
          </h2>

          <p className="text-gray-400 mt-3">
            Analyze property trends across major cities
          </p>

        </div>



        <div className="bg-white/5 border border-white/10 
        rounded-3xl p-8">


          <ResponsiveContainer width="100%" height={350}>

            <LineChart data={data}>

              <XAxis 
                dataKey="city"
                stroke="#9ca3af"
              />

              <YAxis
                stroke="#9ca3af"
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="price"
                stroke="#22d3ee"
                strokeWidth={4}
              />

            </LineChart>


          </ResponsiveContainer>


          <p className="text-gray-400 text-center mt-5">
            Average property price trends (in Lakhs)
          </p>


        </div>


      </div>


    </section>

  );
}