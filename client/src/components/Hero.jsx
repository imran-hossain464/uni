import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Find Support. Offer Help. <br />
          <span className="text-blue-600">Make a Difference</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with people in need or become a volunteer to create change in your community.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
            Get Help
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
