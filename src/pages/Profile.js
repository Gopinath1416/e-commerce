import { useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

function Profile() {

    const { user, logout } = useContext(AuthContext);

    const { cart } = useContext(CartContext);

    const navigate = useNavigate();

    const cartCount = cart.reduce(

        (total, item) => total + item.quantity,

        0

    );

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    return (

        <>

            <NavigationBar cartCount={cartCount} />

            <Container className="py-5 mt-5">

                <Card
                    className="shadow mx-auto p-4"
                    style={{ maxWidth: "600px" }}
                >

                    <h2 className="text-center mb-4">

                        My Profile

                    </h2>

                    <hr />

                    <h5>

                        Name

                    </h5>

                    <p>

                        {user?.name}

                    </p>

                    <h5>

                        Email

                    </h5>

                    <p>

                        {user?.email}

                    </p>

                    <h5>

                        Items in Cart

                    </h5>

                    <p>

                        {cartCount}

                    </p>

                    <Button
                        variant="outline-primary"
                        className="mb-3"
                    >

                        Edit Profile

                    </Button>

                    <Button
                        variant="danger"
                        onClick={handleLogout}
                    >

                        Logout

                    </Button>

                </Card>

            </Container>

            <Footer />

        </>

    );

}

export default Profile;