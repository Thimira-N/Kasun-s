import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EAE0D5] to-[#C6AC8E]">
      <div className="w-full max-w-md bg-[#0A0908] text-[#EAE0D5] rounded-lg shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide">Create Account</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Thimira Navodana"
              className="w-full px-4 py-3 bg-[#22333B] text-[#EAE0D5] border border-[#5E503F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="someone@example.com"
              className="w-full px-4 py-3 bg-[#22333B] text-[#EAE0D5] border border-[#5E503F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              className="w-full px-4 py-3 bg-[#22333B] text-[#EAE0D5] border border-[#5E503F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter your password again"
              className="w-full px-4 py-3 bg-[#22333B] text-[#EAE0D5] border border-[#5E503F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-center bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] text-[#0A0908] font-bold rounded-lg hover:scale-105 transform transition focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          Already have an account?{' '}
          <a href="/signin" className="text-[#C6AC8E] font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
