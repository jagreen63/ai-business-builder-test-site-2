import React from 'react';
export const metadata = {
  title: 'Pressure Washing Fort Worth | Fast Quotes & Scheduling',
  description: 'Professional pressure washing services in Fort Worth, TX. Get a same-day quote and fast scheduling for your home today!',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
};
export default RootLayout;
