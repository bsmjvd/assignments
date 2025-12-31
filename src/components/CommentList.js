import React from 'react';
import './CommentList.css';

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map(comment => (
        <div key={comment.id} className="comment-item">
          <div className="comment-header">
            <h3 className="comment-name">{comment.name}</h3>
            <span className="comment-email">{comment.email}</span>
          </div>
          <p className="comment-body">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
