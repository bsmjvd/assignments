import React from 'react';
import './PostCardSkeleton.css';

function PostCardSkeleton() {
  return (
    <article className="post-card-skeleton">
      <div className="skeleton-line skeleton-title"></div>
      <div className="skeleton-line skeleton-excerpt-1"></div>
      <div className="skeleton-line skeleton-excerpt-2"></div>
      <div className="skeleton-line skeleton-excerpt-3"></div>
      <div className="skeleton-footer">
        <div className="skeleton-line skeleton-author"></div>
        <div className="skeleton-line skeleton-read-more"></div>
      </div>
    </article>
  );
}

export default PostCardSkeleton;

