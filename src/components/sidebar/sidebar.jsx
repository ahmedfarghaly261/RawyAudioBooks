// import { useState } from 'react';
// import { FaUser } from "react-icons/fa";
// import { IoIosAddCircle } from "react-icons/io";
// import { IoSettingsOutline } from "react-icons/io5";


// const Sidebar = () => {

//     const [openModal, setOpenModal] = useState(null);

//     const handleOpenModal = (label) => {
//         setOpenModal(label);
//     };

//     const handleCloseModal = () => {
//         setOpenModal(null);
//     };

//     const links = ['Add Book', ];
//     return (<>

//         <>
//             {/* Sidebar */}
//             <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r">
//                 <a href="#" className="mx-auto">
//                     <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
//                 </a>

//                 <div className="flex flex-col items-center mt-6 -mx-2">
//                     <img
//                         className="object-cover w-24 h-24 mx-2 rounded-full"
//                         src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=634&q=80"
//                         alt="avatar"
//                     />
//                     <h4 className="mx-2 mt-2 font-medium text-black">Ahmed</h4>
//                     <p className="mx-2 mt-1 text-sm font-medium text-gray-600">Ahmed@example.com</p>
//                     <p className="mx-2 mt-1 text-sm font-medium text-gray-600">Admin</p>
//                 </div>

//                 <div className="flex flex-col  flex-1 mt-8 ">
//                     <button className="flex items-center w-full px-4  py-4 text-gray-700 rounded hover:bg-gray-100">
//                         <FaUser className="mr-2" />
//                         <span>User Home</span>
//                     </button>

//                     {links.map((label) => (
//                         <button

//                             key={label}
//                             onClick={() => handleOpenModal(label)}
//                             className="flex items-center px-4 py-4 text-left text-gray-700 rounded hover:bg-gray-100 border-b-3"
//                         >
//                             <IoIosAddCircle className="mr-2 text-xl" />
//                             <span>{label}</span>
//                         </button>
//                     ))}
//                         <button className="flex items-center w-full px-4  py-4 text-gray-700 rounded hover:bg-gray-100">
//                         <IoSettingsOutline className="mr-2" />
//                         <span>Setting</span>
//                     </button>
//                 </div>
//             </aside>

//             {/* Modal */}
//             {openModal && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
//                     <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-xl font-semibold text-gray-800">{openModal} Form</h2>
//                             <button onClick={handleCloseModal} className="text-gray-500 hover:text-red-600 text-2xl">
//                                 &times;
//                             </button>
//                         </div>

//                         <form className="space-y-4">
//                             <div>
//                                 <label className="block text-sm text-gray-700">BookID</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Your name"
//                                     className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm text-gray-700">Book Name</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Your name"
//                                     className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm text-gray-700">Book pages</label>
//                                 <input
//                                     type="email"
//                                     placeholder="Book pages"
//                                     className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm text-gray-700 mb-1">Book Category</label>
//                                 <select
//                                     className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                                 >
//                                     <option value="">Select a category</option>
//                                     <option value="fiction">Fiction</option>
//                                     <option value="non-fiction">Non-fiction</option>
//                                     <option value="science">Science</option>
//                                     <option value="history">History</option>
//                                     <option value="fantasy">Fantasy</option>
//                                     <option value="biography">Biography</option>
//                                 </select>
//                             </div>
//                             <div className="text-right">
//                                 <button
//                                     type="submit"
//                                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                                 >
//                                     Submit
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </>


//         {/* <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l ">
//             <a href="#" className="mx-auto">
//                 <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
//             </a>

//             <div className="flex flex-col items-center mt-6 -mx-2">
//                 <img
//                     className="object-cover w-24 h-24 mx-2 rounded-full"
//                     src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=634&q=80"
//                     alt="avatar"
//                 />
//                 <h4 className="mx-2 mt-2 font-medium dark:text-black">John Doe</h4>
//                 <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
//                 <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">Admin</p>
//             </div>

//             <div className="flex flex-col justify-between flex-1 mt-6">
//                 <nav>
//                     <SidebarLink
//                         active
//                         icon={
//                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 
//                                 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 
//                                 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 
//                                 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 
//                                 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
//                                       strokeLinejoin="round" />
//                             </svg>
//                         }
//                         label="Dashboard"
//                         href="#"
//                     />

//                     <SidebarLink
//                         icon={
//                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 
//                                 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 
//                                 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
//                                       strokeLinejoin="round" />
//                                 <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 
//                                 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
//                                       strokeLinejoin="round" />
//                             </svg>
//                         }
//                         label="Accounts"
//                         href="#"
//                     />

