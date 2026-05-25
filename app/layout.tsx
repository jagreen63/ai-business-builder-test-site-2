import React from 'react';
export const metadata = {
  title: 'Pressure Washing in Atlanta, GA - Free Quotes',
  description: 'Atlanta\'s best pressure washing service. Fast scheduling & free quotes for homes and businesses.',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
