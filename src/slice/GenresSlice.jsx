import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getGenresMovie = createAsyncThunk(
    'genres/getGenresMovie',
    async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=c39f3ce544f376ea275e06450014bda6&language=vi-VN`)
        return response.data
    }
)

export const getGenresShow = createAsyncThunk(
    'genres/getGenresShow',
    async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=c39f3ce544f376ea275e06450014bda6&language=vi-VN`)
        return response.data
    }
)


const GenresSlice = createSlice({
    name: 'genres',
    initialState: {
        genresMovie: [],
        genresShow: [],
        isLoading: false,
        isError: false,
    },
    reducers: {

    },

    extraReducers: {
        [getGenresMovie.pending]: (state) => {
            state.isLoading = true
        },
        [getGenresMovie.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },
        [getGenresMovie.fulfilled]: (state, action) => {
            state.isLoading = false
            state.genresMovie = action.payload.genres
        },


        [getGenresShow.pending]: (state) => {
            state.isLoading = true
        },
        [getGenresShow.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        },
        [getGenresShow.fulfilled]: (state, action) => {
            state.isLoading = false
            state.genresShow = action.payload.genres
        }
    }
})


export default GenresSlice