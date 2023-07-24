import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba searchbox'
        type='search'
        placeholder='search cats'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;