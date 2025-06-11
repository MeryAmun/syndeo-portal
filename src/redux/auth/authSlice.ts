import { createSlice } from "@reduxjs/toolkit";
import { registerUser,verifyUser,loginUser,logoutUser } from "../actions/authActions"

const initialState = {
    user:null, isLoggedIn:false,role:null, userId:null,token:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
      setTokenAndId:(state, action) => {
        const { id, token } = action.payload;
        return {...state, userId:id,token:token}
      }
    },

    extraReducers: (builder) => {
       builder.addCase(registerUser.fulfilled, (state) => {
          state.isLoggedIn = false;
        })
       builder.addCase(registerUser.rejected, (state) => {
          state.isLoggedIn = false;
        })
            builder.addCase(verifyUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        const { role } = action.payload
        console.log(role)
       })
       builder.addCase(verifyUser.rejected, (state,) => {
         state.isLoggedIn = false;
          state.user = null;
        })
       builder.addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
   
        })
       builder.addCase(loginUser.rejected, (state) => {
        state.isLoggedIn = false;
        state.user = null;
        })
       builder.addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = null;
        state.role = null;

        localStorage.clear()
        })
      }
   
})

const { reducer } = authSlice
export const authActions = authSlice.actions
export default reducer