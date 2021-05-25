import React from 'react';

import './SearchForm.css';
import search_ico from '../../images/search.svg';

function SearchForm(props) {
  return(
    <section className="search">
      <form className="search-form">
        <input
          className = "search-input"
          type      = "text"
          name      = "search-input"
          required  = "true"
        />
        <button 
          className="search-button"
          type="submit"
        >
          <img className="search-ico" src={search_ico} alt="Найти"/>
        </button>

        
      </form>

    </section>
  )
}

export default SearchForm;
