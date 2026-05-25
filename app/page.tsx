import React from 'react';
const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">Expert Pressure Washing Services in Tampa, FL</h1>
        <h2 className="text-xl text-gray-600 mt-2">Transform Your Property with Our Professional Cleaning Solutions</h2>
        <button className="mt-4 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Get Your Free Estimate Today!</button>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Residential Pressure Washing</li>
          <li>Commercial Pressure Washing</li>
          <li>Deck and Patio Cleaning</li>
          <li>Roof Cleaning</li>
          <li>Graffiti Removal</li>
        </ul>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Locally Owned and Operated</li>
          <li>Fully Licensed and Insured</li>
          <li>Eco-Friendly Cleaning Products</li>
          <li>Satisfaction Guaranteed</li>
          <li>Experienced and Trained Professionals</li>
        </ul>
      </section>
    </main>
  );
};
export default HomePage;
