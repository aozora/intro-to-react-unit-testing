import React from "react";

const Card = ({ item }) => (
  <article className="card">
    <img src={item.image_url} alt={item.title} />
    <span className="title">{item.title}</span>
  </article>
);

export default Card;
