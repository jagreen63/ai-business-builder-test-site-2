import React from 'react';
export const metadata = {
  title: 'Portland Pressure Washing Services - Free Quote',
  description: 'Get your free quote for pressure washing in Portland, OR. Fast scheduling for homes and businesses. Contact us today!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
