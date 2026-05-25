import React from 'react';
const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">Transform Your Home’s Curb Appeal with Professional Pressure Washing in Dallas</h1>
        <h2 className="text-xl text-gray-600 mt-2">Affordable and Eco-Friendly Services to Keep Your Home Looking Its Best</h2>
        <button className="mt-4 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Request a Free Quote Today!</button>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Driveway Pressure Washing</li>
          <li>Deck and Patio Cleaning</li>
          <li>Roof Cleaning and Maintenance</li>
        </ul>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Same-day quotes for instant service initiation</li>
          <li>Expert technicians with local knowledge and experience</li>
          <li>Utilization of eco-friendly cleaning products</li>
        </ul>
      </section>
    </main>
  );
};
export default HomePage;
