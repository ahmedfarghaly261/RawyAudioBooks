import { Link } from "react-router-dom";



const books = [
    {
        image: "./../../../public/tr-1.png", // Replace with your own image URLs
        title: "BOOK 1",
        author: "Ahmed Fathy",
        rating: 88,
    },
    {
        image: "./../../../public/tr-2.png",
        title: "BOOK 1",
        author: "Ahmed Fathy",
        rating: 88,
    },
    {
        image: "./../../../public/tr-3.png",
        title: "BOOK 1",
        author: "Ahmed Fathy",
        rating: 88,
    },
    {
        image: "./../../../public/tr-5.png",
        title: "BOOK 1",
        author: "Ahmed Fathy",
        rating: 88,
    },
    {
        image: "./../../../public/tr-1.png",
        title: "BOOK 1",
        author: "Ahmed Fathy",
        rating: 88,
    },
    // Repeat to match the 10 items
    {
         image: "./../../../public/tr-2.png",
        title: "BOOK 1",
        author: "Ahmed Fathy",
        rating: 88,
    },
    {
        image: "./../../../public/tr-3.png",
        title: "BOOK 1",
        author: "Ahmed Fathy",
        rating: 88,
    },
    {
        image: "./../../../public/tr-4.png",
        title: "BOOK 1",
        author: "Ahmed Fathy",
        rating: 88,
    },
    {
        image: "./../../../public/tr-5.png",
        title: "BOOK 1",
        author: "Ahmed Fathy",
        rating: 88,
    },

];

function For_U() {

    return (
        <div className="p-6 bg-[#f4eae4] mb-10 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">FOR YOU</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {books.map((book, index) => (
                    <Link key={index} to="/book">
                        <div className="min-w-[160px] sm:min-w-[180px] md:min-w-[180px] lg:w-[190px] mx-10 mt-2 bg-[#e3e2e2] rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
                            <img
                                className="w-full h-64 object-cover"
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
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center space-x-1">
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
                                        <span className="text-xs text-gray-500 ml-1">({book.reviews})</span>
                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )


    // return (
    //     <>
    //         <div className="p-8 bg-gray-100 min-h-screen">
    //             <h2 className="text-3xl font-extrabold text-gray-800 mb-8">FOR YOU</h2>
    //             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    //                 {books.map((book, index) => (
    //                     <div
    //                         key={index}
    //                         className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center"
    //                     >
    //                         <img
    //                             src={book.image}
    //                             alt={book.title}
    //                             className="w-full h-[200px] object-cover rounded-md mb-2"
    //                         />
    //                         <h3 className="text-sm font-semibold text-gray-900">{book.title}</h3>
    //                         <p className="text-xs text-gray-500">{book.author}</p>
    //                         <div className="flex items-center text-xs mt-1 text-yellow-500">
    //                             <span>★★★★★</span>
    //                             <span className="text-gray-600 ml-1">({book.rating})</span>
    //                         </div>
    //                         <div className="flex justify-center mt-2 space-x-2">
    //                             <button className="bg-gray-800 text-white text-xs px-3 py-1 rounded">
    //                                 Listen
    //                             </button>
    //                             <button className="text-gray-500 text-lg hover:text-red-500">&hearts;</button>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </>
    // )

}
export default For_U;