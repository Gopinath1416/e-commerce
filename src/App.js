import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/Checkout";
import OrderSummary from "./pages/OrderSummary";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {

    const timer = setTimeout(() => {

        setLoading(false);

    }, 1500);

    return () => clearTimeout(timer);

}, []);

  return (

    loading ?

    <Loader />

    :

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
        path="/order-success"
        element={<OrderSuccess />}
        />

        <Route
        path="/orders"
        element={<Orders />}
        />

        <Route
        path="/orders/:id"
        element={
        <h1 className="text-center mt-5">
        Order Details Coming Soon...
        </h1>
        }
        />

        <Route
            path="/cart"
            element={
                <ProtectedRoute>
                    <Cart />
                </ProtectedRoute>
            }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
            path="/profile"
            element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            }
        />

        <Route
        path="/order-summary"
        element={<OrderSummary />}
        />

      </Routes>

      <BackToTop />

    </BrowserRouter>

  );

}

export default App;
