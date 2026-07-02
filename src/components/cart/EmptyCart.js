import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function EmptyCart() {

    return (

        <div className="text-center py-5">

            <h2>Your Cart is Empty</h2>

            <p className="text-muted">

                Looks like you haven't added anything yet.

            </p>

            <Button
                as={Link}
                to="/products"
                variant="warning"
            >

                Continue Shopping

            </Button>

        </div>

    );

}

export default EmptyCart;