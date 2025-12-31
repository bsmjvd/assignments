import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <main className="main-content">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main> */}
      </div>
    </Router>
  );
}

export default App