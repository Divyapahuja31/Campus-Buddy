import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
      {/* Left: Logo + Text */}
      <div className="flex items-center space-x-2">
        <img
          src="https://images.yourstory.com/cs/images/companies/a73773708fca-82379CredoHireflatJH03Copy1-1667993490335.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75"
          alt="CredoHire Logo"
          className="h-10 w-auto"
        />
        <div className="text-xl font-semibold text-gray-800">
          CredoHire
        </div>
      </div>

      {/* Right: Menu + Buttons */}
      <div className="flex items-center space-x-6">
        {/* Menu Links */}
        <div className="flex items-center space-x-6 text-[#0f0f2d] text-sm font-medium">
          <div className="cursor-pointer flex items-center">
            Products <span className="ml-1">▾</span>
          </div>
          <div className="cursor-pointer flex items-center">
            Solutions <span className="ml-1">▾</span>
          </div>
          <div className="cursor-pointer flex items-center">
            Resources <span className="ml-1">▾</span>
          </div>
          <a href="#" className="hover:text-indigo-500">
            Pricing
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button className="bg-[#8e65ff] hover:bg-[#7a56e7] text-white px-4 py-2 rounded-lg font-medium text-sm">
            Book a Demo
          </button>
          <button className="bg-[#8e65ff] hover:bg-[#7a56e7] text-white px-4 py-2 rounded-lg font-medium text-sm">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
