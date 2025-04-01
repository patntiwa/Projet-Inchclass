import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "./CartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
