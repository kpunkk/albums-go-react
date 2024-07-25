import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/albums')
      .then(response => {
        setAlbums(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <h2>{album.title}</h2>
            <p>Artist: {album.artist}</p>
            <p>Price: ${album.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
