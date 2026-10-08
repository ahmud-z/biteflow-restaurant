import { useEffect, useMemo, useState } from "react";
import { CartContext } from "./CartContext";

const CART_STORAGE_KEY = "biteflow-cart";

const getStoredCart = () => {
    try {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error("Unable to restore the saved cart.", error);
        return [];
    }
};

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(getStoredCart);

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addToCart = (dish, quantity = 1) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.id === dish.id);

            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === dish.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...currentItems, { ...dish, quantity }];
        });
    };

    const updateQuantity = (dishId, quantity) => {
        setItems((currentItems) =>
            quantity > 0
                ? currentItems.map((item) =>
                    item.id === dishId ? { ...item, quantity } : item
                )
                : currentItems.filter((item) => item.id !== dishId)
        );
    };

    const removeFromCart = (dishId) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== dishId));
    };

    const cart = useMemo(() => ({
        items,
        itemCount: items.reduce((total, item) => total + item.quantity, 0),
        subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
        addToCart,
        updateQuantity,
        removeFromCart,
    }), [items]);

    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
