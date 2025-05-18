import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    // extraReducers:(builder) => {
    //     builder.addCase("case",(state,action) => {

    //     })
    // }
})

const { reducer } = authSlice
export const authActions = authSlice.actions
export default reducer