import React from 'react';
export const metadata = {
  title: 'Top Pressure Washing in Indianapolis, IN',
  description: 'Professional pressure washing services in Indianapolis to enhance your home\'s curb appeal. Call us for a free quote!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
