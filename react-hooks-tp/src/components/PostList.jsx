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
        <div>
            <button onClick={fetchPosts} disabled={loading}>
                {loading ? "Chargement..." : "Recharger"}
            </button>
            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
