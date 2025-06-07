import { createSlice } from "@reduxjs/toolkit";
const initialState = {message:""}

const messageSlice = createSlice({
    name:'message',
    initialState,
    reducers:{
        setMessage: (state, action) => {
            return {...state, message: action.payload}
        },
        clearMessage:(state) => {
            return {...state, message:''}
        }
    }
});

const { reducer } = messageSlice;
export const messageActions = messageSlice.actions;
export default  reducer;