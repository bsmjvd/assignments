import React from 'react';
import './PostDetailSkeleton.css';

function PostDetailSkeleton() {
  return (
    <div className="post-detail-skeleton-container">
      <div className="skeleton-line skeleton-back-button"></div>

      <article className="post-detail-skeleton">
        <div className="skeleton-line skeleton-title-1"></div>
        <div className="skeleton-line skeleton-title-2"></div>
        
        <div className="skeleton-meta">
          <div className="skeleton-line skeleton-author"></div>
        </div>

        <div className="skeleton-body">
          <div className="skeleton-line skeleton-body-line"></div>
          <div className="skeleton-line skeleton-body-line"></div>
          <div className="skeleton-line skeleton-body-line"></div>
          <div className="skeleton-line skeleton-body-line"></div>
          <div className="skeleton-line skeleton-body-line skeleton-body-line-short"></div>
        </div>
      </article>
    </div>
  );
}

export default PostDetailSkeleton;

