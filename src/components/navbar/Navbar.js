import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Navbar1() {
    return (

        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
            </Container>
        </Navbar>

    )
}
export default Navbar1;