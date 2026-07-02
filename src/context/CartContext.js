import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {

        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];

    });

    useEffect(() => {

        localStorage.setItem(

            "cart",

            JSON.stringify(cart)

        );

    }, [cart]);

    const addToCart = (product, quantity = 1) => {

        console.log("Add To Cart Clicked:", product);

        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {

            const updatedCart = cart.map((item) =>

                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + quantity
                    }
                    : item

            );

            setCart(updatedCart);
            
            console.log("Updated Cart:", updatedCart);

        } else {

            setCart([
                ...cart,
                {
                    ...product,
                    quantity
                }
            ]);

            console.log("Updated Cart:", [
                ...cart,
                {
                    ...product,
                    quantity
                }
            ]);

        }

    };

    const increaseQuantity = (id) => {

        setCart(

            cart.map((item) =>

                item.id === id

                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }

                    : item

            )

        );

    };

    const decreaseQuantity = (id) => {

        setCart(

            cart
                .map((item) =>

                    item.id === id

                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }

                        : item

                )
                .filter((item) => item.quantity > 0)

        );

    };

    const removeFromCart = (id) => {

        setCart(

            cart.filter((item) => item.id !== id)

        );

    };

    const clearCart = () => {

        setCart([]);

    };

    return (

        <CartContext.Provider
           value={{

                cart,
                setCart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                clearCart

            }}
        >

            {children}

        </CartContext.Provider>

    );

}

export default CartProvider;