import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

function Payment() {

    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

    const handlePayment = () => {

        localStorage.setItem(

            "paymentMethod",

            paymentMethod

        );

        navigate("/order-success");

    };

    return (

        <>

            <NavigationBar cartCount={0} />

            <Container className="py-5 mt-5">

                <Card
                    className="shadow mx-auto p-4"
                    style={{ maxWidth: "700px" }}
                >

                    <h2 className="mb-4 text-center">

                        Select Payment Method

                    </h2>

                    <Form>

                        <Form.Check

                            type="radio"

                            label="Cash on Delivery"

                            value="Cash on Delivery"

                            checked={paymentMethod === "Cash on Delivery"}

                            onChange={(e)=>

                                setPaymentMethod(e.target.value)

                            }

                            className="mb-3"

                        />

                        <Form.Check

                            type="radio"

                            label="Credit / Debit Card"

                            value="Credit / Debit Card"

                            checked={paymentMethod === "Credit / Debit Card"}

                            onChange={(e)=>

                                setPaymentMethod(e.target.value)

                            }

                            className="mb-3"

                        />

                        <Form.Check

                            type="radio"

                            label="UPI"

                            value="UPI"

                            checked={paymentMethod === "UPI"}

                            onChange={(e)=>

                                setPaymentMethod(e.target.value)

                            }

                            className="mb-3"

                        />

                        <Form.Check

                            type="radio"

                            label="Net Banking"

                            value="Net Banking"

                            checked={paymentMethod === "Net Banking"}

                            onChange={(e)=>

                                setPaymentMethod(e.target.value)

                            }

                            className="mb-4"

                        />

                        <Button

                            className="w-100"

                            variant="success"

                            onClick={handlePayment}

                        >

                            Place Order

                        </Button>

                    </Form>

                </Card>

            </Container>

            <Footer />

        </>

    );

}

export default Payment;