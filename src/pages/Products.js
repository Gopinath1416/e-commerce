import { useState, useContext } from "react";
import {
Container,
Row,
Col,
Card,
Button,
Form
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import {
FaHeart,
FaShoppingCart,
FaStar,
FaRegStar
} from "react-icons/fa";

import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

function Products() {

const navigate = useNavigate();
const { cart, addToCart } = useContext(CartContext);
const [wishlist,setWishlist]=useState([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [sortBy, setSortBy] = useState("default");

const toggleWishlist=(id)=>{

if(wishlist.includes(id)){

setWishlist(

wishlist.filter(item=>item!==id)

);

}
else{

setWishlist([...wishlist,id]);

}

};

const calculateDiscount=(price,oldPrice)=>{

return Math.round(

((oldPrice-price)/oldPrice)*100

);
};
 const categories = [
        "All",
        ...new Set(products.map(product => product.category))
 ];

const filteredProducts = products
    .filter((product) => {

        const matchesSearch =
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category === category;

        return matchesSearch && matchesCategory;

    })
    .sort((a, b) => {

        switch (sortBy) {

            case "low-high":
                return a.price - b.price;

            case "high-low":
                return b.price - a.price;

            case "name":
                return a.name.localeCompare(b.name);

            case "rating":
                return b.rating - a.rating;

            default:
                return 0;

        }

    });

    const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
);

return(

<>

<NavigationBar cartCount={cartCount} />

<Container className="my-5">

<h2 className="text-center mb-5">

Our Products

</h2>

<Form.Control
    type="text"
    placeholder="🔍 Search Products..."
    className="mb-4"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
<div className="d-flex flex-wrap justify-content-center gap-2 mb-4">

    {categories.map((item) => (

        <Button
            key={item}
            variant={category === item ? "dark" : "outline-dark"}
            onClick={() => setCategory(item)}
        >
            {item}
        </Button>

    ))}

</div>

<Form.Select
    className="mb-4"
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
>

    <option value="default">
        Sort By
    </option>

    <option value="low-high">
        Price: Low to High
    </option>

    <option value="high-low">
        Price: High to Low
    </option>

    <option value="name">
        Name: A to Z
    </option>

    <option value="rating">
        Rating: High to Low
    </option>

</Form.Select>

<Row>

  {filteredProducts.length > 0 ? (

    filteredProducts.map((product) => (

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
              color={wishlist.includes(product.id) ? "red" : "black"}
            />
          </div>

          <Card.Img
            variant="top"
            src={product.image}
            className="featured-image"
          />

          <Card.Body>

            <Card.Title>{product.name}</Card.Title>

            <div>
              {[1, 2, 3, 4, 5].map((star) =>
                star <= product.rating ? (
                  <FaStar key={star} className="star" />
                ) : (
                  <FaRegStar key={star} className="star" />
                )
              )}
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
                <FaShoppingCart /> Add To Cart
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

    ))

  ) : (

    <Col xs={12}>
      <h3 className="text-center mt-5">
        No products found.
      </h3>
    </Col>

  )}

</Row>

</Container>

<Footer/>

</>

);

}

export default Products;