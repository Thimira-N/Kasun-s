import React from 'react';

const ProductCard = ({ product }) => (
  <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-yellow-600 font-bold mt-2">LKR {product.price.toLocaleString()}</p>
      <div className="mt-4">
        <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors transform group-hover:scale-105 transition-transform">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
