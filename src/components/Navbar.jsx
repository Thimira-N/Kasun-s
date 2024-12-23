import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { cartQuantity } = useContext(CartContext);
  

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#0A0908] text-[#EAE0D5] px-4 py-3 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Upper Part */}
        <div className="flex justify-between items-center">
          {/* Search Bar */}
          <div
            className={`relative flex items-center mt-2 ml-2 transition-all duration-300 ${
              isSearchFocused ? 'bg-[#EAE0D5] w-96 h-10' : 'bg-[#C6AC8E] w-10 h-10'
            } rounded-full shadow-md overflow-hidden`}
            onMouseEnter={() => setIsSearchFocused(true)}
            onMouseLeave={() => setIsSearchFocused(false)}
          >
            <input
              type="text"
              placeholder="What's on Your Mind?"
              className={`bg-transparent text-[#0A0908] text-sm md:text-base w-full py-2 px-4 outline-none transition-all duration-300 ${
                isSearchFocused ? 'block' : 'hidden'
              }`}
            />
            <FaSearch
              className={`text-[#0A0908] w-10 h-5 mx-2 transition-transform duration-300`}
            />
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link
              to="/home"
              className="text-3xl font-bold tracking-wide hover:text-[#C6AC8E] transition duration-300"
            >
              Kasun's
            </Link>
          </div>

          {/* Sign In / Sign Up (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/signin"
              className="text-sm md:text-base font-semibold mt-2 text-[#EAE0D5] hover:text-[#C6AC8E] transition duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-[#C6AC8E] text-[#0A0908] rounded-full font-semibold hover:bg-[#EAE0D5] hover:text-[#0A0908] transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="relative flex items-center justify-center mt-6 mb-2">
          {/* Navigation Links */}
          <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-lg">
            {['Home', 'About', 'Products', 'Workshops', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-[#C6AC8E] transition duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart and Hamburger Icon */}
          <div className="absolute right-0 flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart size={24} />
              <span className="absolute bottom-3 right-0 bg-[#df2a2a] text-[#EAE0D5] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartQuantity}
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-[#EAE0D5]"
              onClick={toggleMenu}
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0A0908] via-[#22333B] to-[#5E503F] flex flex-col items-center justify-center md:hidden transition-opacity duration-700 ease-in-out">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-3 text-[#EAE0D5] hover:text-[#C6AC8E] text-2xl transition duration-300 transform hover:rotate-90"
            >
              ✖
            </button>

            {/* Navigation Links */}
            <ul className="space-y-8 text-center">
              {['Home', 'About', 'Products', 'Workshops', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 rounded-full bg-[#0A0908] hover:bg-[#C6AC8E] hover:text-[#0A0908] shadow-lg transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sign In / Sign Up (Visible on Mobile Menu) */}
            <div className="mt-8 space-y-4">
              <Link
                to="/signin"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-2 bg-[#C6AC8E] text-[#0A0908] rounded-full font-semibold hover:bg-[#EAE0D5] hover:text-[#0A0908] shadow-lg transition duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-2 bg-[#C6AC8E] text-[#0A0908] rounded-full font-semibold hover:bg-[#EAE0D5] hover:text-[#0A0908] shadow-lg transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;















// import React from 'react';

// const Header = () => (
//   <header className="bg-[#0A0908] text-[#EAE0D5] py-10">
//     <div className="container mx-auto px-4" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
//       <h1 className="text-4xl font-bold text-center mb-6">Earthy Elegance</h1>
//       <nav>
//         <ul className="flex justify-center space-x-6 mt-4">
//           <li><a href="#home" className="hover:text-[#C6AC8E]">Home</a></li>
//           <li><a href="#about" className="hover:text-[#C6AC8E]">About</a></li>
//           <li><a href="#services" className="hover:text-[#C6AC8E]">Services</a></li>
//           <li><a href="#portfolio" className="hover:text-[#C6AC8E]">Portfolio</a></li>
//           <li><a href="#contact" className="hover:text-[#C6AC8E]">Contact</a></li>
//         </ul>
//       </nav>
//     </div>
//   </header>
// );

// export default Header;

















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="bg-[#0A0908] text-[#EAE0D5] px-4 py-3 shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto flex flex-col items-center">
//         {/* Topic at the Top */}
//         <Link
//           to="/home"
//           className="text-3xl font-bold tracking-wide hover:text-[#C6AC8E] transition duration-300"
//         >
//           Kasun's
//         </Link>

//         {/* Middle Section */}
//         <div className="w-full flex justify-between items-center">
//           {/* Search Input */}
//           <div className="flex items-center">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-[#EAE0D5] text-[#0A0908] px-5 py-1 rounded-md focus:outline-none focus:ring focus:ring-[#C6AC8E]"
//             />
//           </div>

//           {/* Cart and Sign In/Sign Up Links */}
//           <div className="flex items-center space-x-4">
//                 <Link
//                 to="/signin"
//                 className="hover:text-[#C6AC8E] transition duration-200"
//                 >
//                 Sign In
//                 </Link>
//                 <Link
//                 to="/signup"
//                 className="hover:text-[#C6AC8E] transition duration-200"
//                 >
//                 Sign Up
//                 </Link>
//           </div>
//         </div>

//         {/* Desktop Navigation Links at the Bottom */}
//         <ul className="hidden md:flex space-x-6 text-lg">
//           <li>
//             <Link to="/home" className="hover:text-[#C6AC8E] transition duration-200">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-[#C6AC8E] transition duration-200">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" className="hover:text-[#C6AC8E] transition duration-200">
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/workshops" className="hover:text-[#C6AC8E] transition duration-200">
//               Workshops
//             </Link>
//           </li>
//           <li>
//             <Link to="/gallery" className="hover:text-[#C6AC8E] transition duration-200">
//               Gallery
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-[#C6AC8E] transition duration-200">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* Cart and Mobile Menu */}
//         <div className="flex items-center space-x-4">
//             {/* Cart */}
//             <Link to="/cart" className="relative">
//                 <FaShoppingCart size={24} />
//                 <span className="absolute bottom-3 right-0 bg-[#df2a2a] text-[#EAE0D5] text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 3
//                 </span>
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//                 className="md:hidden text-2xl text-[#EAE0D5]"
//                 onClick={toggleMenu}
//             >
//                 &#9776; {/* Hamburger icon */}
//             </button>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0A0908] via-[#22333B] to-[#5E503F] flex flex-col items-center justify-center md:hidden transition-opacity duration-700 ease-in-out">
//           {/* Close Button */}
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-4 right-3 text-[#EAE0D5] hover:text-[#C6AC8E] text-2xl transition duration-300 transform hover:rotate-90"
//           >
//             ✖
//           </button>

//           {/* Logo or Title */}
//           <div className="absolute top-20 left-25 text-[#EAE0D5] text-3xl font-extrabold tracking-wider">
//             <span className="bg-[#C6AC8E] text-[#0A0908] px-20 py-2 rounded-full shadow-md">Kasun's</span>
//           </div>

//           {/* Navigation Links */}
//           <ul className="space-y-8 text-center">
//             {['Home', 'About', 'Products', 'Workshops', 'Gallery', 'Contact'].map((item, index) => (
//               <li
//                 key={item}
//                 className={`text-2xl font-semibold text-[#EAE0D5] transition-transform duration-500 ease-in-out ${
//                   menuOpen ? `delay-${index * 100} opacity-100 scale-100` : 'opacity-0 scale-75'
//                 }`}
//               >
//                 <Link
//                   to={`/${item.toLowerCase()}`}
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-6 py-3 rounded-full bg-[#0A0908] hover:bg-[#C6AC8E] hover:text-[#0A0908] shadow-lg transition duration-300"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Highlighted Section */}
//           <div className="absolute bottom-20 flex flex-col items-center">
//             <span className="text-[#EAE0D5] text-lg font-light mb-2">Follow Us</span>
//             <div className="flex space-x-8">
//               {[
//                 { name: 'Facebook', link: 'https://www.facebook.com', icon: '📘' },
//                 { name: 'Instagram', link: 'https://www.instagram.com', icon: '📸' },
//                 { name: 'Twitter', link: 'https://www.twitter.com', icon: '🐦' },
//               ].map((social, index) => (
//                 <a
//                   href={social.link}
//                   key={social.name}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`text-3xl text-[#EAE0D5] hover:text-[#C6AC8E] transition-transform duration-500 ${
//                     menuOpen ? `delay-${200 + index * 100} opacity-100 scale-100` : 'opacity-0 scale-75'
//                   }`}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Decorative Blobs */}
//           <div className="absolute inset-0 pointer-events-none">
//             <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#C6AC8E] rounded-full opacity-10 blur-2xl"></div>
//             <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#EAE0D5] rounded-full opacity-5 blur-3xl"></div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;