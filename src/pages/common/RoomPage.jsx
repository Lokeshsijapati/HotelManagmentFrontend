import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  FaStar, 
  FaRegStar, 
  FaUser, 
  FaBed, 
  FaRulerCombined, 
  FaWifi, 
  FaTv, 
  FaSnowflake, 
  FaCoffee, 
  FaCheckCircle, 
  FaTimesCircle,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaShareAlt,
  FaHeart,
  FaRegHeart
} from 'react-icons/fa';
import { MdLocationOn, MdPeople, MdKingBed } from 'react-icons/md';
import { BiArea, BiCheckCircle } from 'react-icons/bi';
import Rooms from '../../config/Room.json';

const RoomPage = () => {
  const params = useParams();
  const roomId = Number(params.id);
  const room = Rooms.find((r) => r.id === roomId);

  // Get icon for amenity
  const getAmenityIcon = (amenity) => {
    const icons = {
      'WiFi': <FaWifi className="text-blue-500" />,
      'TV': <FaTv className="text-gray-700" />,
      'AC': <FaSnowflake className="text-blue-400" />,
      'Coffee': <FaCoffee className="text-amber-700" />,
      'Pool': <FaSnowflake className="text-blue-400" />,
      'Gym': <FaStar className="text-red-500" />,
      'Spa': <FaStar className="text-purple-500" />,
      'Restaurant': <FaStar className="text-orange-500" />,
      'Parking': <FaCheckCircle className="text-green-500" />,
      'Pet Friendly': <FaHeart className="text-pink-500" />,
    };
    return icons[amenity] || <FaCheckCircle className="text-green-500" />;
  };

  if (!room) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl max-w-md">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Room Not Found</h2>
          <p className="text-gray-600 mb-6">The room you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Image Gallery */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={room.image} 
            alt={room.name} 
            className="w-full h-[400px] object-cover"
          />
          {room.isFeatured && (
            <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
              <FaStar className="text-yellow-900" /> Featured
            </div>
          )}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-400" /> {room.rating} ({room.reviews} reviews)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Title Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{room.name}</h1>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <MdPeople /> {room.capacity} Guests
                    </span>
                    <span className="flex items-center gap-1">
                      <MdKingBed /> {room.bedType}
                    </span>
                    <span className="flex items-center gap-1">
                      <BiArea /> {room.size}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">${room.price}</div>
                  <div className="text-sm text-gray-500">per night</div>
                </div>
              </div>

              {/* Availability Status */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                room.isAvailable 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {room.isAvailable ? (
                  <>
                    <FaCheckCircle /> Available Now
                  </>
                ) : (
                  <>
                    <FaTimesCircle /> Not Available
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" /> Description
              </h2>
              <p className="text-gray-600 leading-relaxed">{room.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenities.map((amenity, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-xl">{getAmenityIcon(amenity)}</span>
                    <span className="text-gray-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="border-b pb-4 mb-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-blue-600">${room.price}</span>
                  <span className="text-gray-500">/ night</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-gray-600 ml-2">({room.reviews} reviews)</span>
                </div>
              </div>

              {/* Booking Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FaCalendarAlt className="inline mr-1" /> Check-in
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FaCalendarAlt className="inline mr-1" /> Check-out
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <MdPeople className="inline mr-1" /> Guests
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <button 
                  className={`w-full py-3 rounded-lg font-semibold text-white transition-colors ${
                    room.isAvailable 
                      ? 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!room.isAvailable}
                >
                  {room.isAvailable ? 'Book Now' : 'Unavailable'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  <FaClock className="inline mr-1" /> Free cancellation up to 24 hours before check-in
                </p>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaPhone className="text-blue-600" /> Call
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEnvelope className="text-blue-600" /> Message
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Rooms Section (Optional) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Rooms.filter(r => r.id !== room.id).slice(0, 3).map(similarRoom => (
              <div key={similarRoom.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={similarRoom.image} 
                  alt={similarRoom.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{similarRoom.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-blue-600 font-bold">${similarRoom.price}</span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <FaStar className="text-yellow-400" /> {similarRoom.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;