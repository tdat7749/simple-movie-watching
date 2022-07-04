import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getListTV = createAsyncThunk(
    'tv/getListTV',
    async (page) => {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=c39f3ce544f376ea275e06450014bda6&language=vi-VN&page=${page}`)
        return response.data
    }
)

export const getDetailTV = createAsyncThunk(
    'tv/getDetailTV',
    async (id) => {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=c39f3ce544f376ea275e06450014bda6&language=vi-VN`)
        return response.data
    }
)

export const getTVShowByGenre = createAsyncThunk(
    'tv/getTVShowByGenre',
    async ({ id, page }) => {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=c39f3ce544f376ea275e06450014bda6&with_genres=${id}&language=vi-VN&page=${page}`)
        return response.data
    }
)

export const getTVSeasonDetail = createAsyncThunk(
    'tv/getTVSeasonDetail',
    async ({ id, season }) => {
        const data = []
        for (let i = 1; i <= season; i++) {
            let response = await axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${i}?api_key=c39f3ce544f376ea275e06450014bda6&language=vi-VN`)
            data.push(response.data)
        }
        return data
    }
)

const TvSlice = createSlice({
    name: 'tv',
    initialState: {
        listTV: [],
        isLoading: false,
        isError: false,
        detail: [],
        total_results: null,
        total_pages: null,
        number_of_season: null,
        seasons: [],
        detail_season: []
    },
    reducers: {
    },

    extraReducers: {
        [getListTV.pending]: (state) => {
            state.isLoading = true
        },

        [getListTV.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },

        [getListTV.fulfilled]: (state, action) => {
            state.isLoading = false
            state.listTV = action.payload.results
            state.total_results = action.payload.total_results
            state.total_pages = action.payload.total_pages
        },

        [getDetailTV.pending]: (state) => {
            state.isLoading = true
        },

        [getDetailTV.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },

        [getDetailTV.fulfilled]: (state, action) => {
            state.isLoading = false
            state.detail = action.payload
            state.number_of_season = action.payload.number_of_seasons
            state.seasons = action.payload.seasons
        },


        [getTVShowByGenre.pending]: (state) => {
            state.isLoading = true
        },

        [getTVShowByGenre.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },

        [getTVShowByGenre.fulfilled]: (state, action) => {
            state.isLoading = false
            state.listTV = action.payload.results
            state.total_results = action.payload.total_results
            state.total_pages = action.payload.total_pages
        },


        [getTVSeasonDetail.pending]: (state) => {
            state.isLoading = true
        },

        [getTVSeasonDetail.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },

        [getTVSeasonDetail.fulfilled]: (state, action) => {
            state.isLoading = false
            state.detail_season = action.payload
        },
    }

})


export default TvSlice