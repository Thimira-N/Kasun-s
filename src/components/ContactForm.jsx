import React from 'react';

const ContactForm = () => (
  <div className="max-w-3xl mx-auto p-10 bg-gradient-to-br from-[#F9F5F0] to-[#C6AC8E] rounded-3xl shadow-2xl">
    <h2 className="text-4xl font-extrabold mb-8 text-center text-[#0A0908]">
      Get in Touch
    </h2>
    <p className="text-center text-gray-700 mb-12 text-lg leading-relaxed">
      We're here to help. Fill out the form below and let us know how we can assist you.
    </p>
    <form className="space-y-8">
      <div>
        <label
          className="block text-sm font-medium text-[#22333B] mb-2 uppercase tracking-wide"
          htmlFor="name"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          className="w-full p-4 bg-[#F9F5F0] rounded-lg border-2 border-[#C6AC8E] focus:outline-none focus:border-[#5E503F] focus:ring-2 focus:ring-[#5E503F] transition-all text-[#22333B] placeholder-[#A6A29E]"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-[#22333B] mb-2 uppercase tracking-wide"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full p-4 bg-[#F9F5F0] rounded-lg border-2 border-[#C6AC8E] focus:outline-none focus:border-[#5E503F] focus:ring-2 focus:ring-[#5E503F] transition-all text-[#22333B] placeholder-[#A6A29E]"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-[#22333B] mb-2 uppercase tracking-wide"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Write your message..."
          className="w-full p-4 bg-[#F9F5F0] rounded-lg border-2 border-[#C6AC8E] focus:outline-none focus:border-[#5E503F] focus:ring-2 focus:ring-[#5E503F] transition-all text-[#22333B] placeholder-[#A6A29E]"
          rows="5"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-4 text-lg font-semibold text-white bg-[#C6AC8E] rounded-full hover:bg-[#5E503F] focus:outline-none focus:ring-4 focus:ring-[#5E503F] focus:ring-opacity-50 transition-all"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default ContactForm;
