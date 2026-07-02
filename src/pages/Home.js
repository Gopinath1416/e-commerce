import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../data/products";
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../images/hero.png";
import { AuthContext } from "../context/AuthContext";
import {
FaMobileAlt,
FaLaptop,
FaHeadphones,
FaGamepad,
FaTabletAlt,
FaCamera,
FaHome,
FaKeyboard
} from "react-icons/fa";
import {
FaHeart,
FaShoppingCart,
FaStar,
FaRegStar
} from "react-icons/fa";

function Home() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  console.log(cart);
  const calculateDiscount = (price, oldPrice) => {

    return Math.round(

        ((oldPrice - price) / oldPrice) * 100

    );

  };
  const toggleWishlist = (id) => {

    if(wishlist.includes(id)){

        setWishlist(

            wishlist.filter(item => item !== id)

        );

    }

    else{

        setWishlist([...wishlist,id]);

    }

  };
  
  return (

    <>

      <NavigationBar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />

      <section className="hero-section">

        <Container>

          <Row className="align-items-center">

            <Col lg={6} md={6}>

              <h1 className="hero-title">
                Mega Electronics Sale
              </h1>
              {
                  user &&

                  <h4 className="text-warning mt-3">

                      Welcome back, {user.name}! 👋

                  </h4>

              }

              <p className="hero-text">
                Discover premium gadgets, smartphones, laptops,
                gaming accessories and smart devices at unbeatable prices.
              </p>

              <Button
                as={Link}
                to="/products"
                className="shop-btn"
              >
                Shop Now
              </Button>

            </Col>

            <Col lg={6} md={6} className="text-center">

              <img
                src={hero}
                alt="Hero"
                className="hero-image"
              />

            </Col>

          </Row>

        </Container>

      </section>

      <Container className="my-5">

        <h2 className="text-center mb-5">
        Shop by Categories
        </h2>

        <Row className="g-4">

        <Col xs={6} md={3}>
        <div className="category-card"
        onClick={() => navigate("/products")}
        >
        <FaMobileAlt className="category-icon"/>
        <h5>Smartphones</h5>
        </div>
        </Col>

        <Col xs={6} md={3}>
        <div className="category-card"
        onClick={() => navigate("/products")}
        >
        <FaLaptop className="category-icon"/>
        <h5>Laptops</h5>
        </div>
        </Col>

        <Col xs={6} md={3}>
        <div className="category-card"
        onClick={() => navigate("/products")}
        >
        <FaHeadphones className="category-icon"/>
        <h5>Audio</h5>
        </div>
        </Col>

        <Col xs={6} md={3}>
        <div className="category-card"
        onClick={() => navigate("/products")}
        >
        <FaGamepad className="category-icon"/>
        <h5>Gaming</h5>
        </div>
        </Col>

        <Col xs={6} md={3}>
        <div className="category-card"
        onClick={() => navigate("/products")}
        >
        <FaTabletAlt className="category-icon"/>
        <h5>Tablets</h5>
        </div>
        </Col>

        <Col xs={6} md={3}>
        <div className="category-card"
        onClick={() => navigate("/products")}
        >
        <FaCamera className="category-icon"/>
        <h5>Cameras</h5>
        </div>
        </Col>

        <Col xs={6} md={3}>
        <div className="category-card"
        onClick={() => navigate("/products")}
        >
        <FaHome className="category-icon"/>
        <h5>Home Appliances</h5>
        </div>
        </Col>

        <Col xs={6} md={3}>
        <div className="category-card"
        onClick={() => navigate("/products")}
        >
        <FaKeyboard className="category-icon"/>
        <h5>Accessories</h5>
        </div>
        </Col>

        </Row>

     </Container>

     <Container className="my-5">

      <h2 className="text-center mb-5">
      Featured Products
      </h2>

      <Row>

      {products.slice(0,4).map((product)=>(

      <Col
      xs={12}
      sm={6}
      lg={3}
      key={product.id}
      className="mb-4"
      >

      <Card className="featured-card">

      <div className="sale-badge">

      {calculateDiscount(product.price, product.oldPrice)}% OFF

      </div>

      <div
        className="wishlist"
        onClick={() => toggleWishlist(product.id)}
        >

        <FaHeart

        color={
        wishlist.includes(product.id)
        ?
        "red"
        :
        "black"
        }

        />

      </div>

      <Card.Img
      variant="top"
      src={product.image}
      className="featured-image"
      />

      <Card.Body>

      <Card.Title>

      {product.name}

      </Card.Title>

      <div className="mb-2">

        {[1,2,3,4,5].map((star)=>(

        star <= product.rating ?

        <FaStar key={star} className="star"/>

        :

        <FaRegStar key={star} className="star"/>

        ))}

      </div>

      <h5>

      ₹ {product.price.toLocaleString("en-IN")}

      </h5>

      <small className="old-price">

      ₹ {product.oldPrice.toLocaleString("en-IN")}

      </small>

      <div className="d-grid gap-2 mt-3">

      <Button

        variant="warning"

        onClick={() => addToCart(product)}

        >

        <FaShoppingCart/>

        {" "}Add To Cart

      </Button>

      <Button
        variant="dark"
        onClick={() => navigate(`/product/${product.id}`)}
    >
        View Details
      </Button>

      </div>

      </Card.Body>

      </Card>

      </Col>

      ))}

      </Row>

    </Container>

      <Footer />

    </>

  );

}

export default Home;