// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const getOpeningHours = () => {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 6 = Saturday

    if (day >= 1 && day <= 5) {
      // Monday to Friday
      return '10:00 AM - 4:00 PM';
    } else {
      // Saturday and Sunday
      return '9:00 AM - 8:00 PM';
    }
  };

  return (
    <div>
      <h2>Today's Opening Hours</h2>
      <p>{getOpeningHours()}</p>
    </div>
  );
};

export default Hours;
