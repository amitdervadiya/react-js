import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name: 'counter',
    initialState: {
        students: []
    },
    reducers: {
        adddata: (state, action) => {

            state.students.push(action.payload);
        },
        deletedata: (state, action) => {

            state.students = state.students.filter((item) => item.id != action.payload.id);

        },
        updatedata: (state, action) => {
            const { id, name, age } = action.payload;
            const existingStudent = state.students.find(student => student.id === id);
            if (existingStudent) {
                existingStudent.name = name;
                existingStudent.age = age;
            }
        }
    }
});

export const { adddata, deletedata, updatedata } = counter.actions;
export default counter.reducer;
