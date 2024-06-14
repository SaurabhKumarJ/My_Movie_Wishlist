import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({watchlist, handleAddtoWatchlist , handleRemoveFromWatchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=210fdb7eddcb2c233bc6d8228a7cad93&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-4">
      <div className="text-2xl px-1 font-palanquin font-semibold text-center py-3">
        Trending Movie
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center pt-2 gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              movieObj={movieObj}
              watchlist={watchlist}
              posterPath={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchlist={handleAddtoWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
            />
          );
        })}
      </div>
      <div className="pt-5">
        <Pagination
          pageNo={pageNo}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}

export default Movies;
