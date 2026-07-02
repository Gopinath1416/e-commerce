import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CartSummary({

    total,

    clearCart

}) {

    const navigate = useNavigate();

    return (

        <Card className="p-4 shadow-sm">

            <h4 className="mb-4">

                Order Summary

            </h4>

            <div className="d-flex justify-content-between mb-3">

                <strong>Total</strong>

                <strong>

                    ₹ {total.toLocaleString("en-IN")}

                </strong>

            </div>

            <div className="d-grid gap-3">


                <Button
                    variant="outline-danger"
                    onClick={clearCart}
                >

                    Clear Cart

                </Button>

                <Button
                    variant="warning"
                    size="lg"
                    onClick={() => navigate("/checkout")}
                >

                    Proceed to Checkout

                </Button>

            </div>

        </Card>

    );

}

export default CartSummary;