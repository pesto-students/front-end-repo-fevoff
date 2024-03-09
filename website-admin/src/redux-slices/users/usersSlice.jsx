import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usersList: null,
}

export const usersSlices = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers: (state, action) => {

            state.usersList = action.payload;

        },
        updateUsers: (state, action) => {

            state.usersList = action.payload;

        },
        deleteUsers: (state, action) => {

            state.usersList = state.todos.filter((todo) => todo.id !== action.payload);

        },
    }
});

export const { addUsers, updateUsers, deleteUsers } = usersSlices.actions;

export default usersSlices.reducer;