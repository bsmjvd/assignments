import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import PostCardSkeleton from './PostCardSkeleton';
import SearchBar from './SearchBar';
import AuthorFilter from './AuthorFilter';
import Pagination from './Pagination';
import PaginationSkeleton from './PaginationSkeleton';
import './PostList.css';

const POSTS_PER_PAGE = 10;

function PostList() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    // Fetch posts and users
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [postsResponse, usersResponse] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/users')
        ]);

        if (!postsResponse.ok || !usersResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const postsData = await postsResponse.json();
        const usersData = await usersResponse.json();

        setPosts(postsData);
        setUsers(usersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter posts by search term and author
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAuthor = selectedAuthor === '' || post.userId === parseInt(selectedAuthor);
    return matchesSearch && matchesAuthor;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedAuthor]);

  // Ensure current page is within bounds
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  // Handle page change with loading state
  const handlePageChange = (newPage) => {
    setIsPageLoading(true);
    // Small delay to show skeleton loading
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsPageLoading(false);
    }, 300);
  };

  // Get user by ID
  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  // Get selected author name for display
  const getSelectedAuthorName = () => {
    if (!selectedAuthor) return null;
    const author = users.find(user => user.id === parseInt(selectedAuthor));
    return author ? author.name : null;
  };

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">Error: {error}</p>
        <p className="error-subtitle">Please try refreshing the page.</p>
      </div>
    );
  }

  return (
    <div className="post-list-container">
      <h1 className="page-title">Blog Posts</h1>
      <div className="filters-container">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <AuthorFilter 
          users={users} 
          selectedAuthor={selectedAuthor} 
          onAuthorChange={setSelectedAuthor} 
        />
      </div>
      
      {loading ? (
        <>
          <div className="posts-grid">
            {[...Array(6)].map((_, index) => (
              <PostCardSkeleton key={index} />
            ))}
          </div>
          <PaginationSkeleton />
        </>
      ) : filteredPosts.length === 0 ? (
        <div className="no-posts-container">
          <p className="no-posts-message">No posts found</p>
          {(searchTerm || selectedAuthor) && (
            <p className="no-posts-subtitle">
              {searchTerm && `Search: "${searchTerm}"`}
              {searchTerm && selectedAuthor && ' • '}
              {selectedAuthor && `Author: ${getSelectedAuthorName()}`}
            </p>
          )}
        </div>
      ) : (
        <div className="posts-content-wrapper">
          <div className={`posts-content ${isPageLoading ? 'loading' : ''}`}>
            {isPageLoading && (
              <>
                <div className="posts-grid">
                  {[...Array(POSTS_PER_PAGE)].map((_, index) => (
                    <PostCardSkeleton key={`skeleton-${index}`} />
                  ))}
                </div>
                <PaginationSkeleton />
              </>
            )}
            {!isPageLoading && (
              <>
                <div className="posts-grid">
                  {paginatedPosts.map(post => (
                    <PostCard
                      key={post.id}
                      post={post}
                      author={getUserById(post.userId)}
                    />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PostList;

