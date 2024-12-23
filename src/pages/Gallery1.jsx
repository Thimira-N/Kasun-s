import React from 'react';
import GalleryCarousel from '../components/GalleryCarousel';

const Gallery = () => (
  <div className="bg-gradient-to-b from-[#EAE0D5] via-[#F6F4F1] to-white min-h-screen font-sans leading-relaxed">
    {/* Hero Section */}
    <header className="relative bg-[#3F3F3F] text-white h-[400px] flex flex-col items-center justify-center space-y-6">
      {/* Search Bar */}
      <div className="absolute top-4 left-6 text-lg font-bold">
        <span>Kasun's</span>
      </div>
      <div className="absolute top-4 right-6 flex items-center space-x-4">
        <a href="/signin" className="hover:underline">Sign In</a>
        <a
          href="/signup"
          className="bg-[#C6AC8E] text-white px-4 py-2 rounded-full hover:bg-[#5E503F] transition-all duration-300"
        >
          Sign Up
        </a>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
        Discover Timeless Creations
      </h1>
      <p className="text-lg font-medium">
        Handcrafted with tradition, designed for elegance.
      </p>
      {/* Search and Filters */}
      <div className="flex items-center space-x-4 mt-6">
        <input
          type="text"
          placeholder="Search exquisite creations..."
          className="w-80 px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#C6AC8E]"
        />
        <button className="px-4 py-2 bg-[#C6AC8E] text-white rounded-lg shadow hover:bg-[#5E503F] transition">
          <i className="fas fa-search"></i>
        </button>
        <select className="px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:outline-none">
          <option>All</option>
          <option>Category 1</option>
          <option>Category 2</option>
        </select>
        <select className="px-4 py-2 rounded-lg border border-gray-300 shadow-md focus:outline-none">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </header>

    {/* Collection Section */}
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-[#22333B] mb-8">
        Our Curated Collection
      </h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
        Discover a selection of our most cherished handmade products, behind-the-scenes stories, and unforgettable moments from our workshops. Each piece reflects the passion and skill of our artisans.
      </p>
      <div className="relative max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        <GalleryCarousel />
      </div>
    </div>
  </div>
);

export default Gallery;
