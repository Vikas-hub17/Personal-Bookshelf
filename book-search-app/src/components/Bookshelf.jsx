import React from 'react';
import './Bookshelf.css';

const Bookshelf = ({ bookshelf }) => {
  return (
    <div className="bookshelf">
      <h2>Your Bookshelf</h2>
      {bookshelf.map((book, index) => (
        <div key={index} className="book-card">
          <h3>Book Title: {book.title}</h3>
          <p>Edition Count: {book.edition_count}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
