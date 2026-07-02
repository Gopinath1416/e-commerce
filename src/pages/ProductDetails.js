import { Container, Row, Col, Button, Alert, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import {
FaStar,
FaRegStar,
FaTruck,
FaUndo,
FaShieldAlt,
FaCheckCircle
} from "react-icons/fa";

function ProductDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    const recommendedProducts = products
        .filter((item) => item.id !== product.id)
        .slice(0, 4);


    const [quantity, setQuantity] = useState(1);

    const [message, setMessage] = useState("");

    const increaseQuantity = () => {

        if (quantity < 10) {

            setQuantity(quantity + 1);

        }

    };

    const decreaseQuantity = () => {

        if (quantity > 1) {

            setQuantity(quantity - 1);

        }

    };

    const handleAddToCart = () => {

        setMessage(`${quantity} ${product.name} added to cart.`);

    };

    const handleBuyNow = () => {

        alert("Buy Now functionality will be added in Phase 6.");

    };

    if (!product) {

        return (
            <h2 className="text-center mt-5">
                Product Not Found
            </h2>
        );

    }

    return (

        <>

            <NavigationBar cartCount={0} />

            <Container className="my-5">

                <div className="breadcrumb-custom">

                    Home

                    <span> &gt; </span>

                    Products

                    <span> &gt; </span>

                    {product.name}

                </div>

                <Row>

                    <Col md={6}>

                        <div className="product-image-box">

                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />

                        </div>

                    </Col>

                    <Col md={6}>

                        <h2 className="fw-bold">

                            {product.name}

                        </h2>

                        <div className="mb-3">

                            {[1,2,3,4,5].map((star)=>

                                star<=product.rating

                                ?

                                <FaStar
                                    key={star}
                                    className="star"
                                />

                                :

                                <FaRegStar
                                    key={star}
                                    className="star"
                                />

                            )}

                        </div>

                        <h3 className="text-warning fw-bold">

                            ₹ {product.price.toLocaleString("en-IN")}

                        </h3>

                        <h5 className="text-muted text-decoration-line-through">

                            ₹ {product.oldPrice.toLocaleString("en-IN")}

                        </h5>

                        <span className="discount-badge">

                            {Math.round(
                                ((product.oldPrice-product.price)/product.oldPrice)*100
                            )}% OFF

                        </span>

                        <hr className="my-4" />

                        <h4 className="section-title">
                            Description
                        </h4>

                        <p className="product-description">

                            {product.description}

                        </p>

                        <hr className="my-4" />

                        <h4 className="section-title">
                            Specifications
                        </h4>

                        <ul className="spec-list">

                            {product.specifications.map((spec, index) => (

                                <li key={index}>
                                    ✔ {spec}
                                </li>

                            ))}

                        </ul>

                        <hr className="my-4" />

                        <h4 className="section-title">
                            Quantity
                        </h4>

                        <div className="quantity-container">

                            <Button
                                variant="outline-dark"
                                onClick={decreaseQuantity}
                            >
                                -
                            </Button>

                            <span className="quantity-value">

                                {quantity}

                            </span>

                            <Button
                                variant="outline-dark"
                                onClick={increaseQuantity}
                            >
                                +
                            </Button>

                        </div>

                        {message && (

                            <Alert
                                variant="success"
                                className="mt-4"
                            >

                                {message}

                            </Alert>

                        )}

                        <div className="product-features mt-4">

                            <div>

                                <FaCheckCircle className="feature-icon"/>

                                <span>In Stock</span>

                            </div>

                            <div>

                                <FaTruck className="feature-icon"/>

                                <span>Free Delivery</span>

                            </div>

                            <div>

                                <FaUndo className="feature-icon"/>

                                <span>7 Days Return</span>

                            </div>

                            <div>

                                <FaShieldAlt className="feature-icon"/>

                                <span>1 Year Warranty</span>

                            </div>

                        </div>

                        <div className="d-grid gap-3 mt-4">

                            <Button
                                variant="warning"
                                size="lg"
                                onClick={handleAddToCart}
                            >

                                🛒 Add To Cart

                            </Button>

                            <Button
                                variant="dark"
                                size="lg"
                                onClick={handleBuyNow}
                            >

                                ⚡ Buy Now

                            </Button>

                        </div>

                    </Col>

                </Row>

                </Container>

                <Container className="my-5">

                    <h2 className="text-center fw-bold mb-4">

                        You May Also Like

                    </h2>

                    <Row>

                        {recommendedProducts.map((item) => (

                            <Col
                                xs={12}
                                sm={6}
                                lg={3}
                                key={item.id}
                                className="mb-4"
                            >

                                <Card className="featured-card h-100">

                                    <Card.Img
                                        variant="top"
                                        src={item.image}
                                        className="featured-image"
                                    />

                                    <Card.Body className="text-center">

                                        <Card.Title>

                                            {item.name}

                                        </Card.Title>

                                        <h5 className="text-warning">

                                            ₹ {item.price.toLocaleString("en-IN")}

                                        </h5>

                                        <Button
                                            variant="dark"
                                            onClick={() => navigate(`/product/${item.id}`)}
                                        >

                                            View Details

                                        </Button>

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

export default ProductDetails;