import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHelpPosts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/help/posts');
        const data = await response.json();

        if (response.ok) {
          setPosts(data);
        } else {
          throw new Error(data.message || 'Failed to fetch help posts');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHelpPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-yellow-50 py-10 px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-700 font-serif">
          Help Posts Dashboard
        </h1>

        {loading ? (
          <p className="text-center text-lg text-gray-500">Loading posts...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg">{error}</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No posts available yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                to={`/post/${post._id}`}
                key={post._id}
                className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <h2 className="text-2xl font-semibold text-green-700 mb-2">{post.type}</h2>
                <p className="text-sm text-gray-600 mb-2 font-medium">
                  Category: {post.Options}
                </p>
                <p className="text-gray-800 truncate">{post.details}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
