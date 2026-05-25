import React from 'react';
export const metadata = {
  title: 'Top Tampa Pressure Washing Services',
  description: 'Professional pressure washing in Tampa, FL for homes and businesses. Call now for a free estimate!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
