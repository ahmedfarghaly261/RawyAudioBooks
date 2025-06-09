
import React, { useState, useContext } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";

import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    const [openModal, setOpenModal] = useState(null);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleOpenModal = (label) => setOpenModal(label);
    const handleCloseModal = () => setOpenModal(null);
    const toggleSidebar = () => setSidebarVisible((prev) => !prev);

    const handleLogout = () => {
        logout();
        alert('Logged out');
        navigate('/');
    };

    const links = ["Add Book"];

    return (
        <>
            {/* Toggle Button - Only on small screens */}
            <div className="md:hidden py-6 absolute  ">
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
                    <h4 className="mx-2 mt-2 font-medium text-black">Admin</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
                        Ahmed@admin.com
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
                    <button
                        className="flex items-center text-red-500 w-full px-4 py-4  rounded hover:bg-gray-100"
                        onClick={handleLogout}
                    >
                        <SlLogout className="mr-2" />
                        <span>Logout</span>
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
                                <label className="block text-sm text-gray-700">Book Image</label>
                                <input
                                    type="file"
                                    placeholder="Book Name"
                                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700"> Book description</label>
                                <input
                                    type="number"
                                    placeholder="Book description"
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
