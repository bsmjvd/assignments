import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

function PostCard({ post, author }) {
  // Create excerpt (first 120 characters)
  const excerpt = post.body.length > 120 
    ? post.body.substring(0, 120) + '...' 
    : post.body;

  return (
    <Link to={`/post/${post.id}`} className="post-card-link">
      <article className="post-card">
        <h2 className="post-card-title">{post.title}</h2>
        <p className="post-card-excerpt">{excerpt}</p>
        <div className="post-card-footer">
          <span className="post-card-author">
            By {author ? author.name : 'Unknown Author'}
          </span>
          <span className="post-card-read-more">Read More →</span>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;