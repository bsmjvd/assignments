import React from 'react';
import './AuthorFilter.css';

function AuthorFilter({ users, selectedAuthor, onAuthorChange }) {
  return (
    <div className="author-filter-container">
      <label htmlFor="author-filter" className="author-filter-label">
        Filter by Author:
      </label>
      <select
        id="author-filter"
        className="author-filter-select"
        value={selectedAuthor}
        onChange={(e) => onAuthorChange(e.target.value)}
      >
        <option value="">All Authors</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AuthorFilter;