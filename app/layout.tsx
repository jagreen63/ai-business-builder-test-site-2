import React from 'react';
export const metadata = {
  title: 'Denver CO Pressure Washing Services',
  description: 'Get fast, reliable pressure washing in Denver, CO with a free quote. Perfect for homes and businesses!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
