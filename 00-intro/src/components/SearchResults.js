import React from 'react';
import Card from './Card';

const SearchResults = ({ items }) => (
  <section className="items">
    {/* eslint-disable-next-line react/no-array-index-key */}
    {items && items.map((item, index) => <Card key={index} item={item} />)}
  </section>
);

export default SearchResults;
