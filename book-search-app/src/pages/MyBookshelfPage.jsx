import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/Bookshelf';

const MyBookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem('bookshelf')) || []
  );

  useEffect(() => {
    setBookshelf(JSON.parse(localStorage.getItem('bookshelf')) || []);
  }, []);

  return (
    <div>
      <Bookshelf bookshelf={bookshelf} />
    </div>
  );
};

export default MyBookshelfPage;
