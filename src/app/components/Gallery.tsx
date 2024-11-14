import React from "react";

const ArtworkGallery = () => {
  // Mock data for artworks - replace with actual image URLs
  const artworks = [
    { id: 1, url: "https://via.placeholder.com/300x400", color: "bg-black" },
    { id: 2, url: "https://via.placeholder.com/300x400", color: "bg-gray-300" },
    {
      id: 3,
      url: "https://via.placeholder.com/300x400",
      color: "bg-orange-300",
    },
    { id: 4, url: "https://via.placeholder.com/300x400", color: "bg-gray-700" },
    {
      id: 5,
      url: "https://via.placeholder.com/300x400",
      color: "bg-purple-300",
    },
    { id: 6, url: "https://via.placeholder.com/300x400", color: "bg-blue-300" },
    { id: 7, url: "https://via.placeholder.com/300x400", color: "bg-gray-400" },
    { id: 8, url: "https://via.placeholder.com/300x400", color: "bg-gray-200" },
    { id: 9, url: "https://via.placeholder.com/300x400", color: "bg-blue-500" },
    { id: 10, url: "https://via.placeholder.com/300x400", color: "bg-red-500" },
    {
      id: 11,
      url: "https://via.placeholder.com/300x400",
      color: "bg-yellow-500",
    },
    {
      id: 12,
      url: "https://via.placeholder.com/300x400",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="bg-white text-gray-900 py-12 px-4 md:px-8 lg:px-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Explore Extraordinary Artwork
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Try our AI-powered Visual Search to find your perfect match. Select an
          artwork you like and let our AI-based visual search suggest similar
          pieces to consider.
        </p>
        <button className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition">
          Explore Artworks &rarr;
        </button>
      </div>

      {/* Artwork Grid */}
      <div
        className="grid gap-4 lg:gap-6"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {artworks.map((art) => (
          <div
            key={art.id}
            className={`aspect-w-2 aspect-h-3 overflow-hidden rounded-lg ${art.color} flex items-center justify-center`}
          >
            <img
              src={art.url}
              alt="Artwork"
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworkGallery;
