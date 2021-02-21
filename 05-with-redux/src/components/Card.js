import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item, index }) => (
  <article className="card" data-testid={`card${index}`}>
    <Link
      to={{
        pathname: '/anime',
        state: { id: item.mal_id }
      }}
    >
      <img src={item.image_url} alt={item.title} />
      <span className="title">{item.title}</span>
    </Link>
  </article>
);

export default Card;
