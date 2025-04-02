import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./CartReducer";

const CartContext = createContext();

const initialCartState = []; // Exemple : [{ id: 1, name: "Produit A", price: 10 }]

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialCartState);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
