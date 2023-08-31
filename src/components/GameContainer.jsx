import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GameCard } from "./GameCard";
import { Nav } from "./Nav";

export const GameContainer = ({ toggleModal }) => {
  const gameStore = useSelector((state) => state.game.games);
  const filterStore = useSelector((state) => state.filters);
  const [games, setGames] = useState([]);
  let [page, setPage] = useState(1);
  const totalPageCount = Math.ceil(games.length / 12);

  useEffect(() => {
    if (gameStore.length >= 0) {
      setGames([...gameStore]);
    }
  }, [gameStore]);

  const compare = (a, b) => {
    if (filterStore.sort === "ALPHABETICAL") {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    } else if (filterStore.sort === "RELEASE DATE") {
      const dateA = parseInt(a.release_date.replace("-", ""));
      const dateB = parseInt(b.release_date.replace("-", ""));
      return dateA - dateB;
    }
  };

  useEffect(() => {
    if (page > totalPageCount) {
      setPage(1);
    }
    const sortedGames = [...gameStore];

    sortedGames.sort(compare);
    if (filterStore.genreFilter !== "ALL") {
      const filteredGames = sortedGames.filter(
        (game) => game.genre === filterStore.genreFilter
      );
      setGames(filteredGames);
    } else {
      setGames(sortedGames);
    }
  }, [page, totalPageCount, filterStore, gameStore]);

  const handlePage = (e) => {
    let button = e.currentTarget.id;
    if (button === "prev") {
      if (page === 1) {
        setPage(totalPageCount);
        return;
      } else {
        setPage(page - 1);
      }
    } else if (button === "next") {
      if (page === totalPageCount) {
        setPage(1);
        return;
      } else {
        setPage(page + 1);
      }
    }
  };

  return (
    <section className="game-container">
      <span id="page-scroll-anchor"></span>
      <Nav
        changePage={handlePage}
        currentPage={page}
        totalPages={totalPageCount}
      />

      {games.map((game, index) => {
        if (index >= page * 12 - 12 && index <= page * 12 - 1) {
          return (
            <GameCard
              key={game.id}
              gameId={game.id}
              gameData={game}
              toggleModal={toggleModal}
            />
          );
        } else {
          return null;
        }
      })}
    </section>
  );
};
