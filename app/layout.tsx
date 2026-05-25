import React from 'react';
export const metadata = {
  title: 'San Antonio Pressure Washing Services | Free Quote',
  description: 'Offering top-notch pressure washing in San Antonio, TX. Get a free quote and enjoy fast scheduling for your home or business.',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
