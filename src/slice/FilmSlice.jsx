import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getFilm = createAsyncThunk(
    'film/getFilm',
    async (page) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c39f3ce544f376ea275e06450014bda6&language=vi-VN&page=${page}`)
        return response.data
    }
)

export const getCommingUp = createAsyncThunk(
    'film/getCommingUp',
    async (page) => {
        const response = await axios.get(`
        https://api.themoviedb.org/3/movie/upcoming?api_key=c39f3ce544f376ea275e06450014bda6&language=vi-VN&page=${page}`)
        return response.data
    }
)

export const getDetailFilm = createAsyncThunk(
    'film/getDetail',
    async (id) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c39f3ce544f376ea275e06450014bda6&language=vi-VN`)
        return response.data
    }
)

export const getTrending = createAsyncThunk(
    'film/getTrending',
    async ({ time, page }) => {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/${time}?api_key=c39f3ce544f376ea275e06450014bda6&language=vi-VN&page=${page}`)
        return response.data
    }
)

export const getMoviesByGenre = createAsyncThunk(
    'film/getMoviesByGenre',
    async ({ id, page }) => {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c39f3ce544f376ea275e06450014bda6&with_genres=${id}&language=vi-VN&page=${page}`)
        return response.data
    }
)


const FilmSlice = createSlice({
    name: 'film',
    initialState: {
        listFilm: [],
        tempFilm: [],
        isLoading: false,
        isError: false,
        commingUp: [],
        detail: [],
        trending: [],
        total_pages: null,
        total_results: null,
    },
    reducers: {
        searchFilm: (state, action) => {
            let temp = state.listFilm.filter((item) => item.title !== action.payload)
            state.listFilm = temp
        },

        clearSearch: (state) => {
            state.listFilm = state.tempFilm
        }

    },

    extraReducers: {
        [getFilm.pending]: (state) => {
            state.isLoading = true
        },

        [getFilm.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },

        [getFilm.fulfilled]: (state, action) => {
            state.isLoading = false
            state.listFilm = action.payload.results
            state.tempFilm = action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
        },

        [getCommingUp.pending]: (state) => {
            state.isLoading = true
        },

        [getCommingUp.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },

        [getCommingUp.fulfilled]: (state, action) => {
            state.isLoading = false
            state.commingUp = action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
            state.tempFilm = action.payload.results
        },

        [getDetailFilm.pending]: (state) => {
            state.isLoading = true
        },

        [getDetailFilm.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },

        [getDetailFilm.fulfilled]: (state, action) => {
            state.isLoading = false
            state.detail = action.payload
        },

        [getTrending.pending]: (state) => {
            state.isLoading = true
        },

        [getTrending.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },

        [getTrending.fulfilled]: (state, action) => {
            state.isLoading = false
            state.trending = action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
            state.tempFilm = action.payload.results
        },


        [getMoviesByGenre.pending]: (state) => {
            state.isLoading = true
        },

        [getMoviesByGenre.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },

        [getMoviesByGenre.fulfilled]: (state, action) => {
            state.isLoading = false
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
            state.tempFilm = action.payload.results
        },
    },
})

export const { searchFilm } = FilmSlice.actions

export default FilmSlice