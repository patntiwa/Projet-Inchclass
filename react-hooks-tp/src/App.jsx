import { AuthProvider } from "./context/AuthContext";
import LoginButton from "./components/LoginButton";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Clock from "./components/Clock";
import PostList from "./components/PostList";

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <div>
                    <h1>TP React</h1>
                    <LoginButton />
                    <Cart />
                    <Clock />
                    <PostList />
                </div>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
