import React from 'react';
export const metadata = {
  title: 'Top Pressure Washing in Houston, TX',
  description: 'Get a free quote for expert pressure washing services in Houston. Fast scheduling available!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