//                     <SidebarLink
//                         icon={
//                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 
//                                 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 
//                                 14V17C3 18.1046 3.89543 19 5 
//                                 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 
//                                 13.1046 19 12C19 10.8954 19.8954 10 21 
//                                 10V7C21 5.89543 20.1046 5 19 5H5Z"
//                                       stroke="currentColor" strokeWidth="2" strokeLinecap="round"
//                                       strokeLinejoin="round" />
//                             </svg>
//                         }
//                         label="Tickets"
//                         href="#"
//                     />

//                     <SidebarLink
//                         icon={
//                             <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
//                                  xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 
//                                 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 
//                                 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 
//                                 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 
//                                 10.3246C21.4391 10.751 21.4391 13.249 19.6827 
//                                 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 
//                                 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 
//                                 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 
//                                 19.6827C13.249 21.4391 10.751 21.4391 10.3246 
//                                 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 
//                                 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 
//                                 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 
//                                 13.6754C2.5609 13.249 2.5609 10.751 4.31731 
//                                 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 
//                                 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 
//                                 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 
//                                 4.31731Z" stroke="currentColor" strokeWidth="2"
//                                       strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 
//                                 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 
//                                 10.3431 15 12Z" stroke="currentColor" strokeWidth="2"
//                                       strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                         }
//                         label="Settings"
//                         href="#"
//                     />
//                 </nav>
//             </div>
//         </aside> */}
//     </>
//     );
// };

// // Optional helper component for clarity and reusability
// const SidebarLink = ({ icon, label, href, active }) => (
//     <a
//         href={href}
//         className={`flex items-center px-4 py-2 mt-5 text-sm font-medium transition-colors duration-300 transform rounded-lg ${active
//             ? "text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
//             : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200"
//             }`}
//     >
//         {icon}
//         <span className="mx-4">{label}</span>
//     </a>
// );

// export default Sidebar;
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";


const Sidebar = () => {
    const [openModal, setOpenModal] = useState(null);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const handleOpenModal = (label) => setOpenModal(label);
    const handleCloseModal = () => setOpenModal(null);
    const toggleSidebar = () => setSidebarVisible((prev) => !prev);

    const links = ["Add Book"];

    return (
        <>
            {/* Toggle Button - Only on small screens */}
            <div className="md:hidden p-4">
                <button
                    onClick={toggleSidebar}
                    className="px-4 py-2 text-2xl  text-black rounded-md"
                >
                    <CiMenuFries />

                </button>
            </div>

            {/* Background overlay when sidebar is open (small screens only) */}
            {sidebarVisible && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white border-r px-4 py-8 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out
                        ${sidebarVisible ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
                onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing sidebar
            >
                <a href="#" className=" ">
                   <center> 
                        <img
                            className="w-[120px] h-[50px] sm:h-[50px]"
                            src="../../../public/logo.png"
                            alt="Logo"
                        />
                    </center>
                  
                </a>

                <div className="flex flex-col items-center mt-16 mx-2">
                    <img
                        className="object-cover w-24 h-24 mx-2 rounded-full"
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=634&q=80"
                        alt="avatar"
                    />
                    <h4 className="mx-2 mt-2 font-medium text-black">Ahmed</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
                        Ahmed@example.com
                    </p>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600">Admin</p>
                </div>

                <div className="flex flex-col flex-1 mt-8">
                    <button className="flex items-center w-full px-4 py-4 text-gray-700 rounded hover:bg-gray-100">
                        <FaUser className="mr-2" />
                        <span>User Home</span>
                    </button>

                    {links.map((label) => (
                        <button
                            key={label}
                            onClick={() => handleOpenModal(label)}
                            className="flex items-center px-4 py-4 text-left text-gray-700 rounded hover:bg-gray-100"
                        >
                            <IoIosAddCircle className="mr-2 text-xl" />
                            <span>{label}</span>
                        </button>
                    ))}

                    <button className="flex items-center w-full px-4 py-4 text-gray-700 rounded hover:bg-gray-100">
                        <IoSettingsOutline className="mr-2" />
                        <span>Setting</span>
                    </button>
                </div>
            </aside>

            {/* Modal */}
            {openModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {openModal} Form
                            </h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-500 hover:text-red-600 text-2xl"
                            >
                                &times;
                            </button>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-700">BookID</label>
                                <input
                                    type="text"
                                    placeholder="Book ID"
                                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700">Book Name</label>
                                <input
                                    type="text"
                                    placeholder="Book Name"
                                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700">Book Pages</label>
                                <input
                                    type="number"
                                    placeholder="Book pages"
                                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Book Category</label>
                                <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                                    <option value="">Select a category</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="non-fiction">Non-fiction</option>
                                    <option value="science">Science</option>
                                    <option value="history">History</option>
                                    <option value="fantasy">Fantasy</option>
                                    <option value="biography">Biography</option>
                                </select>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
