import bookSlides from "../../data/cardData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function CardList() {
    return (
        <div className="w-full px-4">
            <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={50}
                grabCursor={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
                    },
                    480: {
                        slidesPerView:2 ,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                    1280: {
                        slidesPerView: 6,
                    },
                }}
                className="my-8"
            >
                {bookSlides.map((book, index) => (

                    <SwiperSlide key={index}>
                        <Link to={"/book"}>
                          <a href="" >
                            <div className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] bg-[#f4eae4] rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
                                <img
                                    className="w-full h-60 object-cover"
                                    src={book.image}
                                    alt={book.title}
                                />
                                <div className="p-3">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-sm font-bold text-gray-800">
                                            {book.title}
                                        </h3>
                                        <button className="text-xs px-3 py-0.5 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
                                            listen
                                        </button>
                                    </div>
                                    <p className="text-sm text-[#7B7B7B] mt-1">{book.author}</p>
                                    <div className="flex items-center space-x-1 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                className={`w-4 h-4 ${i < book.rating ? "text-yellow-400" : "text-gray-300"}`}
                                            >
                                                <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z" />
                                            </svg>
                                        ))}
                                        <span className="text-xs text-gray-500 ml-1">
                                            ({book.reviews})
                                        </span>
                                        <span className=" float-right mt-2 px-[25px]">
                                            <button className="text-gray-400 hover:text-red-500 transition">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </span>

                                    </div>
                                    {/* <span className="mb-2 text-right">
                                    <button className="text-gray-400 hover:text-red-500 transition">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                    </button>
                                </span> */}
                                </div>
                            </div>
                        </a>
                        </Link>
                      

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardList;
