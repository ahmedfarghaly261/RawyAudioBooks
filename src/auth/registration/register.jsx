import { Link } from "react-router-dom";

function Register() {
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


            <div className="login-container">
                <section class="bg-[#f4eae4] ">
                    <div class="container lg:px-[150px] py-10 mx-auto ">
                        <div class="lg:-mx-6 lg:flex lg:items-center">
                            <img 
                                class="hidden lg:block object-cover object-center lg:w-[600px] lg:mx-5 mx-11 h-96 lg:h-[30rem] rounded-[3rem]"
                                src="../../../public/register.png"
                                alt=""
                            />

                            <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 mx-10 my-4">

                                <form class="max-w-md mx-auto border-black">
                                    <h1 className='text-3xl font-300 text-[#2d3d54]'>Create an account</h1>
                                    <br />
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#2d3d54] dark:border-gray-600 dark:focus:border-[#2d3d54] focus:outline-none focus:ring-0 focus:border-[#2d3d54] peer" placeholder=" " required />
                                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#2d3d54] peer-focus:dark:text-[#2d3d54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#2d3d54] dark:border-gray-600 dark:focus:border-[#2d3d54] focus:outline-none focus:ring-0 focus:border-[#2d3d54] peer" placeholder=" " required />
                                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#2d3d54] peer-focus:dark:text-[#2d3d54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#2d3d54] dark:border-gray-600 dark:focus:border-[#2d3d54] focus:outline-none focus:ring-0 focus:border-[#2d3d54] peer" placeholder=" " required />
                                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#2d3d54] peer-focus:dark:text-[#2d3d54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#2d3d54] dark:border-gray-600 dark:focus:border-[#2d3d54] focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-[#2d3d54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                    </div>

                                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#2d3d54] dark:hover:bg-[#2d3d54] dark:focus:ring-[#2d3d54]">Submit</button>
                                    <span className='float-end'> already have an account?  
                                        <Link to={"/login"}>
                                        <a href="" className="underline p-2" > login</a>
                                        </Link>
                                        
                                        
                                    </span>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Register;