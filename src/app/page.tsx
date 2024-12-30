/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
// import FeatureCard from ""
import Image from "next/image";
import Divider from "./components/Devider";
import HeroSection from "./components/HeroSecion";
import FeatureCard from "./components/FeatureCard";
import FeatureSection from "./components/FeatureSection";
import Gallery from "./components/Gallery";
import EducationFeatures from "./components/Testimonials";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      <HeroSection />

      {/* Navigation Dots */}
      {/* <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div> */}
      {/* Features Section */}
      <div className="w-screen bg-purple-50 py-20 mt-20 -mx-[50vw] relative left-1/2 right-1/2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore our features</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Atellen tesque neque
              semper odio massa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              }
              title="Multi-color Pet"
              description="Lorem ipsum dolor sit amet consectetur. It is Atellen test."
              bgColor="bg-white"
            />
            <FeatureCard
              icon={
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              }
              title="Quality Pet"
              description="Lorem ipsum dolor sit amet consectetur. It is Atellen test."
              bgColor="bg-white"
            />
            <FeatureCard
              icon={
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              }
              title="Doctor Advise"
              description="Lorem ipsum dolor sit amet consectetur. It is Atellen test."
              bgColor="bg-white"
            />
            <FeatureCard
              icon={
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              }
              title="Home Delivery"
              description="Lorem ipsum dolor sit amet consectetur. It is Atellen test."
              bgColor="bg-white"
            />
          </div>
        </div>
      </div>
      {/* <EducationFeatures /> */}
      <Gallery />
      <Divider />
      <FeatureSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
