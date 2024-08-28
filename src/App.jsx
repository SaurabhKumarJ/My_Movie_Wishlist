import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddtoWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filterdWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    localStorage.setItem("moviesApp", JSON.stringify(filterdWatchlist));
    setWatchlist(filterdWatchlist);
  };

  useEffect(() => {
    let moviesFromLocal = localStorage.getItem("moviesApp");
    if (!moviesFromLocal) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocal));
  }, []);
  return (
    <>
    <div className="bg-gradient-to-bl from-rose-100 to-teal-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner watchlist={watchlist}/>
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <>
                <WatchList
                  watchlist={watchlist}
                  setWatchlist={setWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
