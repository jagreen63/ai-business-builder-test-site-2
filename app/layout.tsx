import React from 'react';
export const metadata = {
  title: 'Columbus, OH Pressure Washing Services',
  description: 'Top-notch pressure washing in Columbus, OH for homes and businesses.',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
