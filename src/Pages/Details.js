import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetailsPage = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null); // To hold the video or trailer URL
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch movie details by ID
  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`https://imdb-api.com/en/API/Title/k_your_api_key/${id}`);
      setMovie(response.data);
      fetchMovieTrailer(response.data.title);
    } catch (error) {
      setErrorMessage('Failed to fetch movie details. Please try again later.');
    }
  };

  // Fetch movie trailer or video based on movie title
  const fetchMovieTrailer = async (title) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          maxResults: 1,
          q: `${title} trailer`,
          key: 'YOUR_YOUTUBE_API_KEY',
        },
      });
      if (response.data.items.length > 0) {
        setVideo(`https://www.youtube.com/embed/${response.data.items[0].id.videoId}`);
      }
    } catch (error) {
      console.log('Error fetching video:', error);
    }
  };

  if (errorMessage) {
    return <div className="text-center text-red-500">{errorMessage}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {movie ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <img
              src={movie.image ? movie.image.url : 'https://via.placeholder.com/400'}
              alt={movie.title}
              className="rounded-lg mb-4 w-full max-w-md mx-auto"
            />
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <p className="text-gray-600 mt-2">{movie.year} | {movie.genre}</p>
            <p className="mt-4">{movie.plot}</p>
            <div className="mt-4">
              <strong>Cast:</strong> {movie.actorList ? movie.actorList.map(actor => actor.name).join(', ') : 'N/A'}
            </div>
            <div className="mt-4">
              <strong>Rating:</strong> {movie.imDbRating ? movie.imDbRating : 'N/A'}
            </div>
          </div>

          {/* Video Section */}
          <div className="flex justify-center items-center">
            {video ? (
              <iframe
                width="560"
                height="315"
                src={video}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p>No trailer available.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
