import { FaChevronLeft, FaChevronRight, FaFeatherAlt, FaHotel } from 'react-icons/fa'
import Hero from '../../component/comman/Hero'
import { flower_Image } from '../../assets'
import RoomCard from '../../component/comman/RoomCard';
import Rooms from '../../config/Room.json';
import { useNavigate } from 'react-router-dom';
import Amenities from '../../config/Amenities.json'
import ReviewCard from '../../component/comman/Review';
import reviewData from '../../config/Review.json'
import { useRef } from 'react';

const Home = () => {

  const handleFavoriteToggle = (roomId) => {
    console.log(`Toggled favorite for room ${roomId}`);
    // You can implement your favorite logic here
  };

   const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -450 : 450,
        behavior: "smooth",
      });
    }
  };

  const navigate = useNavigate()

  return (
    <>
      <Hero/>

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


      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-4">

        <div className="text-center px-2">
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Experience comfort and elegance in our carefully curated selection of premium accommodations
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-4 sm:mt-6">
          {Rooms.slice(0, 9).map((room) => (
            <RoomCard 
              key={room.id}
              {...room}
              onFavoriteToggle={() => handleFavoriteToggle(room.id)}
            />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button
            onClick={() => navigate("/rooms-suits")}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
          >
            View All Rooms →
          </button>
        </div>
      </div>

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

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-[7em]">
          <div className="flex flex-col items-center mb-6">
            <img 
              src={flower_Image} 
              alt="flower" 
              className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 object-contain" 
            />
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-500">
              Guest Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Guest Reviews
            </h2>
            <p className="text-gray-500 mt-2">
              Real reviews from real guests
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                        w-10 h-10 rounded-full bg-white shadow-lg
                        flex items-center justify-center
                        text-gray-700 hover:bg-amber-500 hover:text-white
                        transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                        w-10 h-10 rounded-full bg-white shadow-lg
                        flex items-center justify-center
                        text-gray-700 hover:bg-amber-500 hover:text-white
                        transition"
            >
              <FaChevronRight />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-5
                        snap-x snap-mandatory
                        scrollbar-hide scroll-smooth
                        px-6"
            >
              {reviewData.reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-[320px] sm:min-w-[380px] lg:min-w-[420px] snap-start"
                >
                  <ReviewCard
                    name={review.user.name}
                    avatar={review.user.avatar}
                    location={review.user.location}
                    isVerified={review.user.isVerified}
                    rating={review.rating}
                    date={review.date.split("T")[0]}
                    title={review.title}
                    content={review.content}
                    images={review.images}
                    tags={review.tags}
                    likes={review.likes}
                    helpful={review.helpful}
                    replies={review.replies}
                    roomType={review.bookingDetails.roomType}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

    </>
  ) 
}

export default Home