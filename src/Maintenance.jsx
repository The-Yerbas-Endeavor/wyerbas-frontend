import "./App.scss";
import React from "react";
import MaintLogo from "./assets/img/splash.png";

// Controls.
import {
  Navbar,
  Container,
  Row,
} from "react-bootstrap";

// Assets.
import YERBLogo from "./assets/img/wyerb.png";

export default function Maintenance() {
  return (
    <div className="App">
      <Navbar className="navbar" align="text-center" bg="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <img alt="" src={YERBLogo} />
            <span>Yerbas</span>

            <span className="navbar-brand-subtitle"> WRAP</span>

          </Navbar.Brand> 
        </Container>
      </Navbar>
      <section className="projects min-height-fill" >
        <Container className="py-3 py-lg-5 d-flex flex-column mt-4">
	      <Row>
   			<h3 className="mt-4 text-center">Check back</h3>
            <span className="subtitle mx-auto text-start text-lg-center">
              Working on getting this running. <br /> <br />
      	      <img alt="" src={MaintLogo} /></span>
          </Row>
        </Container>
      </section>
      <br />
      <section className="section-footer text-center">
          <Container>
            <Row>
              <span>
              <b>© The Yerbas Endeavor 2022</b> 
              </span>
            </Row>  
          </Container>
        </section>
    </div>
   );
 }
