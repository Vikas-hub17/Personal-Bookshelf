import React from 'react';
import './Book.css';

const Book = ({ book, addToBookshelf }) => {
  const handleClick = () => {
    addToBookshelf(book);
  };

  return (
    <div className="book-card">
      <h3>Book Title: {book.title}</h3>
      <p>Edition Count: {book.edition_count}</p>
      <button onClick={handleClick} className="add-button">
        Add to Bookshelf
      </button>
    </div>
  );
};

export default Book;
