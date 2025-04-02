import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, dispatch } = useCart();

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Panier</h2>
            <ul className="space-y-4">
                {cart.map((item, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
                    >
                        <span>
                            {item.name} - <span className="font-semibold">{item.price}€</span>
                        </span>
                        <button
                            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Vider le panier
            </button>
        </div>
    );
};

export default Cart;