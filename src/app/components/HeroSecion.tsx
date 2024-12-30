"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const images = [
    "/hero-main/hero-1.jpg",
    "/hero-main/hero-2.jpg",
    "/hero-main/hero-3.jpg",
    "/hero-main/hero-4.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            The best place to get your favorite pet without any doubt
          </h1>
          <p className="text-gray-200 mb-8 text-lg">
            Lorem ipsum dolor sit amet consectetur. At pellentesque neque semper
            odio massa.
          </p>
          <button className="px-8 py-3 bg-white text-purple-800 rounded-full hover:bg-gray-100 font-medium inline-flex items-center space-x-2 transition-colors">
            Get Started Now
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
