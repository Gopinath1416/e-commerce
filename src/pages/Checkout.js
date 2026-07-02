import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",

        phone: "",

        address: "",

        city: "",

        state: "",

        pincode: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        localStorage.setItem(

            "shippingAddress",

            JSON.stringify(formData)

        );

        navigate("/order-summary");

    };

    return (

        <>

            <NavigationBar cartCount={0} />

            <Container className="py-5 mt-5">

                <Card
                    className="shadow mx-auto p-4"
                    style={{ maxWidth: "700px" }}
                >

                    <h2 className="text-center mb-4">

                        Shipping Address

                    </h2>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3">

                            <Form.Label>

                                Full Name

                            </Form.Label>

                            <Form.Control
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>

                                Mobile Number

                            </Form.Label>

                            <Form.Control
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>

                                Address

                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>

                                City

                            </Form.Label>

                            <Form.Control
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">

                            <Form.Label>

                                State

                            </Form.Label>

                            <Form.Control
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-4">

                            <Form.Label>

                                PIN Code

                            </Form.Label>

                            <Form.Control
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                            />

                        </Form.Group>

                        <Button
                            type="submit"
                            variant="warning"
                            className="w-100"
                        >

                            Continue

                        </Button>

                    </Form>

                </Card>

            </Container>

            <Footer />

        </>

    );

}

export default Checkout;