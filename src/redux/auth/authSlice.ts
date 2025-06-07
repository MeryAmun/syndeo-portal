import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../actions/authActions"

const initialState = {
    user:null, isLoggedIn:false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},

    extraReducers: (builder) => {
       builder.addCase(registerUser.fulfilled, (state) => {
          state.isLoggedIn = false;
        })
       builder.addCase(registerUser.rejected, (state) => {
          state.isLoggedIn = false;
        })
         //    builder.addCase(verifyUser.fulfilled, (state, action) => {
    //     state.isLoggedIn = true;
    //     state.user = action.payload.user;
    //     const { roles } = action.payload.user;
    //     state.sliceRoles = roles
    // const roleIndex = getRoleIndex(roles)
    // state.roleIndex = roleIndex
    //     // localStorage.setItem("user", JSON.stringify(action.payload.user));
        
    //     }),
    //    builder.addCase(verifyUser.rejected, (state, action) => {
    //      state.isLoggedIn = false;
    //       state.user = null;
    //     }),
    //    builder.addCase(loginUser.fulfilled, (state, action) => {
    //     state.isLoggedIn = true;
    //     state.user = action.payload.user;
    //     const { roles,userId } = action.payload.user;
       
    //     // console.log(action.payload.user)
    //      if(userId){
    //       state.sliceRoles = roles
    //       const roleIndex = getRoleIndex(roles)
    //       state.roleIndex = roleIndex
    //       state.role = roles[roleIndex]
    //       localStorage.setItem("user", JSON.stringify(action.payload.user));
    //       localStorage.setItem("role", JSON.stringify(roles[roleIndex]));
        
    //      }
        
       
    //     }),
    //    builder.addCase(loginUser.rejected, (state, action) => {
    //     state.isLoggedIn = false;
    //     state.user = null;
    //     }),
    //    builder.addCase(logoutUser.fulfilled, (state, action) => {
    //     state.isLoggedIn = false;
    //     state.user = null;
    //     state.roleIndex = 0;
    //     state.sliceRoles = null
    //     localStorage.clear()
    //     })
       
    //   }
    }
   
})

const { reducer } = authSlice
export const authActions = authSlice.actions
export default reducer