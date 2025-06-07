import {  createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../services/authService"

import { messageActions } from "../messageSlice";
import { loadingActions } from "../loadingSlice";



//============REGISTER ACTION================

export const registerUser = createAsyncThunk(
    '/register',
    async (register, thunkApi) => {
  const {email,password } = register
  console.log(register)
        try {
          thunkApi.dispatch(loadingActions.startLoading());
            const response = await authService.register(
        email,
        password
              );
            thunkApi.dispatch(messageActions.setMessage(response.message));
            thunkApi.dispatch(loadingActions.endLoading());
            console.log(response.data)
            return response.data
        } catch (error:any) {
            const message =  (error.response && error.data && error.response.data.message) ||
            error.message ||
            error.toString();
            thunkApi.dispatch(messageActions.setMessage(message));
            //thunkApi.dispatch(authActions.);
            thunkApi.dispatch(loadingActions.endLoading());
            return thunkApi.rejectWithValue();
        }
    }
);
//============VERIFY ACTION================

export const verifyUser = createAsyncThunk('/verify/:token', async({token}, thunkApi) => {
    try {
    const response =  await authService.verify(token);
    thunkApi.dispatch(messageActions.setMessage(response.data.message));
    return response.data
    } catch (error) {
     const message =  (error.response && error.data && error.response.data.message) ||
     error.message ||
     error.toString();
     thunkApi.dispatch(messageActions.setMessage(message));
     return thunkApi.rejectWithValue();
    }
 })


 //============SIGN IN ACTION================

export const loginUser = createAsyncThunk(
    '/login',
    async ({email, password}, thunkApi) => {
      
        try {
            
            thunkApi.dispatch(loadingActions.startLoading());
            const data = await authService.singIn(email, password);
            //console.log(data)
            
            return {user: data}
            
        } catch (error) {
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) ||
            error.message ||
            error.toString();
            thunkApi.dispatch(messageActions.setMessage(message));
            
            thunkApi.dispatch(loadingActions.endLoading());
            return thunkApi.rejectWithValue();
            
        }
    }
);

//============LOGOUT ACTION================


export const logoutUser = createAsyncThunk('/user/logout', async () => {
    await authService.logout()
});


 //============RESET PASSWORD REQUEST ACTION================

export const resetUserPasswordRequest = createAsyncThunk('/reset-password-request', async({email}, thunkApi) => {
    try {
    const response =  await authService.resetPasswordRequest(email);
    console.log(response.message)
    thunkApi.dispatch(messageActions.setMessage(response.message));
    return response.data
    } catch (error) {
        const message = error.response.data.message
    //  const message =  (error.response && error.data && error.response.data.message) ||
    //  error.message ||
    //  error.toString();
     thunkApi.dispatch(messageActions.setMessage(message));
     return thunkApi.rejectWithValue();
    }
 })

 //============RESET PASSWORD RESPONSE  ACTION================

 export const resetUserPasswordResponse = createAsyncThunk('/reset-password-confirmation', async({password, confirmPassword, id, token}, thunkApi) => {
    try {
    const response =  await authService.resetPasswordResponse(password, confirmPassword, id, token);
    console.log(response.message)
    thunkApi.dispatch(messageActions.setMessage(response.message));
    return response.data
    } catch (error) {
        console.log(error)
     const message =  (error.response && error.data && error.response.data.message) ||
     error.message ||
     error.toString();
     thunkApi.dispatch(messageActions.setMessage(message));
     return thunkApi.rejectWithValue();
    }
 })
