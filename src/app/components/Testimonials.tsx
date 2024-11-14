"use client";
import React, { useState, useEffect } from "react";
import FeatureSlide from "./FeatureSlide";
import TestimonialCardV2 from "./TestimonialCardv2";

const EducationFeatures = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      title: "Flexible Learning Schedule",
      subtitle:
        "Choose your preferred time slots and learn at your own pace with our adaptive scheduling system.",
      image: "/api/placeholder/500/500",
    },
    {
      title: "Interactive Virtual Classrooms",
      subtitle:
        "Engage in real-time with instructors and peers through our immersive digital learning environment.",
      image: "/api/placeholder/500/500",
    },
    {
      title: "Personalized Learning Path",
      subtitle:
        "Get a customized curriculum that adapts to your progress and learning style.",
      image: "/api/placeholder/500/500",
    },
    {
      title: "Expert Instructor Support",
      subtitle:
        "Access to qualified educators who provide guidance and support throughout your journey.",
      image: "/api/placeholder/500/500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent Guardian",
      content:
        "The flexible scheduling has made it so much easier for my child to balance education with other activities.",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Michael Chen",
      role: "Student Guardian",
      content:
        "The personalized approach has significantly improved my child's engagement with learning.",
      image: "/api/placeholder/100/100",
    },
  ];

  // Auto-sliding functionality
  useEffect(() => {
    let intervalId: any;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % features.length);
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, features.length]);

  // Pause auto-sliding when user interacts
  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-playing after 5 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Navigation functions
  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Feature Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureSlide
                key={index}
                title={feature.title}
                subtitle={feature.subtitle}
                isActive={activeSlide === index}
                number={index + 1}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-4/5 h-4/5 bg-yellow-300 rounded-full" />
            <img
              src={features[activeSlide].image}
              alt={features[activeSlide].title}
              className="w-full h-full object-cover rounded-2xl transition-opacity duration-300"
            />
            <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 bg-purple-200 rounded-full" />
            <div className="absolute -z-10 top-1/2 -right-4 w-12 h-12 bg-red-200 rounded-full" />
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">What our guardians say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCardV2
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
              />
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-end items-center gap-4 mt-8">
            <button
              className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-purple-500"
              onClick={goToPrevSlide}
            >
              ←
            </button>
            <button
              className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center hover:bg-purple-600"
              onClick={goToNextSlide}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationFeatures;
