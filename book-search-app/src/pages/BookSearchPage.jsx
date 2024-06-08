import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const BookSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem('bookshelf')) || []
  );

  const handleSearch = async (term) => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${term}&limit=10&page=1`
      );
      console.log(response.data); // Log the response data
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <BookList books={books} addToBookshelf={addToBookshelf} />
    </div>
  );
};

export default BookSearchPage;
