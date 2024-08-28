import React, { useState } from "react";

import genreIds from "../utility/genre";
import { useEffect } from "react";

function WatchList({ watchlist, setWatchlist, handleRemoveFromWatchlist}) {
  const [search, setSearch] = useState("");
  const [genreList, setgenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortIncr = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortIncr]);
  };

  let sortDecreasing = () => {
    let sortDecr = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortDecr]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setgenreList(["All Genres", ...temp]);
  }, [watchlist]);

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap mx-4 mt-4 ">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex text-white justify-center hover:cursor-pointer font-montserrat rounded-xl bg-blue-400 px-4 py-2 mx-1"
                  : "flex text-white justify-center hover:cursor-pointer font-montserrat rounded-xl bg-gray-400 px-4 py-2 mx-1"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4">
        <input
          onChange={handleSearch}
          value={search}
          placeholder="Search Movies"
          className="px-4 py-2 font-montserrat rounded-md h-[2rem] w-[18rem] outline-none bg-gray-300"
          type="text"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 my-4">
        <table className="w-full text-gray-500 text-center font-palanquin">
          <thead className="border-b-2">
            <tr>
              <th>Detail</th>
              <div className="flex justify-center">
                <div onClick={sortIncreasing} className="px-2">
                  <i class="fa-solid hover:cursor-pointer fa-arrow-up"></i>
                </div>
                <th>Rating</th>
                <div onClick={sortDecreasing} className="px-2">
                  <i class="fa-solid hover:cursor-pointer fa-arrow-down"></i>
                </div>
              </div>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currGenre=='All Genres'){
                return true
              } else {
                return genreIds[movieObj.genre_ids[0]]==currGenre
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 ">
                    <td className="flex items-center py-4">
                      <img
                        className="ml-4 h-[10rem] w-[6rem]"
                        src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreIds[movieObj.genre_ids[0]]}</td>

                    <td onClick={()=>handleRemoveFromWatchlist(movieObj)} className="text-red-800 hover:cursor-pointer">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
