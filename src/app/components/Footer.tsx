import React from "react";

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 mr-2"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-screen bg-purple-50 py-20 mt-20 -mx-[50vw] relative left-1/2 right-1/2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Address</h3>
          <address className="text-gray-400 text-sm">
            Number 3891 Ranchview Dr.
            <br />
            Richardson, California 62639,
            <br />
            Amerika Serikat Country
          </address>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Phone Number</h3>
          <p className="text-gray-400 text-sm">(270) 555-0467</p>
          <p className="text-gray-400 text-sm">(270) 555-0443</p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Programs</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center">
              <ArrowRightIcon />
              Brain training
            </li>
            <li className="flex items-center">
              <ArrowRightIcon />
              Creativity and Innovation
            </li>
            <li className="flex items-center">
              <ArrowRightIcon />E Learning
            </li>
            <li className="flex items-center">
              <ArrowRightIcon />
              School Holidays
            </li>
            <li className="flex items-center">
              <ArrowRightIcon />
              Online Modules
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">General</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center">
              <ArrowRightIcon />
              Carrers
            </li>
            <li className="flex items-center">
              <ArrowRightIcon />
              About Us
            </li>
            <li className="flex items-center">
              <ArrowRightIcon />
              Repository
            </li>
            <li className="flex items-center">
              <ArrowRightIcon />
              Student Registrasi
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">FAQ</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center">
              <ArrowRightIcon />
              Online Chat
            </li>
            <li className="flex items-center">
              <ArrowRightIcon />
              Call Admin
            </li>
            <li className="flex items-center">
              <ArrowRightIcon />
              Leave Message
            </li>
          </ul>
        </div>
        <div className="col-span-5 text-center text-gray-400 text-sm mt-12">
          Copy Right Pauds 2021-2022, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
