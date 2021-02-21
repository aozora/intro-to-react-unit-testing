import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import useFetch from '../hooks/useFetch';

const Search = () => {
  const [query, setQuery] = useState(null);
  const { data, isLoading, isError } = useFetch(query ? `https://api.jikan.moe/v3/search/anime?q=${query}` : null);

  const doSearch = async q => {
    setQuery(q);
  };

  return (
    <div data-testid="search">
      <SearchForm searchAnime={doSearch} />

      {isLoading && <div>Loading...</div>}

      {isError && (
        <div>
          <p>Sorry, an error occurred!</p>
        </div>
      )}

      <SearchResults items={data && data.results} />
    </div>
  );
};

export default Search;
