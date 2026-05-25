import React from 'react';
const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">Top-Rated Pressure Washing Services in Nashville, TN</h1>
        <h2 className="text-xl text-gray-600 mt-2">Revitalize Your Home or Business with Our Expert Team</h2>
        <button className="mt-4 px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Get Your Free Quote Today!</button>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Residential Pressure Washing</li>
          <li>Commercial Pressure Washing</li>
          <li>Deck and Patio Cleaning</li>
          <li>Driveway and Sidewalk Cleaning</li>
          <li>Roof Cleaning</li>
        </ul>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800">Why Choose Us?</h3>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Licensed and Insured Professionals</li>
          <li>Fast Scheduling and Response Times</li>
          <li>Eco-Friendly Cleaning Solutions</li>
          <li>Satisfaction Guaranteed</li>
          <li>Over 10 Years of Experience</li>
        </ul>
      </section>
    </main>
  );
};
export default HomePage;
