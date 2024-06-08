import React from 'react';
import Book from './Book';
import './BookList.css';

const BookList = ({ books, addToBookshelf }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.key} book={book} addToBookshelf={addToBookshelf} />
      ))}
    </div>
  );
};

export default BookList;
