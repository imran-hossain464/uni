import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/help/posts/${id}`);
        const data = await res.json();
        if (res.ok) setPost(data);
        else console.error(data.message);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      }
    };
    fetchPost();
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments(prev => [...prev, comment]);
      setComment('');
    }
  };

  const handleLike = () => setLikes(prev => prev + 1);
  const handleDislike = () => setDislikes(prev => prev + 1);

  if (!post) {
    return <p className="text-center mt-20">Loading post...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-10">
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-green-700">{post.type}</h2>
          <p className="text-gray-600 font-semibold mb-2">Category: {post.Options}</p>
          <p className="text-gray-800 whitespace-pre-wrap mb-6">{post.details}</p>

          {/* Like/Dislike Section */}
          <div className="flex items-center space-x-6 mb-8">
            <button
              onClick={handleLike}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              👍 Like {likes > 0 && `(${likes})`}
            </button>
            <button
              onClick={handleDislike}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              👎 Dislike {dislikes > 0 && `(${dislikes})`}
            </button>
          </div>

          {/* Comment Section */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Comments</h3>
            <form onSubmit={handleCommentSubmit} className="mb-6">
              <textarea
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                rows={3}
                placeholder="Write your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
              >
                Add Comment
              </button>
            </form>

            {comments.length === 0 ? (
              <p className="text-gray-500">No comments yet.</p>
            ) : (
              <ul className="space-y-2">
                {comments.map((c, index) => (
                  <li key={index} className="bg-gray-100 p-3 rounded">{c}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetails;
