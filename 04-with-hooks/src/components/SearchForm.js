import React, { useState } from 'react';

const SearchForm = ({ searchAnime }) => {
  const [input, setInput] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    if (input) {
      searchAnime(input);
    }
  };

  return (
    <section className="search">
      <form role="search" noValidate onSubmit={onSubmit}>
        <label htmlFor="input">Search an Anime:</label>
        <input
          type="text"
          id="input"
          name="input"
          value={input}
          onChange={event => {
            setInput(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
