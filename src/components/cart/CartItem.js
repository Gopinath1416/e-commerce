import { Card, Button, Row, Col } from "react-bootstrap";

function CartItem({

    item,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart

}) {

    return (

        <Card className="mb-4 shadow-sm p-3">

            <Row className="align-items-center">

                <Col md={2}>

                    <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                    />

                </Col>

                <Col md={4}>

                    <h5>

                        {item.name}

                    </h5>

                    <p>

                        ₹ {item.price.toLocaleString("en-IN")}

                    </p>

                </Col>

                <Col md={3}>

                    <Button
                        variant="outline-dark"
                        onClick={() => decreaseQuantity(item.id)}
                    >

                        -

                    </Button>

                    <span className="mx-3">

                        {item.quantity}

                    </span>

                    <Button
                        variant="outline-dark"
                        onClick={() => increaseQuantity(item.id)}
                    >

                        +

                    </Button>

                </Col>

                <Col md={2}>

                    <strong>

                        ₹ {(item.price * item.quantity).toLocaleString("en-IN")}

                    </strong>

                </Col>

                <Col md={1}>

                    <Button
                        variant="danger"
                        onClick={() => removeFromCart(item.id)}
                    >

                        ×

                    </Button>

                </Col>

            </Row>

        </Card>

    );

}

export default CartItem;