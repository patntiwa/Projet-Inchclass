import { useAuth } from "./AuthContext";

const LoginButton = () => {
    const { user, login, logout } = useAuth();

    return (
        <button onClick={user ? logout : login}>
            {user ? "Se déconnecter" : "Se connecter"}
        </button>
    );
};

export default LoginButton;
