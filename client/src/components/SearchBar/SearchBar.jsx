import React from 'react';
import search from '../../static/icons/search.svg'
import cl from './SearchBar.module.sass'

const SearchBar = () => {
  return (
    <div className={cl.search}>
      <input type="text" placeholder='Search Location'/>
      <button onClick={() => console.log('hello')}><img src={search} alt="Loupe icon on button: Icon" /></button>
    </div>
  );
}

export default SearchBar;
