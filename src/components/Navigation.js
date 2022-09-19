import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';

function Navigation() {
  return (
    <div>
      <Navbar bg="light" variant="light">
          <Navbar.Brand href="/weatherApp">Projects</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/weatherApp">WeatherApp</Nav.Link>
            <Nav.Link href="/toDoApp">ToDoApp</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;