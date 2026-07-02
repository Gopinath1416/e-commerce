import { Container, Row, Col, Card } from "react-bootstrap";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

import {
    FaBullseye,
    FaShippingFast,
    FaShieldAlt,
    FaHeadset,
    FaUsers,
    FaBoxOpen
} from "react-icons/fa";

function About() {

    return (

        <>

            <NavigationBar cartCount={0} />

            <Container className="py-5 mt-5">

                <div className="text-center mb-5">

                    <h1>About GadgetZone</h1>

                    <p className="text-muted">

                        Your trusted destination for premium electronics,
                        gadgets and accessories at affordable prices.

                    </p>

                </div>

                <Row className="align-items-center mb-5">

                    <Col md={6}>

                        <h2>Who We Are</h2>

                        <p>

                            GadgetZone is a modern electronics store dedicated
                            to providing customers with high-quality products,
                            excellent customer service, and competitive pricing.

                        </p>

                        <p>

                            From smartphones and laptops to gaming accessories
                            and home appliances, we bring the latest technology
                            to your doorstep.

                        </p>

                    </Col>

                    <Col md={6}>

                        <Card className="shadow-sm p-4 text-center">

                            <FaBullseye
                                size={60}
                                className="text-warning mb-3"
                            />

                            <h3>Our Mission</h3>

                            <p>

                                To make the latest technology accessible,
                                affordable, and reliable for everyone.

                            </p>

                        </Card>

                    </Col>

                </Row>

                <h2 className="text-center mb-4">

                    Why Choose GadgetZone?

                </h2>

                <Row className="g-4 mb-5">

                    <Col md={4}>

                        <Card className="text-center shadow-sm p-4 h-100">

                            <FaShippingFast
                                size={50}
                                className="text-primary mb-3"
                            />

                            <h5>Fast Delivery</h5>

                            <p>

                                Quick and secure delivery across India.

                            </p>

                        </Card>

                    </Col>

                    <Col md={4}>

                        <Card className="text-center shadow-sm p-4 h-100">

                            <FaShieldAlt
                                size={50}
                                className="text-success mb-3"
                            />

                            <h5>Secure Shopping</h5>

                            <p>

                                Safe payments and trusted products.

                            </p>

                        </Card>

                    </Col>

                    <Col md={4}>

                        <Card className="text-center shadow-sm p-4 h-100">

                            <FaHeadset
                                size={50}
                                className="text-danger mb-3"
                            />

                            <h5>24/7 Support</h5>

                            <p>

                                Friendly customer support whenever you need help.

                            </p>

                        </Card>

                    </Col>

                </Row>

                <h2 className="text-center mb-4">

                    Our Achievements

                </h2>

                <Row className="text-center">

                    <Col md={3} sm={6} className="mb-4">

                        <FaUsers
                            size={45}
                            className="text-warning"
                        />

                        <h3 className="mt-3">10K+</h3>

                        <p>Happy Customers</p>

                    </Col>

                    <Col md={3} sm={6} className="mb-4">

                        <FaBoxOpen
                            size={45}
                            className="text-primary"
                        />

                        <h3 className="mt-3">500+</h3>

                        <p>Products</p>

                    </Col>

                    <Col md={3} sm={6} className="mb-4">

                        <FaShieldAlt
                            size={45}
                            className="text-success"
                        />

                        <h3 className="mt-3">100%</h3>

                        <p>Secure Payments</p>

                    </Col>

                    <Col md={3} sm={6} className="mb-4">

                        <FaShippingFast
                            size={45}
                            className="text-danger"
                        />

                        <h3 className="mt-3">24 Hours</h3>

                        <p>Fast Delivery</p>

                    </Col>

                </Row>

            </Container>

            <Footer />

        </>

    );

}

export default About;