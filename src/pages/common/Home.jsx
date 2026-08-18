import React from 'react'
import { FaConciergeBell, FaStar, FaUsers, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { MdOutlineLocalHotel, MdRoomService } from 'react-icons/md';
import { RiHotelBedLine } from 'react-icons/ri';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-[8em] py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 space-y-6">
          

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Manage Your Hotel
            <span className="block text-amber-600">With Excellence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
            Streamline your hotel operations with our all-in-one management system. 
            From reservations to guest services, we've got you covered.
          </p>

         
          <div className="flex flex-wrap gap-8 py-4">
            <div>
              <div className="flex items-center gap-2">
                <FaStar className="text-amber-500 text-xl" />
                <span className="text-2xl font-bold text-gray-900">4.9</span>
              </div>
              <p className="text-sm text-gray-500">Guest Rating</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-amber-500 text-xl" />
                <span className="text-2xl font-bold text-gray-900">10k+</span>
              </div>
              <p className="text-sm text-gray-500">Happy Guests</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <MdOutlineLocalHotel className="text-amber-500 text-xl" />
                <span className="text-2xl font-bold text-gray-900">500+</span>
              </div>
              <p className="text-sm text-gray-500">Partner Hotels</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <MdRoomService className="text-amber-600" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <FaShieldAlt className="text-amber-600" />
              <span className="text-sm font-medium">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <RiHotelBedLine className="text-amber-600" />
              <span className="text-sm font-medium">Smart Booking</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group px-8 py-3.5 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-amber-600 hover:text-amber-600 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Hotel"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <span className="ml-2 text-sm">(2,345 reviews)</span>
                </div>
                <h3 className="text-2xl font-bold">Grand Luxury Hotel</h3>
                <p className="text-white/80 text-sm">5-star experience with ocean view</p>
              </div>
            </div>

            <div className="absolute -top-12 -right-6 bg-white rounded-xl shadow-xl p-4 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <FaUsers className="text-green-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Available Rooms</p>
                  <p className="text-xs text-gray-500">24 rooms left</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-12 -left-6 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <MdRoomService className="text-amber-600 text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Best Price</p>
                  <p className="text-xs text-gray-500">Starting from $199/night</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home