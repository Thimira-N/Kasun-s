import React, { useState } from 'react';
import productImages from '../assets/images/Products/productImages';
import ProductCard from '../components/ProductCard';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Price: Low to High');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    // { id: 1, name: 'Pottery Vase', price: 1500, category: 'Home Décor', image: '/assets/images/product1.jpg', rating: 4.5 },
    { id: 1, name: 'Pottery Vase', price: 1500, category: 'Home Décor', image: productImages.PotteryVase, rating: 4.5 },
    { id: 2, name: 'Woven Basket', price: 1200, category: 'Home Décor', image: productImages.WovenBasket, rating: 4.0 },
    { id: 3, name: 'Handwoven Rug', price: 4500, category: 'Home Décor', image: productImages.HandwovenRug, rating: 5.0 },
    { id: 4, name: 'Ceramic Bowl Set', price: 3500, category: 'Home Décor', image: productImages.CeramicBowlSet, rating: 3.8 },
    { id: 5, name: 'Bamboo Lamp', price: 2500, category: 'Accessories', image: productImages.BambooLamp, rating: 4.2 },
    { id: 6, name: 'Essential Oil Set', price: 1000, category: 'Skincare', image: productImages.EssentialOilSet, rating: 4.9 },
    { id: 7, name: 'Handmade Soap Pack', price: 800, category: 'Skincare', image: productImages.HandmadeSoapPack, rating: 4.3 },
    { id: 8, name: 'Clay Mask', price: 1500, category: 'Skincare', image: productImages.ClayMask, rating: 4.7 },
    { id: 9, name: 'Cotton Tote Bag', price: 2000, category: 'Clothing', image: productImages.CottonToteBag, rating: 4.1 },
    { id: 10, name: 'Linen Shirt', price: 3000, category: 'Clothing', image: productImages.LinenShirt, rating: 4.6 },
    { id: 11, name: 'Leather Wallet', price: 3200, category: 'Accessories', image: productImages.LeatherWallet, rating: 4.8 },
    { id: 12, name: 'Silver Earrings', price: 2500, category: 'Accessories', image: productImages.SilverEarrings, rating: 4.9 },
    { id: 13, name: 'Wool Blanket', price: 5000, category: 'Home Décor', image: productImages.WoolBlanket, rating: 5.0 },
    { id: 14, name: 'Handcrafted Necklace', price: 1500, category: 'Accessories', image: productImages.HandcraftedNecklace, rating: 4.4 },
    { id: 15, name: 'Silk Scarf', price: 2700, category: 'Clothing', image: productImages.SilkScarf, rating: 4.5 },
    { id: 16, name: 'Terracotta Planters', price: 2200, category: 'Home Décor', image: productImages.TerracottaPlanters, rating: 4.6 },
    { id: 17, name: 'Bath Bomb Set', price: 1200, category: 'Skincare', image: productImages.BathBombSet, rating: 4.2 },
    { id: 18, name: 'Yoga Mat', price: 3500, category: 'Accessories', image: productImages.YogaMat, rating: 4.7 },
    { id: 19, name: 'Handwoven Shawl', price: 4000, category: 'Clothing', image: productImages.HandwovenShawl, rating: 4.8 },
    { id: 20, name: 'Ceramic Tea Set', price: 3600, category: 'Home Décor', image: productImages.CeramicTeaSet, rating: 5.0 },
    { id: 21, name: 'Organic Lip Balm', price: 600, category: 'Skincare', image: productImages.OrganicLipBalm, rating: 4.3 },
    { id: 22, name: 'Beaded Bracelet', price: 1300, category: 'Accessories', image: productImages.BeadedBracelet, rating: 4.1 },
    { id: 23, name: 'Embroidered Cushion Covers', price: 3000, category: 'Home Décor', image: productImages.EmbroideredCushionCovers, rating: 4.5 },
    { id: 24, name: 'Wool Socks', price: 900, category: 'Clothing', image: productImages.WoolSocks, rating: 4.6 },
    // { id: 25, name: 'Oshan Aditha', price: 1900, category: 'Clothing', image: '/assets/images/product25.jpg', rating: 5.0 },
  ];

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === 'All' || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'Price: Low to High':
          return a.price - b.price;
        case 'Price: High to Low':
          return b.price - a.price;
        case 'Rating: High to Low':
          return b.rating - a.rating;
        case 'Alphabetical: A-Z':
          return a.name.localeCompare(b.name);
        case 'Alphabetical: Z-A':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    const handleProductClick = (id) => {
      navigate(`/products/${id}`);
    };

  return (
    <div style={{ backgroundColor: '#EAE0D3' }}>
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/images/products-hero.jpg')" }}
      >
        <div
          className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"
          // style={{ backgroundColor: '#0A0908', opacity: 0.6 }}
          style={{background: "linear-gradient(135deg, #0A0908, #22333B)",}}
        ></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-extrabold">Discover Timeless Creations</h1>
          <p className="text-lg mt-2 max-w-xl mx-auto" style={{ color: '#C6AC8E' }}>
          Handcrafted with tradition, designed for elegance.
          </p>
        </div>
      </header>

      {/* Filters and Sorting */}
      <div className="bg-gradient-to-t from-[#EAE0D5] to-[#C6AC8E] container mx-auto py-6 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search exquisite creations..."
              className="w-full rounded-full py-3 px-5 text-sm border shadow-md outline-none focus:ring-2 focus:ring-[#C6AC8E]"
              style={{ borderColor: '#C6AC8E', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#C6AC8E]" size={18} />
          </div>

          {/* Category Filter */}
          <div className="flex items-center">
            <FaFilter className="mr-2 text-[#C6AC8E]" size={18} />
            <select
              className="rounded-full py-3 px-5 text-sm border shadow-md outline-none focus:ring-2 focus:ring-[#C6AC8E]"
              style={{ borderColor: '#C6AC8E', fontWeight: 'bold' }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All</option>
              <option>Home Décor</option>
              <option>Skincare</option>
              <option>Clothing</option>
              <option>Accessories</option>
              <option>Luxury</option>
            </select>
          </div>

          {/* Sort Filter */}
          <div className="flex items-center">
            <FaSort className="mr-2 text-[#C6AC8E]" size={18} />
            <select
              className="rounded-full py-3 px-5 text-sm border shadow-md outline-none focus:ring-2 focus:ring-[#C6AC8E]"
              style={{ borderColor: '#C6AC8E', fontStyle: 'italic' }}
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
              <option>Alphabetical: A-Z</option>
              <option>Alphabetical: Z-A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Display */}
      <div className="container mx-auto py-6 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;



















// import React, { useState } from 'react';
// import ProductCard from '../components/ProductCard';

// const Products = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [sortOption, setSortOption] = useState('Price: Low to High');
//   const [searchQuery, setSearchQuery] = useState('');

//   const products = [
//     { id: 1, name: 'Pottery Vase', price: 1500, category: 'Home Décor', image: '/assets/images/product1.jpg', rating: 4.5 },
//     { id: 2, name: 'Woven Basket', price: 1200, category: 'Home Décor', image: '/assets/images/product2.jpg', rating: 4.0 },
//     { id: 3, name: 'Handwoven Rug', price: 4500, category: 'Home Décor', image: '/assets/images/product3.jpg', rating: 5.0 },
//     { id: 4, name: 'Ceramic Bowl Set', price: 3500, category: 'Home Décor', image: '/assets/images/product4.jpg', rating: 3.8 },
//     { id: 5, name: 'Bamboo Lamp', price: 2500, category: 'Accessories', image: '/assets/images/product5.jpg', rating: 4.2 },
//     { id: 6, name: 'Essential Oil Set', price: 1000, category: 'Skincare', image: '/assets/images/product6.jpg', rating: 4.9 },
//     { id: 7, name: 'Handmade Soap Pack', price: 800, category: 'Skincare', image: '/assets/images/product7.jpg', rating: 4.3 },
//     { id: 8, name: 'Clay Mask', price: 1500, category: 'Skincare', image: '/assets/images/product8.jpg', rating: 4.7 },
//     { id: 9, name: 'Cotton Tote Bag', price: 2000, category: 'Clothing', image: '/assets/images/product9.jpg', rating: 4.1 },
//     { id: 10, name: 'Linen Shirt', price: 3000, category: 'Clothing', image: '/assets/images/product10.jpg', rating: 4.6 },
//     { id: 11, name: 'Leather Wallet', price: 3200, category: 'Accessories', image: '/assets/images/product11.jpg', rating: 4.8 },
//     { id: 12, name: 'Silver Earrings', price: 2500, category: 'Accessories', image: '/assets/images/product12.jpg', rating: 4.9 },
//     { id: 13, name: 'Wool Blanket', price: 5000, category: 'Home Décor', image: '/assets/images/product13.jpg', rating: 5.0 },
//     { id: 14, name: 'Handcrafted Necklace', price: 1500, category: 'Accessories', image: '/assets/images/product14.jpg', rating: 4.4 },
//     { id: 15, name: 'Silk Scarf', price: 2700, category: 'Clothing', image: '/assets/images/product15.jpg', rating: 4.5 },
//     { id: 16, name: 'Terracotta Planters', price: 2200, category: 'Home Décor', image: '/assets/images/product16.jpg', rating: 4.6 },
//     { id: 17, name: 'Bath Bomb Set', price: 1200, category: 'Skincare', image: '/assets/images/product17.jpg', rating: 4.2 },
//     { id: 18, name: 'Yoga Mat', price: 3500, category: 'Accessories', image: '/assets/images/product18.jpg', rating: 4.7 },
//     { id: 19, name: 'Handwoven Shawl', price: 4000, category: 'Clothing', image: '/assets/images/product19.jpg', rating: 4.8 },
//     { id: 20, name: 'Ceramic Tea Set', price: 3600, category: 'Home Décor', image: '/assets/images/product20.jpg', rating: 5.0 },
//     { id: 21, name: 'Organic Lip Balm', price: 600, category: 'Skincare', image: '/assets/images/product21.jpg', rating: 4.3 },
//     { id: 22, name: 'Beaded Bracelet', price: 1300, category: 'Accessories', image: '/assets/images/product22.jpg', rating: 4.1 },
//     { id: 23, name: 'Embroidered Cushion Covers', price: 3000, category: 'Home Décor', image: '/assets/images/product23.jpg', rating: 4.5 },
//     { id: 24, name: 'Wool Socks', price: 900, category: 'Clothing', image: '/assets/images/product24.jpg', rating: 4.6 },
//   ];

//   // Filtering and sorting logic
//   const filteredProducts = products
//     .filter(
//       (product) =>
//         (selectedCategory === 'All' || product.category === selectedCategory) &&
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .sort((a, b) => {
//       switch (sortOption) {
//         case 'Price: Low to High':
//           return a.price - b.price;
//         case 'Price: High to Low':
//           return b.price - a.price;
//         case 'Rating: High to Low':
//           return b.rating - a.rating;
//         case 'Alphabetical: A-Z':
//           return a.name.localeCompare(b.name);
//         case 'Alphabetical: Z-A':
//           return b.name.localeCompare(a.name);
//         default:
//           return 0;
//       }
//     });

//   return (
//     <div style={{ backgroundColor: '#EAE0D3', }}>
//       {/* Hero Section */}
//       <header
//         className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
//         style={{ backgroundImage: "url('/assets/images/products-hero.jpg')" }}
//       >
//         <div
//           className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"
//           style={{ backgroundColor: '#0A0908', opacity: 0.6 }}
//         ></div>
//         <div className="z-10 text-center">
//           <h1 className="text-5xl font-extrabold">Discover Timeless Creations</h1>
//           <p className="text-lg mt-2 max-w-xl mx-auto">Handcrafted with tradition, designed for elegance.</p>
//         </div>
//       </header>

//       {/* Filters and Sorting */}
//       <div className="bg-gradient-to-t from-[#EAE0D5] to-[#C6AC8E] container mx-auto py-6 px-6">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="border rounded-lg py-2 px-4 w-full md:w-1/3 shadow-sm focus:ring-2"
//             style={{ borderColor: '#C6AC8E', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <div className="flex items-center">
//             <label className="mr-2 font-semibold">Category:</label>
//             <select
//               className="border rounded-lg py-2 px-3 shadow-sm"
//               style={{ borderColor: '#C6AC8E' }}
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//             >
//               <option>All</option>
//               <option>Home Décor</option>
//               <option>Skincare</option>
//               <option>Clothing</option>
//               <option>Accessories</option>
//             </select>
//           </div>
//           <div className="flex items-center">
//             <label className="mr-2 font-semibold">Sort by:</label>
//             <select
//               className="border rounded-lg py-2 px-3 shadow-sm"
//               style={{ borderColor: '#C6AC8E' }}
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Rating: High to Low</option>
//               <option>Alphabetical: A-Z</option>
//               <option>Alphabetical: Z-A</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Products Section */}
//       <div className="container mx-auto py-12 px-6">
//         <h2 className="text-3xl font-semibold text-center mb-6" style={{ color: '#22333B' }}>
//           Our Products
//         </h2>
//         <p className="text-center max-w-2xl mx-auto mb-8" style={{ color: '#5E503F' }}>
//           Explore our curated collection of handmade treasures. Each piece tells a story of craftsmanship and tradition.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
//           ) : (
//             <p className="col-span-full text-center" style={{ color: '#C6AC8E' }}>
//               No products match your criteria.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Call-to-Action Section */}
//       <div
//         className="py-12 border-t border-white-600"
//         style={{
//           backgroundImage: 'linear-gradient(to bottom, #C6AC8E, #5E503F)',
//           color: '#EAE0D5',
//         }}
//       >
//         <div className="container mx-auto text-center">
//           <h3 className="text-3xl font-bold mb-4">Looking for Custom Orders?</h3>
//           <p className="mb-6 text-lg max-w-3xl mx-auto">
//             Whether you’re looking for unique gifts, exclusive designs, or personalized pieces, we are here to help. Let’s create something special together!
//           </p>
//           <a
//             href="/contact"
//             className="inline-block px-10 py-4 text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
//             style={{ backgroundColor: '#22333B', color: '#EAE0D5' }}
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
