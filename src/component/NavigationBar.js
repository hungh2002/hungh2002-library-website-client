import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import logo from "./../resources/svg/logo.svg";

const NavigationBar = () => {
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <LinkContainer to="/"><Navbar.Brand ><img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav navbarScroll responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbarScroll responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to="/hello"><Nav.Link >Link</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;