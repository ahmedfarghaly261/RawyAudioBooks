import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const ContactUs = () => {
    return (
        <>
        <Header/>
        <section className='bg-[#f4eae4] py-8 px-4 sm:px-6 lg:px-8'>
              <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-[#fff] rounded-lg shadow-lg lg:max-w-4xl">
                <div
                    className="hidden bg-cover lg:block lg:w-1/2"
                >
                    <img src="./../../../public/contactus.png" alt="" className='w-full h-full' />
                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center ">
                        <img
                            className="w-32 h-32 sm:h-8"
                            src="./../../../public/logo.png"
                            alt="Logo"
                        />
                    </div>

                    <p className="mt-3 text-xl text-center text-gray-600">
                        Contact Us
                    </p>

                    <div className="mt-4">
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            className="block w-full px-4 py-2 bg-white border rounded-lg text-gray-700 border-gray-300 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="emailAddress" className="block mb-2 text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            id="emailAddress"
                            type="email"
                            className="block w-full px-4 py-2 bg-white border rounded-lg text-gray-700 border-gray-300 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <input
                            id="subject"
                            type="text"
                            className="block w-full px-4 py-2 bg-white border rounded-lg text-gray-700 border-gray-300 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Message subject"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="block w-full px-4 py-2 bg-white border rounded-lg text-gray-700 border-gray-300 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

        </section>
<br />
        <Footer/>
        </>
    );
};

export default ContactUs;