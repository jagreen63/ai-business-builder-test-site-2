import React from 'react';
export const metadata = {
  title: 'Top Pressure Washing Services in Austin, TX',
  description: 'Get expert pressure washing services in Austin, TX. Free quotes and fast scheduling for homes and businesses.',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
