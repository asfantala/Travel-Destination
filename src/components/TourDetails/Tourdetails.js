import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const data = require("../../data/db.json");

function Tourdetails() {
  const { id } = useParams();
  const tourr = data.filter((item) => {
    if (item.id === id) {
      return true;
    } else {
      return false;
    }
  })[0];

  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={tourr.image} />
      <Card.Body>
        <Card.Title>{tourr.name}</Card.Title>
        <Card.Text>
          {showMore ? tourr.info : `${tourr.info.substring(0, 100)}...`}
        </Card.Text>
        <Button onClick={handleShowMoreClick}>
          {showMore ? "Show less" : "Show more"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Tourdetails;