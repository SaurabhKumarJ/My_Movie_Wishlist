import React from 'react';
function Banner({ watchlist }) {
  let posterPath = 'https://github.com/SaurabhKumarJ/My_Movie_Wishlist/blob/master/src/assets/movie.jpg'; // Set default image initially
  let movieTitle = 'Movie Wishlist';

  watchlist.forEach((movie) => {
    if (movie.poster_path) {
      posterPath = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
      movieTitle = movie.title;
    }
  });

  return (
    <div
      className='h-[20vh] md:h-[75vh] bg-cover bg-right-top flex items-end'
      style={{ backgroundImage: `url(${posterPath})` }}
    >
      <div className='text-white font-palanquin text-xl text-center w-full bg-gray-900/60 p-4'>
        {movieTitle}
      </div>
    </div>
  );
}

export default Banner;
