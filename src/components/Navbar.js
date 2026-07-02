import { useState,  useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../images/logo.png";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function NavigationBar({ cartCount }) {

  const [expanded, setExpanded] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {

      logout();

      navigate("/");

  };

  return (

    <Navbar
      expand="lg"
      expanded={expanded}
      className="navbar-custom"
      variant="dark"
      fixed="top"
    >

      <Container fluid>

        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => setExpanded(false)}
        >
          <img
            src={logo}
            alt="GadgetZone"
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <FaTimes color="white" size={24} />
          ) : (
            <FaBars color="white" size={24} />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto navbar-links">

            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/products"
              onClick={() => setExpanded(false)}
            >
              Products
            </Nav.Link>

            <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
            >
                About
            </Nav.Link>

            <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => setExpanded(false)}
            >
                Contact
            </Nav.Link>

          </Nav>

          <div className="d-flex align-items-center">

            <Button
              className="cart-btn me-2"
              as={Link}
              to="/cart"
            >
              <FaShoppingCart />

              {" "}Cart ({cartCount})
            </Button>

            {

            user ? (

            <>

            <Button
              variant="outline-light"
              className="me-2"
              as={Link}
              to="/profile"
          >

              <FaUser />

              {" "}

              {user.name}

          </Button>

            <Button
                variant="danger"
                onClick={handleLogout}
            >

                Logout

            </Button>

            </>

            )

            :

            (

            <Button
                variant="outline-light"
                as={Link}
                to="/login"
            >

                <FaUser />

                {" "}Login

            </Button>

            )

            }

          </div>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  );

}

export default NavigationBar;