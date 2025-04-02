import { useState, useEffect } from "react";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <button
                onClick={fetchPosts}
                disabled={loading}
                className={`px-6 py-3 rounded-lg text-white ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                }`}
            >
                {loading ? "Chargement..." : "Recharger"}
            </button>
            <ul className="mt-6 space-y-4">
                {posts.slice(0, 10).map((post) => (
                    <li
                        key={post.id}
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
