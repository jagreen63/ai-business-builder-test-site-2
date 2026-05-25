import React from 'react';
export const metadata = {
  title: 'Top Pressure Washing in Columbus, OH',
  description: 'Choose our expert pressure washing services to enhance your Columbus home’s exterior. Call for a free estimate today!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
