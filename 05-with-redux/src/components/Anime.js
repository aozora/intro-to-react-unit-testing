import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const Anime = () => {
  const location = useLocation();
  const { id } = location.state;
  // const [query, setQuery] = useState(null);
  const { data, isLoading, isError } = useFetch(id ? `https://api.jikan.moe/v3/anime/${id}` : null);

  return (
    <article className="anime">
      {isLoading && <div>Loading...</div>}

      {data && (
        <>
          <img src={data.image_url} alt={data.title} />
          <h1 lang="en">{data.title_english}</h1>
          <p lang="ja">{data.title_japanese}</p>

          <h2>Synopsis</h2>
          <p>{data.synopsis}</p>
        </>
      )}
    </article>
  );
};

export default Anime;
