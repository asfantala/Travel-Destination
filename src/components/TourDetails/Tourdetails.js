import React from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TourDetail = ({tours}) => {
  const { id } = useParams();
  const tour = tours.find(tour => tour.id === Number(id));

  return (

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={disCard.image} />
      <Card.Body>
        <Card.Title>{disCard.name}</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>

    // <div className="tour-detail">
    //   <img src={tour.image} alt={tour.name} />
    //   <h3>{tour.name}</h3>
    //   <p>{tour.description}</p>
    // </div>
  );
};

export default TourDetail;