import React from 'react';
export const metadata = {
  title: 'Top Pressure Washing Services in Miami, FL',
  description: 'Get a free quote and fast scheduling for pressure washing in Miami. Perfect for homes and businesses!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
