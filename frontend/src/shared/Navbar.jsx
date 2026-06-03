import React from 'react'

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-bold">
        MyApp
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-lg">
        <li>
          <a href="/" className="hover:text-sky-400 transition">
            Home
          </a>
        </li>

        <li>
          <a href="/features" className="hover:text-sky-400 transition">
            Features
          </a>
        </li>

        <li>
          <a href="/services" className="hover:text-sky-400 transition">
            Services
          </a>
        </li>

        <li>
          <a href="/contact" className="hover:text-sky-400 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Button */}
      <button className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg transition">
        Login
      </button>
    </nav>
  )
}

export default Navbar