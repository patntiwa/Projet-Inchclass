import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, dispatch } = useCart();

    return (
        <div>
            <h2>Panier</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.price}€
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Vider le panier</button>
        </div>
    );
};

export default Cart;