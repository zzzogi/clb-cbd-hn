"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const images = [
    "/hero-main/hero-1.jpg",
    "/hero-main/hero-2.jpg",
    "/hero-main/hero-3.jpg",
    "/hero-main/hero-4.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const phrases = [
    "CHỈ TIẾN - KHÔNG LÙI",
    "KHÔNG NGỪNG PHÁT TRIỂN",
    "VƯƠN XA - DẪN ĐẦU",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(phraseInterval);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Lighter Black Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}

      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-['Playfair_Display'] text-7xl mb-6 tracking-wide text-white [text-shadow:_4px_4px_10px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform duration-300"
          >
            CLB CÁN BỘ ĐỘI HÀ NỘI
          </motion.h1>
          <motion.h2
            key={currentPhraseIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-4xl font-semibold mb-8 tracking-wide text-white [text-shadow:_2px_2px_6px_rgba(0,0,0,0.4)]"
          >
            {phrases[currentPhraseIndex]}
          </motion.h2>
          {/* <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-md hover:from-green-600 hover:to-emerald-600 font-medium inline-flex items-center space-x-2 transition-all duration-300 hover:shadow-lg"
          >
            Khám phá trang
            <svg
              className="w-5 h-5 ml-2 animate-bounce"
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
          </motion.button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
