import React from 'react';
import './PaginationSkeleton.css';

function PaginationSkeleton() {
  return (
    <div className="pagination-skeleton-container">
      <div className="skeleton-button skeleton-button-prev"></div>
      <div className="skeleton-info"></div>
      <div className="skeleton-button skeleton-button-next"></div>
    </div>
  );
}

export default PaginationSkeleton;

