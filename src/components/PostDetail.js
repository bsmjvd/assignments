import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PostDetailSkeleton from './PostDetailSkeleton';
import CommentList from './CommentList';
import './PostDetail.css';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [postResponse, commentsResponse] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        ]);

        if (!postResponse.ok) {
          throw new Error('Failed to fetch post');
        }

        const postData = await postResponse.json();
        setPost(postData);
        setComments(commentsResponse.ok ? await commentsResponse.json() : []);

        // Fetch user data
        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${postData.userId}`
        );
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setUser(userData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, [id]);

  if (loading) {
    return <PostDetailSkeleton />;
  }

  if (error || !post) {
    return (
      <div className="error-container">
        <p className="error-message">Error: {error || 'Post not found'}</p>
        <Link to="/" className="back-button">
          ← Back to Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="post-detail-container">
      <Link to="/" className="back-button">
        ← Back to Posts
      </Link>

      <article className="post-detail">
        <h1 className="post-detail-title">{post.title}</h1>
        
        <div className="post-detail-meta">
          <span className="post-detail-author">
            By {user ? user.name : 'Unknown Author'}
          </span>
        </div>

        <div className="post-detail-body">
          <p>{post.body}</p>
        </div>
      </article>

      {comments.length > 0 && (
        <div className="comments-section">
          <h2 className="comments-title">
            Comments ({comments.length})
          </h2>
          <CommentList comments={comments} />
        </div>
      )}
    </div>
  );
}

export default PostDetail;

