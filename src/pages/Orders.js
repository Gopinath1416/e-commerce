import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

function Orders() {

    const navigate = useNavigate();

    const orders = JSON.parse(

        localStorage.getItem("orders")

    ) || [];

    return (

        <>

            <NavigationBar cartCount={0} />

            <Container className="py-5 mt-5">

                <h2 className="mb-4">

                    My Orders

                </h2>

                {

                    orders.length === 0 ?

                    (

                        <Card className="p-5 text-center shadow">

                            <h4>

                                No Orders Yet

                            </h4>

                            <Button

                                className="mt-3"

                                variant="warning"

                                onClick={() => navigate("/products")}

                            >

                                Start Shopping

                            </Button>

                        </Card>

                    )

                    :

                    (

                        orders.map((order) => (

                            <Card

                                key={order.id}

                                className="mb-4 shadow"

                            >

                                <Card.Body>

                                    <div className="d-flex justify-content-between">

                                        <div>

                                            <h5>

                                                Order ID

                                            </h5>

                                            <p>

                                                {order.id}

                                            </p>

                                        </div>

                                        <div>

                                            <h5>

                                                Date

                                            </h5>

                                            <p>

                                                {order.date}

                                            </p>

                                        </div>

                                    </div>

                                    <hr />

                                    <p>

                                        <strong>

                                            Payment :

                                        </strong>

                                        {" "}

                                        {order.paymentMethod}

                                    </p>

                                    <p>

                                        <strong>

                                            Total :

                                        </strong>

                                        ₹ {order.total.toLocaleString("en-IN")}

                                    </p>

                                    <p>

                                        <strong>

                                            Items :

                                        </strong>

                                        {order.items.length}

                                    </p>

                                    <Button

                                        variant="dark"

                                        onClick={() =>

                                            navigate(`/orders/${order.id}`)

                                        }

                                    >

                                        View Details

                                    </Button>

                                </Card.Body>

                            </Card>

                        ))

                    )

                }

            </Container>

            <Footer />

        </>

    );

}

export default Orders;