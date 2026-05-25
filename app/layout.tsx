import React from 'react';
export const metadata = {
  title: 'Las Vegas NV Pressure Washing Services',
  description: 'Get top-notch pressure washing in Las Vegas. Free quotes and fast scheduling for homes and businesses.',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
