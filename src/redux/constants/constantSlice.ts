import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading:false,
}

const constantSlice = createSlice({
    name:"constants",
    initialState,
    reducers:{
        startLoading:(state) => {
            return {...state, isLoading:true}
        },
        endLoading:(state) => {
            return {...state, isLoading:true}
        },
    }
})
const { reducer } = constantSlice;
export const constantsActions = constantSlice.actions;
export default reducer