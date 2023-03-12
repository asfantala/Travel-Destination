import React from 'react';

const Tour = ({tour}) => {
  return (
    <div className="tour">
      <img src={tour.image} alt={tour.name} />
      <h3>{tour.name}</h3>
    </div>
  );
};

export default Tour;