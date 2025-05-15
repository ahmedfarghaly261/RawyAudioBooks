
import { FaHeart, FaPlay, FaStar, FaRegStar } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdGraphicEq } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const feedbacks = [
    {
        name: "Floyd Miles",
        image: "/floyd.jpg", // use actual image path
        rating: 4,
        feedback:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        name: "Floyd Miles",
        image: "/floyd.jpg", // use actual image path
        rating: 4,
        feedback:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        name: "Floyd Miles",
        image: "/floyd.jpg", // use actual image path
        rating: 4,
        feedback:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
        name: "Ronald Richards",
        image: "/ronald.jpg",
        rating: 4,
        feedback:
            "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        name: "Savannah Nguyen",
        image: "/savannah.jpg",
        rating: 3,
        feedback:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...",
    },
];

const FeedbackCard = ({ name, image, rating, feedback }) => (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        <div className="flex items-start justify-between">
            <img src={image} alt={name} className="w-12 h-12 rounded-md object-cover" />
            <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) =>
                    i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
            </div>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mt-3">{name}</h3>
        <p className="text-sm text-gray-600 mt-2 leading-5">{feedback}</p>
    </div>
);

const BookPage = () => {
    return (
        <>

        <Header />

            {/* Book Details Section */}
            <div className="flex bg-[#f5e9e0] p-10 rounded-lg shadow-lg  max-w-8xl mx-auto font-sans">
                {/* Book Image */}
                <div className="w-1/3 flex justify-center items-start">
                    <img
                        src="../../../public/ss4.png" // replace with actual image path
                        alt="Dune Book Cover"
                        className="rounded-md w-[250px] h-auto"
                    />
                </div>

                {/* Book Info */}
                <div className="w-2/3 px-6 space-y-4">
                    {/* Title + Rating */}
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
                            Dune <FaHeart className="text-gray-500 text-lg" />
                        </h1>
                        <div className="text-yellow-500 flex items-center gap-1">
                            {"★".repeat(4)}
                            <span className="text-gray-500 ml-1 text-sm">(75)</span>
                        </div>
                        <p className="text-gray-500 font-semibold mt-1">Frank Herbert</p>
                    </div>

                    {/* Summary */}
                    <div>
                        <h2 className="font-bold text-lg text-gray-700">Summary</h2>
                        <p className="text-gray-700 text-sm">
                            Dune is set in the distant future amidst a feudal interstellar
                            society in which various noble houses control planetary{" "}
                            <span className="text-blue-600 underline cursor-pointer">fiefs</span>. It tells the story of young{" "}
                            <span className="text-blue-600 underline cursor-pointer">Paul Atreides</span>, whose family accepts the stewardship of the planet{" "}
                            <span className="text-blue-600 underline cursor-pointer">Arrakis</span>. While the planet is an inhospitable and sparsely populated
                            desert wasteland, it is the only source of{" "}
                            <span className="text-blue-600 underline cursor-pointer">melange</span>, or "spice", a drug that extends life and enhances
                            mental abilities...
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        <HiOutlineDocumentText className="text-2xl text-gray-700" />
                        <MdGraphicEq className="text-2xl text-gray-700" />
                        <FaPlay className="text-white bg-gray-800 p-2 rounded-full w-10 h-10" />
                        <span className="text-sm text-gray-600">sample</span>
                    </div>

                    {/* Comment Button */}
                    <button className="flex items-center gap-2 bg-yellow-200 text-green-700 px-4 py-1 rounded-md">
                        <BsPlusSquare />
                        <span className="text-sm font-semibold">comment page</span>
                    </button>

                </div>
            </div>
            {/* Feedback Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Feedback</h2>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                >
                    {feedbacks.map((fb, index) => (
                        <SwiperSlide key={index}>
                            <FeedbackCard {...fb} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        <Footer/>
        </>
    );
};

export default BookPage;
