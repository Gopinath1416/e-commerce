import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { CartContext } from "../context/CartContext";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";

function Cart() {

    const {

        cart,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart,

        clearCart

    } = useContext(CartContext);

    const cartCount = cart.reduce(

        (total, item) => total + item.quantity,

        0

    );

    const total = cart.reduce(

        (sum, item) => sum + item.price * item.quantity,

        0

    );

    return (

        <>

            <NavigationBar cartCount={cartCount} />

            <Container className="my-5 pt-5">

                <h2 className="mb-4">

                    Shopping Cart

                </h2>

                {

                    cart.length === 0

                    ?

                    (

                        <EmptyCart />

                    )

                    :

                    (

                        <Row>

                            <Col lg={8}>

                                {

                                    cart.map((item) => (

                                        <CartItem

                                            key={item.id}

                                            item={item}

                                            increaseQuantity={increaseQuantity}

                                            decreaseQuantity={decreaseQuantity}

                                            removeFromCart={removeFromCart}

                                        />

                                    ))

                                }

                            </Col>

                            <Col lg={4}>

                                <CartSummary

                                    total={total}

                                    clearCart={clearCart}

                                />

                            </Col>

                        </Row>

                    )

                }

            </Container>

            <Footer />

        </>

    );

}

export default Cart;