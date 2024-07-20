import React, { useState, useEffect }from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import logo from './dollar.png';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar-custom'];
  if (scrolled) {
    navbarClasses.push('navbar-scrolled');
  }

  return (
    <Navbar expand="lg" className={navbarClasses.join(' ')} >
      <Container>
        <Navbar.Brand href="#">
        <img className = "images"src = {logo} alt="Logo" />
          
          Xchange</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#GDP">GDP</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};





const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container2">
        <h2>About Currency Exchange</h2>
        <p>
          Currency Exchange is an application designed to provide real-time currency conversion
          with accurate exchange rates. Users can convert between various currencies based on the
          latest data fetched from the ExchangeRate-API. The application supports a wide range of
          currencies including US Dollar (USD), Euro (EUR), Indian Rupee (INR), British Pound
          (GBP), and many more.
        </p>
        <p>
          This project showcases modern web development practices using React.js for the frontend
          interface. It utilizes React Bootstrap components for responsive and interactive user
          interface elements. The backend functionality fetches live exchange rates from
          ExchangeRate-API via Axios, ensuring accurate and up-to-date currency conversions.
        </p>
        <p>
          The About section can further include details on the development team, project
          objectives, and future enhancements. It aims to provide users with a seamless and
          informative experience for currency exchange needs.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer center">
      <div className="container4">
        <p className="text">Copyright &copy; Xchange Website | All Rights Reserved</p>
        <div className="footer-links">
            <i className="fab fa-facebook-f"></i>
          
            <i className="fab fa-instagram"></i>
         
            <i className="fab fa-linkedin"></i>
       
            <i className="fab fa-twitter"></i>
         
        
            <i className="fas fa-envelope"></i>
        
        </div>
      </div>
    </footer>
  );
};

export { NavbarComponent,About,Footer};
