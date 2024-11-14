import React from "react";

const FeatureSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-6xl p-6 bg-white my-10">
      {/* Left Text Section */}
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <h2 className="text-sm font-semibold text-pink-500 uppercase mb-2">
          Features
        </h2>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Specify the time and day of private class
        </h1>
        <p className="text-gray-600 mb-6">
          Due to the availability of our tutors in a variety of time slots that
          are totally tailored to each student&apos;s specific pace, our
          scheduling system enables meticulous decision-making about time and
          student compatibility.
        </p>
        <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition duration-200">
          Search Teachers
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative lg:w-1/2 flex justify-center">
        <div className="w-48 h-48 bg-yellow-400 rounded-full overflow-hidden relative">
          <img
            src="https://via.placeholder.com/150" // Replace this with actual image path
            alt="Feature"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Floating dots */}
        <span className="absolute -top-4 -left-4 w-3 h-3 bg-blue-500 rounded-full"></span>
        <span className="absolute top-4 -right-4 w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="absolute -bottom-4 right-10 w-3 h-3 bg-purple-500 rounded-full"></span>
      </div>
    </div>
  );
};

export default FeatureSection;
