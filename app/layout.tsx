import React from 'react';
export const metadata = {
  title: 'Seattle Pressure Washing Services - Free Quotes',
  description: 'Get professional pressure washing in Seattle, WA. Free quotes and fast scheduling available for homes and businesses.',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
