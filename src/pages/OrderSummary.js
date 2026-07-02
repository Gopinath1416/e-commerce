import { useContext } from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

import { CartContext } from "../context/CartContext";

function OrderSummary() {

    const navigate = useNavigate();

    const { cart } = useContext(CartContext);

    const address = JSON.parse(
        localStorage.getItem("shippingAddress")
    );

    const subtotal = cart.reduce(

        (total, item) =>

            total + item.price * item.quantity,

        0

    );

    const delivery = subtotal > 1000 ? 0 : 99;

    const total = subtotal + delivery;

    const cartCount = cart.reduce(

        (total, item) => total + item.quantity,

        0

    );

    return (

        <>

            <NavigationBar cartCount={cartCount} />

            <Container className="py-5 mt-5">

                <h2 className="mb-4">

                    Order Summary

                </h2>

                <Card className="mb-4 p-3 shadow-sm">

                    <h4>

                        Shipping Address

                    </h4>

                    <p className="mb-1">

                        <strong>{address?.name}</strong>

                    </p>

                    <p className="mb-1">

                        {address?.address}

                    </p>

                    <p className="mb-1">

                        {address?.city}, {address?.state}

                    </p>

                    <p className="mb-1">

                        PIN: {address?.pincode}

                    </p>

                    <p>

                        Mobile: {address?.phone}

                    </p>

                </Card>

                <Card className="shadow-sm">

                    <Card.Body>

                        <h4 className="mb-3">

                            Products

                        </h4>

                        <ListGroup variant="flush">

                            {cart.map((item) => (

                                <ListGroup.Item key={item.id}>

                                    <div className="d-flex justify-content-between">

                                        <div>

                                            <strong>

                                                {item.name}

                                            </strong>

                                            <br />

                                            Qty : {item.quantity}

                                        </div>

                                        <div>

                                            ₹ {(item.price * item.quantity).toLocaleString("en-IN")}

                                        </div>

                                    </div>

                                </ListGroup.Item>

                            ))}

                        </ListGroup>

                        <hr />

                        <div className="d-flex justify-content-between">

                            <span>

                                Subtotal

                            </span>

                            <strong>

                                ₹ {subtotal.toLocaleString("en-IN")}

                            </strong>

                        </div>

                        <div className="d-flex justify-content-between">

                            <span>

                                Delivery

                            </span>

                            <strong>

                                {

                                    delivery === 0

                                    ?

                                    "FREE"

                                    :

                                    `₹ ${delivery}`

                                }

                            </strong>

                        </div>

                        <hr />

                        <div className="d-flex justify-content-between">

                            <h4>Total</h4>

                            <h4>

                                ₹ {total.toLocaleString("en-IN")}

                            </h4>

                        </div>

                        <Button

                            className="w-100 mt-4"

                            variant="success"

                            onClick={() => navigate("/payment")}

                        >

                            Proceed to Payment

                        </Button>

                    </Card.Body>

                </Card>

            </Container>

            <Footer />

        </>

    );

}

export default OrderSummary;