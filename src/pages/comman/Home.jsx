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

      <div className="flex flex-col items-center justify-center py-2 mt-5">
        <img src={flower_Image} alt="flower" className="w-40 h-20 object-contain" />
        <h2 className="text-4xl font-semibold opacity-70 text-violet-700">Rooms & Suites</h2>
        <h1 className="text-5xl font-bold text-gray-800 mt-1">Luxury Rooms & Suites</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2">

      <div className="text-center mb-12">
        <p className="text-gray-500 max-w-2xl mx-auto">
          Experience comfort and elegance in our carefully curated selection of premium accommodations
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Rooms.slice(0,9).map((room) => (
          <RoomCard 
            key={room.id}
            {...room}
            onFavoriteToggle={() => handleFavoriteToggle(room.id)}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={()=>(navigate("/rooms-suits"))}
        className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-1">
          View All Rooms →
        </button>
      </div>
    </div>

<div className="px-4 py-2 mb-4 mt-5 overflow-hidden border-t border-b border-gray-50">
  <div className="flex animate-marquee whitespace-nowrap gap-12 text-xs uppercase tracking-widest text-gray-400">
    {[...Amenities.amenities, ...Amenities.amenities].map((amenity, index) => (
      <span key={index} className="flex items-center gap-2 hover:text-gray-600 transition-colors duration-300">
        {amenity.icon && <span className="text-gray-300">{amenity.icon}</span>}
        <span>{amenity.name || amenity}</span>
      </span>
    ))}
  </div>
</div>
    </>
  ) 
}

export default Home