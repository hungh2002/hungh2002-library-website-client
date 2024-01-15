import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

import logo from './../resources/svg/logo.svg';
import ThemeToggleButton from './ThemeToggleButton';
import './../scss/NavigationBar.scss';

const NavigationBar = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='bg-body-tertiary nav'
      bg={theme.color}
      data-bs-theme={theme.color}
    >
      <Container fluid>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img
              alt='logo'
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </LinkContainer>

        <ThemeToggleButton />

        <Navbar.Toggle aria-controls='basic-navbar-nav navbarScroll responsive-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav navbarScroll responsive-navbar-nav'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/add-new-book'>
              <Nav.Link>Add book</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/add-new-chapter'>
              <Nav.Link>Add chapter</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/edit-website-information'>
              <Nav.Link>Setting</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
