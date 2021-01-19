import React from 'react';

const Card = ({ item, index }) => (
  <article className="card" data-testid={`card${index}`}>
    <img src={item.image_url} alt={item.title} />
    <span className="title">{item.title}</span>
  </article>
);

export default Card;
