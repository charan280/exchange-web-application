import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import  {NavbarComponent,About,Footer}  from './Navbar1';
import ExchangeForm from './ExchangeForm';
import  GdpRatesSection from "./Gdp";

function App() {
  return (

    <>
    <div className="bg" id='Home'>
      
      <NavbarComponent/>
      <Container className="mt-4">
        <Row>
          <Col>
            <ExchangeForm />
          </Col>
        </Row>
      </Container>
    </div>
    <div id='GDP'>
    <GdpRatesSection/>
    </div>
    <div id = "About">
    <About/>
    </div>
    <div id = "Contact">
    <Footer />
    </div>
    </>
  );
}

export default App;
