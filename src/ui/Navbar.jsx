import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHotel,
  FaBars,
  FaTimes,
  FaUser,
  FaSearch,
  FaBell,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import { MdOutlineLocalHotel } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Hide/show navbar on scroll
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
     
      <div 
        className={`bg-amber-600 text-white text-sm py-1.5 px-4 sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ position: "sticky", top: 0 }}
      >
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <FaPhone className="text-xs" />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-xs" />
              <span>Open 24/7 | Check-in: 2PM | Check-out: 12PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline">★ 4.8 (2.5k reviews)</span>
            <span className="bg-amber-700 px-2 py-0.5 rounded-full text-xs font-semibold">
              Best Price Guarantee
            </span>
          </div>
        </div>
      </div>

      <nav 
        className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ position: "sticky", top: 0 }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <MdOutlineLocalHotel className="text-amber-600 text-2xl md:text-3xl" />
              <span className="text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap">
                Hotel<span className="text-amber-600">Manager</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rooms-suites"
                    className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
                  >
                    Rooms & Suits
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bookings"
                    className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
                  >
                    Room Bookings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                <button className="text-gray-600 hover:text-amber-600 transition-colors">
                  <FaSearch className="text-lg" />
                </button>
                <button className="text-gray-600 hover:text-amber-600 transition-colors relative">
                  <FaBell className="text-lg" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </button>
                <Link to="/login">
                  <button className="bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 text-sm font-semibold">
                    <FaUser />
                    Sign In
                  </button>
                </Link>
              </div>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-amber-600 transition-colors ml-auto"
            >
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>

         
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/"
                  className="block text-gray-600 hover:text-amber-600 transition-colors font-medium py-2 px-3 hover:bg-amber-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms-suites"
                  className="block text-gray-600 hover:text-amber-600 transition-colors font-medium py-2 px-3 hover:bg-amber-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  Rooms & Suits
                </Link>
              </li>
              <li>
                <Link
                  to="/bookings"
                  className="block text-gray-600 hover:text-amber-600 transition-colors font-medium py-2 px-3 hover:bg-amber-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  Room Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-600 hover:text-amber-600 transition-colors font-medium py-2 px-3 hover:bg-amber-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-600 hover:text-amber-600 transition-colors font-medium py-2 px-3 hover:bg-amber-50 rounded-lg"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between px-3">
                    <button className="text-gray-600 hover:text-amber-600 transition-colors relative">
                      <FaBell className="text-lg" />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                        3
                      </span>
                    </button>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <FaPhone className="text-amber-600" />
                      <span>+1 (800) 123-4567</span>
                    </div>
                  </div>
                  <Link to="/login" onClick={toggleMenu}>
                    <button className="bg-amber-600 text-white px-6 py-2.5 rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-sm font-semibold w-full">
                      <FaUser />
                      Sign In
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;