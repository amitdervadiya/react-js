import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const apifetch = createAsyncThunk('apifetch', async () => {
    let response = await axios.get('https://fakestoreapi.com/products')
    let res = response.data
    return res
})
export const moneydata = createSlice({
    name: 'moneydata',
    initialState: {
        data: [],
        loading: true
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(apifetch.pending, (state, action) => {
            state.loading = true
        }),
            builder.addCase(apifetch.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
    }
})

export default moneydata.reducer