export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/10 py-12 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-10">


          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Home<span className="text-cyan-400">AI</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              AI-powered house price prediction platform helping
              users make smarter real estate decisions.
            </p>
          </div>



          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-cyan-400 cursor-pointer">
                Home
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Features
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Prediction
              </li>

              <li className="hover:text-cyan-400 cursor-pointer">
                Insights
              </li>

            </ul>
          </div>



          {/* Technology */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Technology
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Machine Learning</li>
              <li>Python</li>
              <li>React</li>
              <li>AI Analytics</li>

            </ul>
          </div>



          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              Email:
            </p>

            <p className="text-cyan-400 mt-1">
              support@homeai.com
            </p>

            <p className="text-gray-400 mt-4">
              Building smarter homes with AI.
            </p>

          </div>


        </div>



        <div className="border-t border-white/10 mt-10 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © 2026 HomeAI. All rights reserved.
          </p>

        </div>


      </div>

    </footer>
  );
}