import { useContext, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

import { CartContext } from "../context/CartContext";

function OrderSuccess() {

    const navigate = useNavigate();

    const {cart, setCart } = useContext(CartContext);

    const address = JSON.parse(
        localStorage.getItem("shippingAddress")
    );

    const paymentMethod = localStorage.getItem(
        "paymentMethod"
    );

    const orderId =
        "GZ" +
        Math.floor(
            100000 + Math.random() * 900000
        );

    useEffect(() => {

        const previousOrders = JSON.parse(
            localStorage.getItem("orders")
        ) || [];

        const orderExists = previousOrders.some(
            (order) => order.id === orderId
        );

        if (!orderExists) {

            const newOrder = {

                id: orderId,

                address,

                paymentMethod,

                items: [...cart],

                total: cart.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                ),

                date: new Date().toLocaleString()

            };

            localStorage.setItem(
                "orders",
                JSON.stringify([
                    ...previousOrders,
                    newOrder
                ])
            );

            setCart([]);

        }

    }, [address, cart, orderId, paymentMethod, setCart]);

    return (

        <>

            <NavigationBar cartCount={0} />

            <Container className="py-5 mt-5">

                <Card
                    className="shadow text-center p-5 mx-auto"
                    style={{ maxWidth: "700px" }}
                >

                    <FaCheckCircle
                        size={80}
                        color="green"
                        className="mb-4"
                    />

                    <h2>

                        Order Placed Successfully!

                    </h2>

                    <p className="text-muted">

                        Thank you for shopping with GadgetZone.

                    </p>

                    <hr />

                    <h5>

                        Order ID

                    </h5>

                    <p>

                        {orderId}

                    </p>

                    <h5>

                        Payment Method

                    </h5>

                    <p>

                        {paymentMethod}

                    </p>

                    <h5>

                        Shipping Address

                    </h5>

                    <p>

                        {address?.name}

                    </p>

                    <p>

                        {address?.address}

                    </p>

                    <p>

                        {address?.city}, {address?.state}

                    </p>

                    <p>

                        {address?.pincode}

                    </p>

                    <Button

                        variant="warning"

                        className="mt-3"

                        onClick={() => navigate("/")}

                    >

                        Continue Shopping

                    </Button>

                    <Button

                        variant="dark"

                        className="mt-3"

                        onClick={() => {
                            console.log("Button Clicked");
                            navigate("/orders");
                        }}

                    >

                        View Orders

                    </Button>

                </Card>

            </Container>

            <Footer />

        </>

    );

}

export default OrderSuccess;