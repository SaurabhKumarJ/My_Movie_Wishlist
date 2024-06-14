import React from "react";

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
  return (
    <div
      className="h-[40vh] w-[11vw] bg-cover bg-center rounded-xl hover:cursor-pointer duration-300 hover:scale-110 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${posterPath})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}
      <div className="text-white text-xl w-full p-2 bg-gray-900/60 text-center rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
