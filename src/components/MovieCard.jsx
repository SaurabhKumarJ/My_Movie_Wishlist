import React from "react";


import {Heart, Plus } from "lucide-react";
function MovieCard({
  movieObj,
  watchlist,
  posterPath,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  function truncateString(str) {
    if (str.length > 15) {
      return str.substring(0, 15)+"...";
    }
    return str;
  }

  return (
    <div
      className="h-[20vh] lg:h-[40vh] w-[100px] lg:w-[11vw] bg-cover bg-center rounded-xl hover:cursor-pointer duration-300 hover:scale-110 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${posterPath})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-full bg-gray-900"
        >
          <Heart color="#ffffff" fill="red" strokeWidth={0}/>
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-full bg-gray-900"
        >
          <Plus color="#ffffff" className="hover:bg-gray-600 hover:w-8 hover:h-8 hover:rounded-full"/>
        </div>
      )}
      <div className="text-white text-xl w-full p-2 bg-gray-900/60 text-center rounded-b-xl">
        {truncateString(name)}
      </div>
    </div>
  );
}

export default MovieCard;
