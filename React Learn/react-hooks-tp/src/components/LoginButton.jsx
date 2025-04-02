import { useAuth } from "../context/AuthContext";

const LoginButton = () => {
    const { user, login, logout } = useAuth();

    return (
        <button
            onClick={user ? logout : login}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
            {user ? "Se déconnecter" : "Se connecter"}
        </button>
    );
};

export default LoginButton;
