import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGenreFilter, setSort } from "../features/filterStateSlice";

const compare = (a, b) => {
  const genreA = a.toLowerCase();
  const genreB = b.toLowerCase();
  if (genreA < genreB) {
    return -1;
  }
  if (genreA > genreB) {
    return 1;
  }
  return 0;
};

export const MobileGenreControls = ({ handleSidebar, sidebarState }) => {
  const dispatch = useDispatch();
  const genreFilter = useSelector((state) => state.filters.genreFilter);
  const sortFilter = useSelector((state) => state.filters.sort);
  const gameStore = useSelector((state) => state.game.games);
  const [genreList, setGenreList] = useState([]);
  const sortList = ["ALPHABETICAL", "RELEASE DATE"];

  useEffect(() => {
    const SIDEBAR = document.getElementById("nav-sidebar");
    if (sidebarState === true) {
      SIDEBAR.classList.add("sidebar-active");
    } else {
      SIDEBAR.classList.remove("sidebar-active");
    }
  }, [sidebarState]);

  useEffect(() => {
    if (gameStore.length === 0) {
      return;
    }
    const genres = [];
    gameStore.forEach((gameObj) => {
      if (genres.includes(gameObj.genre)) {
        return;
      } else {
        genres.push(gameObj.genre);
      }
    });
    genres.sort(compare);
    genres.unshift("ALL");
    setGenreList(genres);
  }, [gameStore]);

  const handleGenreClick = (e) => {
    const selection = e.currentTarget.dataset.value;
    dispatch(setGenreFilter(selection));
    handleSidebar();
  };

  const handleSortClick = (e) => {
    const selection = e.currentTarget.dataset.value;
    dispatch(setSort(selection));
    handleSidebar();
  };

  return (
    <div id="nav-sidebar" className="nav-filter-menu">
      <p>
        Filter: <span className="nav-active-filter">{genreFilter}</span>
      </p>
      <ul className="nav-filter-list">
        {genreList.map((genre) => {
          if (genre !== genreFilter) {
            return (
              <li
                key={genre}
                data-value={genre}
                className="nav-filter-item"
                onClick={handleGenreClick}
              >
                {genre}
              </li>
            );
          }
        })}
      </ul>
      <p>
        Sort by: <span className="nav-active-filter">{sortFilter}</span>
      </p>
      <ul className="nav-filter-list">
        {sortList.map((option) => {
          if (option !== sortFilter) {
            return (
              <li
                key={option}
                data-value={option}
                className="nav-filter-item"
                onClick={handleSortClick}
              >
                {option}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
