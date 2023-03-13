import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Tour.css'

function Tour(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/city/${props.tour.id}`);  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.tour.image} />
      <Card.Body>
        <Card.Title>{props.tour.name}</Card.Title>        
        <Button  onClick={handleClick}>Click</Button>

      </Card.Body>
    </Card>
  );
}
export default Tour;