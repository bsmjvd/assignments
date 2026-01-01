import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import SearchBar from './SearchBar';
import Loading from './Loading';
import AuthorFilter from './AuthorFilter';
import './PostList.css';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

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

  // Get user by ID
  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">Error: {error}</p>
        <p className="error-subtitle">Please try refreshing the page.</p>
      </div>
    );
  }

  // Get selected author name for display
  const getSelectedAuthorName = () => {
    if (!selectedAuthor) return null;
    const author = users.find(user => user.id === parseInt(selectedAuthor));
    return author ? author.name : null;
  };

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
      
      {filteredPosts.length === 0 ? (
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
        <div className="posts-grid">
          {filteredPosts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              author={getUserById(post.userId)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;