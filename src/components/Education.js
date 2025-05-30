import { Container, Row, Col, Card } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import UTA from "../assets/img/UTA.png";
import UCEOU from "../assets/img/UCEOU.png"

// Reusable EducationCard component
const EducationCard = ({ imageSrc, altText, title, degree, duration, gpa }) => (
    <Card style={{ width: '300px', margin: '20px', background: 'black', color: 'white' }}>
      <Card.Img variant="top" src={imageSrc} alt={altText} />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginTop: '10px' }}>{degree}</Card.Title>
        <Card.Text>
          {title}
          <br />
          {duration}
          <br />
          GPA: {gpa}
        </Card.Text>
      </Card.Body>
    </Card>
  );
  
  // Education component using EducationCard
  export const Education = () => {
    return (
      <section className="education" id="education" style={{ background: 'black', color: 'white', paddingTop: '20px' }}>
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2 className="text-center" style={{ color: 'white' }}>Education</h2> <br />
                    
                    <div className="d-flex flex-wrap justify-content-center">
                      <EducationCard
                        imageSrc={UTA}
                        altText="University Of Texas At Arlington Logo"
                        title="The University Of Texas At Arlington"
                        degree="Master of Science - Computer Science"
                        duration="January 2024 - March 2026"
                        gpa="3.8/4.0"
                      />
                      <EducationCard
                        imageSrc={UCEOU}
                        altText="University College of Engineering Osmania University"
                        title="University College of Engineering Osmania University"
                        degree="Bachelors of Engineering - Computer Science and Engineering"
                        duration="May 2018 - May 2022"
                        gpa="8.0/10.0"
                      />
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="Background Image"></img>
      </section>
    );
  };