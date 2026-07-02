import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";

function Contact() {

    return (

        <>

            <NavigationBar cartCount={0} />

            <Container className="py-5 mt-5">

                <div className="text-center mb-5">

                    <h1>Contact Us</h1>

                    <p className="text-muted">

                        We'd love to hear from you. Get in touch with our team.

                    </p>

                </div>

                <Row>

                    <Col lg={5} className="mb-4">

                        <Card className="shadow-sm p-4 h-100">

                            <h3 className="mb-4">

                                Contact Information

                            </h3>

                           <p>

                            <FaPhoneAlt className="me-2 text-warning"/>

                            <a
                            href="tel:+919876543210"
                            className="text-decoration-none text-dark"
                            >

                            +91 98765 43210

                            </a>

                            </p>

                            <p>

                            <FaEnvelope className="me-2 text-warning"/>

                            <a
                            href="mailto:support@gadgetzone.com"
                            className="text-decoration-none text-dark"
                            >

                            support@gadgetzone.com

                            </a>

                            </p>

                           <p>

                            <FaMapMarkerAlt className="me-2 text-warning"/>

                            <a

                            href="https://maps.google.com/?q=Chennai,Tamil+Nadu"

                            target="_blank"

                            rel="noreferrer"

                            className="text-decoration-none text-dark"

                            >

                            Chennai, Tamil Nadu, India

                            </a>

                            </p>

                            <p>

                                <FaClock className="me-2 text-warning" />

                                Mon - Sat : 9:00 AM - 8:00 PM

                            </p>

                            <hr />

                            <h5>

                                Follow Us

                            </h5>

                            <div className="d-flex gap-3 mt-3">

                                <a

                                href="https://facebook.com"

                                target="_blank"

                                rel="noreferrer"

                                >

                                <FaFacebook size={28}/>

                                </a>

                                <a

                                href="https://instagram.com"

                                target="_blank"

                                rel="noreferrer"

                                >

                                <FaInstagram size={28}/>

                                </a>

                                <a

                                href="https://linkedin.com"

                                target="_blank"

                                rel="noreferrer"

                                >

                                <FaLinkedin size={28}/>

                                </a>

                                <a

                                href="https://twitter.com"

                                target="_blank"

                                rel="noreferrer"

                                >

                                <FaTwitter size={28}/>

                                </a>

                            </div>

                        </Card>

                    </Col>

                    <Col lg={7}>

                        <Card className="shadow-sm p-4">

                            <h3 className="mb-4">

                                Send a Message

                            </h3>

                            <Form>

                                <Form.Group className="mb-3">

                                    <Form.Label>

                                        Full Name

                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3">

                                    <Form.Label>

                                        Email

                                    </Form.Label>

                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3">

                                    <Form.Label>

                                        Subject

                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Enter subject"
                                    />

                                </Form.Group>

                                <Form.Group className="mb-4">

                                    <Form.Label>

                                        Message

                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        placeholder="Write your message..."
                                    />

                                </Form.Group>

                                <Button
                                    variant="warning"
                                    className="w-100"
                                >

                                    Send Message

                                </Button>

                            </Form>

                        </Card>

                    </Col>

                </Row>

                <Row className="mt-5">

                <Col>

                <Card className="shadow-sm">

                <Card.Body>

                <h3 className="mb-4 text-center">

                Our Location

                </h3>

                <div className="ratio ratio-16x9">

                <iframe

                title="Google Map"

                src="https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed"

                allowFullScreen

                loading="lazy"

                ></iframe>

                </div>

                </Card.Body>

                </Card>

                </Col>

                </Row>

            </Container>

            <Footer />

        </>

    );

}

export default Contact;