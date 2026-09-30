function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex justify-between items-center">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            HomeValue<span className="text-blue-400">AI</span>
          </h1>
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-10 text-white font-medium">
          <li className="hover:text-blue-400 transition cursor-pointer">
            Home
          </li>

          <li className="hover:text-blue-400 transition cursor-pointer">
            Predict
          </li>

          <li className="hover:text-blue-400 transition cursor-pointer">
            Dashboard
          </li>

          <li className="hover:text-blue-400 transition cursor-pointer">
            About
          </li>

          <li className="hover:text-blue-400 transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Button */}
        <button className="hidden lg:block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;