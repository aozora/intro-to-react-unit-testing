import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import data from "../data/mock-data.json";

const Search = () => {
  const [items, setItems] = useState([]);

  const doSearch = () => {
    setItems(data.results);
  };

  return (
    <>
      <SearchForm searchBooks={doSearch} />
      <SearchResults items={items} />
    </>
  );
};

export default Search;
