import React from 'react';
export const metadata = {
  title: 'Top Pressure Washing in Indianapolis | Clean & Shine',
  description: 'Expert pressure washing services in Indianapolis to restore your property’s beauty. Contact us for a free quote today!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
