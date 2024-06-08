import React from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    await handleSearch(value); // Call handleSearch with the updated value
  };

  const handleClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <label>Search by book name: </label>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button onClick={handleClick}>Search</button> {/* Search button */}
      <button onClick={() => navigate('/bookshelf')} className="bookshelf-button">
        My Bookshelf
      </button>
    </div>
  );
};

export default SearchBar;
