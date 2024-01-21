import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/nikethanreddy/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/nikethanreddy/" target="_blank"><img src={navIcon3} alt="" /></a>
                <a href="https://github.com/NikethanReddyg" target="_blank"><img src={navIcon4} alt="github"/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
