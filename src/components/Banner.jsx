import React from 'react'

function Banner({watchlist}) {
  let posterPath, movieTitle
  watchlist.map((movie)=>{
      posterPath=movie.poster_path
      movieTitle=movie.title
      
  })
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end'style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${posterPath})`}}>
      <div className='text-white font-palanquin text-xl text-center w-full bg-gray-900/60 p-4'>{movieTitle}</div>
    </div>
  )
}

export default Banner