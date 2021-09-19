import '../style.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Searchbar(props) {
const [query, setQuery] = useState('');
 
const handleChange = event => {
    setQuery(event.currentTarget.value)
  }

const handleSubmit = event => {
    event.preventDefault()
    if (event.target.elements.query.value === "") {
      return
    }
    props.onSubmit(query)
    reset()
  }
const reset = () => {
      setQuery('')
  }

    return ( <header className="Searchbar">
  <form className="SearchForm" onSubmit={handleSubmit}>
    <button type="submit" className="SearchForm-button" >
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
       onChange={handleChange}
          value={query}
          name = 'query'
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )}


Searchbar.propTypes = {
    query: PropTypes.string.isRequired
}


