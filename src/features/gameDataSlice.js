import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  games: [],
  status: "idle",
  error: null,
};

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const res = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "fb38b74c5emsh15e2e20836043d4p150947jsn61e82dd17170",
      },
    }
  ).then((response) => response.json());

  res.forEach((game) => {
    game.genre = game.genre.toUpperCase();
    if (game.genre === " MMORPG") {
      game.genre = "MMORPG";
    } else if (game.genre === "CARD GAME") {
      game.genre = "CARD";
    } else if (game.genre === "ARPG") {
      game.genre = "ACTION RPG";
    }
  });
  return res;
});

export const gameDataSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    sort: (state, action) => {
      state.games = [...action.payload];
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGames.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { sort, increment, decrement, incrementByAmount } =
  gameDataSlice.actions;

export default gameDataSlice.reducer;
