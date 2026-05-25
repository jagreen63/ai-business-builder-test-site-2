import React from 'react';
export const metadata = {
  title: 'Pressure Washing Services in Charlotte, NC',
  description: 'Get a free quote for pressure washing in Charlotte, NC. Fast scheduling for homes and businesses. Call us today!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
