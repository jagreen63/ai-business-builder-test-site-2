import React from 'react';
const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">Transform Your Property with the Best Pressure Washing Services</h1>
        <h2 className="text-xl text-gray-600 mt-2">Eco-Friendly, Affordable, and Same-Day Pressure Washing Solutions in [City]</h2>
        <button className="mt-4 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Get Your Free Quote Today!</button>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Driveway Pressure Washing</li>
          <li>Deck and Patio Cleaning</li>
          <li>Gutter Cleaning and Maintenance</li>
        </ul>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Rapid response times for quotes and scheduling</li>
          <li>Use of eco-friendly products</li>
          <li>Expertise in both residential and commercial properties</li>
        </ul>
      </section>
    </main>
  );
};
export default HomePage;
