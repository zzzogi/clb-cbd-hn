"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <div className="w-full max-w-6xl my-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        What did the guardians say to us
      </h2>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        navigation
        className="testimonial-swiper"
        slidesOffsetBefore={40}
        style={{ padding: 10 }}
        scrollbar
        autoplay={{
          delay: 2000,
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <TestimonialCard
            name="Valentina Putri"
            role="Student Guardian"
            text="Simple, secure access to digital education children have simple and secure access. The digital learning process is one of the benefits of relaxed learning at home."
            year="2022"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <TestimonialCard
            name="Jessica Marley"
            role="Student Guardian"
            text="Simple, secure access to digital education children have simple and secure access. The digital learning process is one of the benefits of relaxed learning at home."
            year="2022"
          />
        </SwiperSlide>

        {/* Add more slides as needed */}
        <SwiperSlide>
          <TestimonialCard
            name="John Doe"
            role="Student Guardian"
            text="The digital platform is incredibly user-friendly, and it gives our children the flexibility they need for their studies."
            year="2022"
          />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialCard
            name="Alice Johnson"
            role="Student Guardian"
            text="An excellent platform with robust features. It provides a secure and relaxed learning environment for our children."
            year="2022"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
