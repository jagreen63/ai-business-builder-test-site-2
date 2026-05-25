import React from 'react';
export const metadata = {
  title: 'Top Pressure Washing Service in Phoenix, AZ',
  description: 'Contact us for free quotes and quick scheduling for pressure washing in Phoenix, AZ. Transform your property today!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
