import { createSlice } from "@reduxjs/toolkit";


export const adddata = createSlice({
    name: 'adddata',
    initialState: {
        budget: 0,

    },
    reducers: {
        adddata1: ((state, action) => {
            state.budget += action.payload
            console.log(action.payload)
        })
    }
})
export const { adddata1 } = adddata.actions;
export default adddata.reducer