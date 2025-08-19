
import React from "react";
import background from './assets/background.png';
import seal from './assets/seal.png';
import breakingNews from './assets/breakingNews.png';

function RegisterPage() {
  return (

    
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}>

      {/* Card Container */}
      <div className="flex w-full max-w-4xl bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden">
              {/* Left Side */}
              <div className="w-1/2 p-6 flex items-center justify-center bg-yellow-100">
                <img src={breakingNews} alt="Breaking News" className="w-full rounded-md" />
              </div>

        {/* Right Section - Form */}
        <div className="flex flex-col items-center justify-center w-1/2 p-8">
          {/* Seal */}
          <img src={seal} alt="Seal" className="h-20 mb-4" />

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800">
            REGISTER
          </h2>

          {/* Form */}
          <form className="w-full flex flex-col items-center space-y-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 rounded-md border border-gray-300"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-2 rounded-md border border-gray-300"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full p-2 rounded-md border border-gray-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-md border border-gray-300"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 rounded-md border border-gray-300"
            />

            {/* Register Button */}
            <button
              type="submit"
              className="bg-yellow-300 px-6 py-2 rounded-full font-semibold text-gray-800 hover:bg-yellow-400 transition"
            >
              REGISTER
            </button>

            {/* Back to Login */}
            <a href="#" className="text-sm italic text-gray-700 hover:underline">
              Back to Login
            </a>
          </form>

          {/* Maintenance Register */}
          <button className="mt-4 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition">
            Maintenance Personnel Register ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
