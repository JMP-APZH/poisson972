import React from 'react'

const Registration = () => {
    return (
        <div className="min-h-screen flex items-center justify-center
                        bg-blue-400">
            <div className="bg-white p-16 rounded shadow-2xl
                            w-2/3">

                <h2 className="text-3xl font-bold mb-8 text-purple-700">
                    Create Your Account
                </h2>

                <form className="space-y-5">
                    <div>
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Name 
                        </label>
                        <input 
                            type="text" 
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500"/>
                    </div>

                    <div>
                        <label className="block mb-1 font-bold text-gray-500"> 
                            Email 
                        </label>
                        <input 
                            type="email"
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500" 
                        />
                    </div>

                    <div>
                        <label 
                            className="block mb-1 font-bold text-gray-500"> 
                            Password 
                        </label>
                        <input 
                            type="password"
                            className="w-full border-2 border-gray-200 p-3 rounded 
                                    outline-none focus:border-purple-500" 
                            />
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" id="agree" className="mr-2"/>
                        <label for="agree" className="ml-2 text-gray-700 text-sm"> 
                           I agree to the terms and privacy 
                        </label>
                        
                    </div>

                    <button 
                    className="block w-full bg-yellow-600 
                                hover:bg-yellow-300 p-4 rounded 
                                text-purple-700 transition duration-300
                                hover:text-purple-500"> Sign Up </button>

                </form>

            </div>
        </div>
    )
}

export default Registration
