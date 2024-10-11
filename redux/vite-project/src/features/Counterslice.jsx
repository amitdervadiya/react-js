import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name: 'counter',
    initialState: {
        students: [] // Define initial state as an object
    },
    reducers: {
        adddata: (state, action) => {

            state.students.push(action.payload);
        },
        deletedata: (state, action) => {

            state.students = state.students.filter((item) => item.id != action.payload.id);

        }
    }
});

export const { adddata, deletedata } = counter.actions;
export default counter.reducer;
