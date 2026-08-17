import { FaFeatherAlt, FaHotel } from 'react-icons/fa'
import Hero from '../../component/comman/Hero'
import { flower_Image } from '../../assets'
import RoomCard from '../../component/comman/RoomCard';
import Rooms from '../../config/Room.json';
import { useNavigate } from 'react-router-dom';
import Amenities from '../../config/Amenities.json'

const Home = () => {

  const handleFavoriteToggle = (roomId) => {
    console.log(`Toggled favorite for room ${roomId}`);
    // You can implement your favorite logic here
  };

  const navigate = useNavigate()

  return (
    <>
      <Hero/>

      {/* Responsive Header Section */}
      <div className="flex flex-col items-center justify-center py-4 sm:py-6 md:py-8 mt-3 sm:mt-5 px-4">
        <img 
          src={flower_Image} 
          alt="flower" 
          className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 object-contain" 
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold opacity-70 text-violet-700 text-center">
          Rooms & Suites
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-1 text-center px-2">
          Luxury Rooms & Suites
        </h1>
      </div>

      {/* Responsive Rooms Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-4">

        <div className="text-center px-2">
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Experience comfort and elegance in our carefully curated selection of premium accommodations
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-4 sm:mt-6">
          {Rooms.slice(0, 9).map((room) => (
            <RoomCard 
              key={room.id}
              {...room}
              onFavoriteToggle={() => handleFavoriteToggle(room.id)}
            />
          ))}
        </div>

        {/* Responsive Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button
            onClick={() => navigate("/rooms-suits")}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
          >
            View All Rooms →
          </button>
        </div>
      </div>

      {/* Responsive Amenities Marquee */}
      <div className="px-3 sm:px-4 py-4 sm:py-5 bg-green-700 mt-8 sm:mt-12 md:mt-[5em] mb-8 sm:mb-10 md:mb-12 overflow-hidden border-t border-b border-white">
        <div className="flex animate-marquee whitespace-nowrap gap-6 sm:gap-8 md:gap-12 text-xs uppercase tracking-widest text-gray-400">
          {[...Amenities.amenities, ...Amenities.amenities].map((amenity, index) => (
            <span 
              key={index} 
              className="flex items-center gap-2 sm:gap-3 text-white transition-colors duration-300"
            >
              {amenity.icon && <span className="text-gray-300 text-sm sm:text-base">{amenity.icon}</span>}
              <span className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
                {amenity.name || amenity}
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  ) 
}

export default Home