import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import PropTypes from "prop-types";

const RatingStars = ({ rating, maxStars = 5 }) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${
          i <= rating ? "text-yellow-400" : "text-gray-600"
        } fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex space-x-1 mb-4">{stars}</div>;
};

const CommentCarousel = ({ comments, interval = 4000 }) => {
  if (!comments || comments.length === 0) {
    return (
      <p className="text-gray-400 text-center">
        No hay comentarios para mostrar.
      </p>
    );
  }

  return (
    <div className="testimonials-carousel">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: interval,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet testimonial-bullet",
          bulletActiveClass: "testimonial-bullet-active",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="pb-16"
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id}>
            <div className="group">
              {/* Card principal */}
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 h-[210px] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#4CD6C0]/10 flex flex-col">
                {/* Rating stars */}
                <RatingStars rating={comment.rating} />

                {/* Testimonial text con altura fija */}
                <blockquote className="text-gray-200 text-base leading-relaxed mb-4 italic h-[10px] overflow-hidden flex-1">
                  <div className="line-clamp-3">"{comment.description}"</div>
                </blockquote>

                {/* User info */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="relative">
                    <img
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-[rgba(76,214,192,0.3)] group-hover:ring-[rgba(76,214,192,0.5)] transition-all duration-300"
                      src={comment.image}
                      alt={comment.name}
                      loading="lazy"
                    />
                    {/* Verified badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#4CD6C0] rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {comment.name}
                    </h4>
                    <p className="text-gray-400 text-sm">Cliente verificado</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for pagination */}
      <style jsx>{`
        :global(.testimonial-bullet) {
          background: rgba(76, 214, 192, 0.3) !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }

        :global(.testimonial-bullet-active) {
          background: #4cd6c0 !important;
          transform: scale(1.2) !important;
        }

        :global(.swiper-pagination) {
          bottom: 0 !important;
        }

        :global(.line-clamp-3) {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
};

CommentCarousel.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  interval: PropTypes.number,
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
  maxStars: PropTypes.number,
};

export default CommentCarousel;
