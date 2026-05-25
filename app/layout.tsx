import React from 'react';
export const metadata = {
  title: 'Best Pressure Washing Services in Dallas - Affordable & Eco-Friendly',
  description: 'Enhance your home\'s curb appeal with our affordable pressure washing services in Dallas. Expert technicians, same-day quotes, and eco-friendly products. Contact us today!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
