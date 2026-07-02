import { Card, Button } from "react-bootstrap";
import { useState } from "react";

function CartSummary({

    total,

    clearCart

}) {

    const [success, setSuccess] = useState(false);

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
                    onClick={() => setSuccess(true)}
                >

                    Proceed to Checkout

                </Button>

                {success && (

                <div className="alert alert-success mt-3">

                    🎉 Order placed successfully!

                </div>

                )}

            </div>

        </Card>

    );

}

export default CartSummary;