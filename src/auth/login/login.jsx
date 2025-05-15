import React from 'react';

const Login = () => {

    return (
        <>
       <nav className="bg-white shadow py-4">
    <div className="container mx-auto flex justify-center items-center">
        <a href="#">
            <img
                className="h-12 w-auto"
                src="../../../public/logo.png"
                alt="Logo"
            />
        </a>
    </div>
</nav>

<div className="bg-[#f4eae4] min-h-screen overflow-hidden flex items-center justify-center py-10">
    <div className="container max-w-6xl mx-auto px-4 lg:px-[100px]">
        <div className="lg:flex lg:items-center lg:gap-10 bg-[#f4eae4] rounded-lg">
            
            {/* Image - hidden on small screens */}
            <img
                className="hidden lg:block object-cover object-center lg:w-[500px] h-96 lg:h-[30rem] rounded-[3rem]"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Login Visual"
            />

            {/* Form */}
            <div className="mt-8 lg:mt-0 lg:w-1/2">
                <form className="bg-[#f4eae4] shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-[#2d3d54] mb-6">Log in to Exclusive</h2>

                    {/* Email */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2d3d54] peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#2d3d54]"
                        >
                            Email address
                        </label>
                    </div>

                    {/* Password */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="password"
                            name="floating_password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2d3d54] peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#2d3d54]"
                        >
                            Password
                        </label>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="password"
                            name="repeat_password"
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2d3d54] peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_repeat_password"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#2d3d54]"
                        >
                            Confirm password
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#2d3d54] text-white font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-[#1e2a3a] transition"
                    >
                        Submit
                    </button>
                    <div className="text-right mt-4">
                        <a href="#" className="text-sm text-[#2d3d54] hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


        </>
    );
};

export default Login;