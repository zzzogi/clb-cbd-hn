import React from "react";

interface ITestimonialCard {
  name: string;
  role: string;
  text: string;
  year: string;
}

const TestimonialCard = ({ name, role, text, year }: ITestimonialCard) => {
  return (
    <div className="min-w-[400px] max-w-[400px] bg-white p-6 rounded-lg shadow-md flex flex-col justify-between space-y-4 min-h-[100px] overflow-hidden">
      <div className="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/40" // Replace with actual profile image
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 mt-2 flex-grow">{text}</p>
      <p className="text-xs text-gray-400 mt-4">Written {year}</p>
    </div>
  );
};

export default TestimonialCard;
