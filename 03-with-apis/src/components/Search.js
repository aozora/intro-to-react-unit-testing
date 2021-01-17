import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const Search = () => {
  const [items, setItems] = useState([]);

  const doSearch = async query => {
    const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`);
    const data = await response.json();

    setItems(data.results);
  };

  return (
    <>
      <SearchForm searchAnime={doSearch} />
      <SearchResults items={items} />
    </>
  );
};

export default Search;
