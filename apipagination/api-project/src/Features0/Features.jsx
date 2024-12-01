import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching API data
export const apifetch = createAsyncThunk('apifetch', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data; // Return the data for the fulfilled action payload
});

// Slice for managing API data state
export const apidata = createSlice({
    name: 'apidata',
    initialState: {
        data: [],    // Stores the fetched data
        loading: false, // Tracks loading state
        error: null  // Tracks errors
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(apifetch.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error state
            })
            .addCase(apifetch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // Populate data with the API response
            })
            .addCase(apifetch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Store error message
            });
    }
});

export default apidata.reducer;
