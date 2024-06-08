import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import MyBookshelfPage from './pages/MyBookshelfPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookSearchPage />} />
        <Route path="/bookshelf" element={<MyBookshelfPage />} />
      </Routes>
    </Router>
  );
}

export default App;
