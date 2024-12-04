import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchRandomMovies();
  }, []);

  // Function to fetch random movies from the API
  const fetchRandomMovies = async () => {
    try {
      const response = await axios.get('https://imdb-top-100-movies.p.rapidapi.com/', {
        headers: {
          'x-rapidapi-key': '8db8aeea6dmsheee0ac32c4d1066p109d74jsnf204cbf06b33',
          'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
        },
      });
      setMovies(response.data.slice(0, 12));
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to fetch movies. Please try again later.');
    }
  };

  const handleSearch = async () => {
    if (!searchTerm) {
        fetchRandomMovies();
        return;
    };

    setLoading(true);
    setErrorMessage('');
    
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: { q: searchTerm },
      headers: {
        'x-rapidapi-key': '8db8aeea6dmsheee0ac32c4d1066p109d74jsnf204cbf06b33',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      if (response.data && response.data.length > 0) {
        setMovies(response.data);
      } else {
        setMovies([]);
        setErrorMessage('No results found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Error fetching data. Please try again.');
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      {/* <div className="flex justify-center -mb-20">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for movies..."
          className="border border-indigo-300 p-2 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-indigo-600 text-white rounded-md"
        >
          Search
        </button>
      </div> */}

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div>
          {errorMessage && <div className="text-center text-red-500">{errorMessage}</div>}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {movies.length > 0 ? (
                movies.map((movie, index) => (
                    <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
                    onClick={() => navigate(`/movie/${movie.id}`)}
                    >
                    <img
                        src={movie.image}
                        alt={movie.title}
                        className="w-full h-64 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-center font-semibold text-lg">{movie.title}</h3>
                    </div>
                ))
                ) : (
                <p className="text-center text-gray-500">No movies to display</p>
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
