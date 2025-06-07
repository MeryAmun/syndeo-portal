import { createSlice } from "@reduxjs/toolkit";

const initialState = {isLoading:false}

const loadingSlice = createSlice({
    name:'loading',
    initialState,
    reducers:{
        startLoading: (state, action) => {
         state.isLoading = true
        },
        endLoading:(state) => {
           state.isLoading = false
        }
    }
});

const {reducer} = loadingSlice;
export const loadingActions = loadingSlice.actions;
export default  reducer;