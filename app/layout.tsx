import React from 'react';
export const metadata = {
  title: 'Nashville Pressure Washing - Free Quote & Fast Service',
  description: 'Discover high-quality pressure washing services in Nashville, TN. Get a free quote and fast scheduling today!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
