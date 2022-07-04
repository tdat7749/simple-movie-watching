import { configureStore } from "@reduxjs/toolkit";
import FlimSlice from "../slice/FilmSlice";
import TvSlice from "../slice/TvSlice"
import GenresSlice from "../slice/GenresSlice";

const store = configureStore({
    reducer: {
        film: FlimSlice.reducer,
        tv: TvSlice.reducer,
        genres: GenresSlice.reducer
    }
})


export default store
