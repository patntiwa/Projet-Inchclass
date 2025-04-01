import { AuthProvider } from "./AuthContext";
import LoginButton from "./LoginButton";
import { CartProvider } from "./CartContext";
import Cart from "./Cart";
import Clock from "./Clock";
import PostList from "./PostList";

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
