// import React from 'react';
// import { Link } from 'react-router-dom';

// const Checkout = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-10 py-10">
//       {/* Header */}
//       <h1 className="text-4xl font-extrabold text-[#0A0908] mb-8 tracking-wider text-center">Checkout</h1>

//       {/* Billing Details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//         <div className="p-6 border rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-[#5E503F] mb-4">Billing Details</h2>
//           <form className="grid gap-4">
//             <div>
//               <label className="block text-sm font-semibold text-[#0A0908] mb-2">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-[#0A0908] mb-2">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-[#0A0908] mb-2">Phone Number</label>
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-semibold text-[#0A0908] mb-2">Address</label>
//               <textarea
//                 placeholder="Enter your address"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24"
//               ></textarea>
//             </div>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className="p-6 border rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-[#5E503F] mb-4">Order Summary</h2>
//           <div className="grid gap-4">
//             <div className="flex justify-between items-center border-b pb-2">
//               <span className="text-lg text-[#0A0908]">Product Name</span>
//               <span className="text-lg font-semibold text-[#716152]">LKR 10,000.00</span>
//             </div>
//             <div className="flex justify-between items-center border-b pb-2">
//               <span className="text-lg text-[#0A0908]">Subtotal</span>
//               <span className="text-lg font-semibold text-[#716152]">LKR 10,000.00</span>
//             </div>
//             <div className="flex justify-between items-center border-b pb-2">
//               <span className="text-lg text-[#0A0908]">Shipping</span>
//               <span className="text-lg font-semibold text-[#716152]">LKR 500.00</span>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <span className="text-xl font-bold text-[#0A0908]">Total</span>
//               <span className="text-xl font-extrabold text-[#22333B]">LKR 10,500.00</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Payment Method */}
//       <div className="p-6 border rounded-lg shadow-lg mb-10">
//         <h2 className="text-2xl font-semibold text-[#5E503F] mb-4">Payment Method</h2>
//         <form className="grid gap-4">
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="creditCard"
//               name="paymentMethod"
//               className="mr-2"
//             />
//             <label htmlFor="creditCard" className="text-sm text-[#0A0908] font-semibold">
//               Credit/Debit Card
//             </label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="paypal"
//               name="paymentMethod"
//               className="mr-2"
//             />
//             <label htmlFor="paypal" className="text-sm text-[#0A0908] font-semibold">
//               PayPal
//             </label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="cashOnDelivery"
//               name="paymentMethod"
//               className="mr-2"
//             />
//             <label htmlFor="cashOnDelivery" className="text-sm text-[#0A0908] font-semibold">
//               Cash on Delivery
//             </label>
//           </div>
//         </form>
//       </div>

//       {/* Place Order Button */}
//       <div className="text-center">
//         <Link
//           to="/order-confirmation"
//           className="bg-gradient-to-r from-[#22333B] via-[#8A7E6D] to-[#0A0908] text-white px-8 py-4 rounded-full font-extrabold shadow-lg hover:from-[#0A0908] hover:to-[#22333B] transition-transform duration-300 hover:scale-105"
//         >
//           Place Order
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Checkout;























import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const CheckoutPage = () => {
  const location = useLocation(); // Access the passed state from cart.jsx
  // Accept both cart items and a single product for checkout
  const cartItems = location.state?.cartItems || []; // from cart.jsx
  const buyNowItem = location.state?.product || null; // Handle single product

  // Merge cartItems and buyNowItem into one list
  const items = buyNowItem ? [{ ...buyNowItem, quantity: 1 }] : cartItems;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shippingFee = "FREE";
  const taxRate = 0.1; // 10% tax

  const calculateTotals = () => {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateTotals();

  const renderPaymentForm = () => {
    switch (selectedPaymentMethod) {
      case 'creditCard':
        return (
          <div className="mt-6 border border-[#E4DACD] rounded-xl p-6 shadow-lg bg-white/70 transition-transform duration-300 transform scale-100 opacity-100">
            <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4">Credit/Debit Card Details</h3>
            <form className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="Enter your card number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Expiration Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2E2E2E] mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="Enter cardholder name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
                />
              </div>
            </form>
          </div>
        );
      case 'paypal':
        return (
          <div className="mt-6 border border-[#E4DACD] rounded-xl p-6 shadow-lg bg-white/70 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4">PayPal</h3>
            <p className="text-sm text-[#5A5A5A]">
              You will be redirected to PayPal to complete your payment.
            </p>
          </div>
        );
      case 'cashOnDelivery':
        return (
          <div className="mt-6 border border-[#E4DACD] rounded-xl p-6 shadow-lg bg-white/70 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4">Cash on Delivery</h3>
            <p className="text-sm text-[#5A5A5A]">
              Pay with cash upon delivery of your order.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-10">
      <h1 className="text-4xl font-bold text-[#2E2E2E] text-center mb-10">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div className="bg-white/7o border border-[#E4DACD] rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-[#5E503F] mb-6">Billing Details</h2>
          <form className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2E2E2E] mb-2">Address</label>
              <textarea
                placeholder="Enter your address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D5BAA1] focus:outline-none h-24"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white/70 border border-[#E4DACD] rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-[#5E503F] mb-6">Order Summary</h2>
          <div className="grid gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <span className="text-lg text-[#2E2E2E]">{item.name} (x{item.quantity})</span>
                <span className="text-lg font-semibold text-[#716152]">
                  LKR {item.price.toLocaleString()}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg text-[#2E2E2E]">Subtotal</span>
              <span className="text-lg font-semibold text-[#716152]">
                LKR {subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg text-[#2E2E2E]">Shipping</span>
              <span className="text-lg font-semibold text-[#716152] animate-pulse">
                 {shippingFee.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-lg text-[#2E2E2E]">Tax (10%)</span>
              <span className="text-lg font-semibold text-[#716152]">
                LKR {tax.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-[#2E2E2E]">Total</span>
              <span className="text-xl font-extrabold text-[#22333B]"> 
                LKR {total.toLocaleString()} 
                </span> 
                </div> 
                </div> 
                </div> 
                </div>

                  {/* Payment Methods */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold text-[#5E503F] mb-6">Payment Method</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                    onClick={() => setSelectedPaymentMethod('creditCard')}
                    className={`border border-[#E4DACD] rounded-xl px-4 py-3 transition duration-300 ${
                    selectedPaymentMethod === 'creditCard'
                        ? 'bg-[#D5BAA1] text-white shadow-lg'
                        : 'bg-white hover:bg-[#F3EDE3] text-[#2E2E2E]'
                    }`}
                >
                    Credit/Debit Card
                </button>
                <button
                    onClick={() => setSelectedPaymentMethod('paypal')}
                    className={`border border-[#E4DACD] rounded-xl px-4 py-3 transition duration-300 ${
                    selectedPaymentMethod === 'paypal'
                        ? 'bg-[#D5BAA1] text-white shadow-lg'
                        : 'bg-white hover:bg-[#F3EDE3] text-[#2E2E2E]'
                    }`}
                >
                    PayPal
                </button>
                <button
                    onClick={() => setSelectedPaymentMethod('cashOnDelivery')}
                    className={`border border-[#E4DACD] rounded-xl px-4 py-3 transition duration-300 ${
                    selectedPaymentMethod === 'cashOnDelivery'
                        ? 'bg-[#D5BAA1] text-white shadow-lg'
                        : 'bg-white hover:bg-[#F3EDE3] text-[#2E2E2E]'
                    }`}
                >
                    Cash on Delivery
                </button>
                </div>

                {renderPaymentForm()}
            </div>

            {/* Place Order Button */}
            <div className="mt-10 text-center">
                    <button
                    onClick={() => setOrderPlaced(true)}
                    className="px-10 py-4 bg-[#22333B] text-white text-lg font-bold rounded-xl shadow-lg hover:bg-[#1A282E] transition duration-300"
                    >
                    Place Order
                    </button>
                </div>

                {/* Order Placed Popup */}
                {orderPlaced && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl text-center w-96">
                        <h2 className="text-2xl font-bold text-[#22333B] mb-4">
                        Order Placed Successfully!
                        </h2>
                        <p className="text-[#5E503F] mb-6">
                        Thank you for your purchase. Your order will be processed shortly.
                        </p>
                        <button
                        onClick={() => setOrderPlaced(false)}
                        className="px-6 py-3 bg-[#22333B] text-white text-lg font-semibold rounded-lg hover:bg-[#1A282E] transition duration-300"
                        >
                        Close
                        </button>
                    </div>
                    </div>
                )}
                </div>
  );
};

export default CheckoutPage;