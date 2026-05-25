import React from 'react';
export const metadata = {
  title: 'Top Pressure Washing in Tampa, FL - Clean & Shine',
  description: 'Reliable pressure washing services for homes and businesses in Tampa, FL. Get a free estimate and enjoy a cleaner property today!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
