import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative bg-white shadow">
            <div className="container px-9 py-6 mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#">
                        <img
                            className="w-auto h-12 sm:h-12"
                            src="../../../public/logo.png"
                            alt=""
                        />
                    </a>

                    {/* Desktop center nav links */}
                    <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#" className="text-gray-700 text-xl hover:bg-gray-100 px-3 py-2 rounded-md">
                                   <Link to={"/"}>H o m e</Link> 
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#314157] text-xl hover:bg-gray-100 px-3 py-2 rounded-md">
                                   <Link to={"/Categories"} >c a t e g o r i e s  </Link>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 text-xl hover:bg-gray-100 px-3 py-2 rounded-md">
                                    w r i t e r s
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 text-xl hover:bg-gray-100 px-3 py-2 rounded-md">
                                   <Link to={"/contact_us"}> c o n t a c t   u s</Link> 
                                    
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop right icons */}
                    <div className="hidden lg:flex lg:items-center space-x-4">
                        <button
                            className="text-gray-600 hover:text-gray-700 focus:outline-none"
                            aria-label="show notifications"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 17H20L18.6 15.6C18.2 15.2 18 14.7 18 14.2V11C18 8.4 16.3 6.2 14 5.3V5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5V5.3C7.7 6.2 6 8.4 6 11V14.2C6 14.7 5.8 15.2 5.4 15.6L4 17H9V18C9 19.7 10.3 21 12 21C13.7 21 15 19.7 15 18V17Z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>




                        {/* for end-users */}
                        <Link to={"/registration"}>
                        <a href="javascript:;"
                            class="relative inline-flex rounded-lg items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold bg-[#e3d8d0] text-black transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 hover:bg-[#f5c9aa] group">

                            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg class="w-5 h-5 text-black" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M14.9385 6L20.9999 12.0613M20.9999 12.0613L14.9385 18.1227M20.9999 12.0613L3 12.0613"
                                        stroke="currentcolor" stroke-width="1.6" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span
                                class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg class="w-5 h-5 text-[#2d3d54]" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M14.9385 6L20.9999 12.0613M20.9999 12.0613L14.9385 18.1227M20.9999 12.0613L3 12.0613"
                                        stroke="currentcolor" stroke-width="1.6" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span
                                class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#2d3d54]">Join us
                            </span>
                        </a>
                        </Link>
                        

                        {/* for login users */}
                        {/* <button type="button" className="flex items-center focus:outline-none">
                            <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                <img
                                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                    className="object-cover w-full h-full"
                                    alt="avatar"
                                />
                            </div>
                        </button> */}


                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 hover:text-gray-600 focus:outline-none"
                            aria-label="toggle menu"
                        >
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-4 lg:hidden">
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <a href="#" className="block text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100">
                                    H o m e
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100">
                                    c a t e g o r i e s
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100">
                                    w r i t e r s
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100">
                                    c o n t a c t u s
                                </a>
                            </li>
                        </ul>

                        {/* Mobile icons */}
                        <div className="mt-4 flex items-center justify-end space-x-4">
                            <button
                                className="text-gray-600 hover:text-gray-700 focus:outline-none"
                                aria-label="show notifications"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 17H20L18.6 15.6C18.2 15.2 18 14.7 18 14.2V11C18 8.4 16.3 6.2 14 5.3V5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5V5.3C7.7 6.2 6 8.4 6 11V14.2C6 14.7 5.8 15.2 5.4 15.6L4 17H9V18C9 19.7 10.3 21 12 21C13.7 21 15 19.7 15 18V17Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </button>

                            <button type="button" className="flex items-center focus:outline-none">
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                        className="object-cover w-full h-full"
                                        alt="avatar"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header;
