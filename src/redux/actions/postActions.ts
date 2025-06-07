import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadingActions } from "../reducers/loadingSlice";
import postService from "../../services/postServices/postServices";
import { messageActions } from "../reducers/messageSlice";

//============REGISTER ACTION================
//"/api/doctor/register",
// "/api/doctor/update",
//"/api/doctors",
//"/api/doctor/:doctorId"
//"/api/doctor/delete/:doctorId"

 //=================================================================HOSPITALS=====================================================
export const addHospital = createAsyncThunk(
  "/hospital",
  async (finalData, thunkApi) => {
    try {
      thunkApi.dispatch(loadingActions.startLoading());
      const response = await postService.addHospital(
      finalData
      );
    //   console.log(response)
      thunkApi.dispatch(messageActions.setMessage(response.message));
      thunkApi.dispatch(loadingActions.endLoading());
      return response.data;
    } catch (error) {
      console.log(error)
      const message =
        (error.response && error.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(messageActions.setMessage(message));

      thunkApi.dispatch(loadingActions.endLoading());
      return thunkApi.rejectWithValue();
    }
  }
);

export const getAllHospitals = createAsyncThunk(
  "/hospitals",       
  async (data,thunkApi) => {
    try {
      thunkApi.dispatch(loadingActions.startLoading());
      const response = await postService.getAllHospitals();
      // console.log(response)
      thunkApi.dispatch(messageActions.setMessage(response.message));
      thunkApi.dispatch(loadingActions.endLoading());
      return response.hospitals;
     
    } catch (error) {
      const message =
        (error.response && error.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(messageActions.setMessage(message));

      thunkApi.dispatch(loadingActions.endLoading());
      return thunkApi.rejectWithValue();
    }
  }
);

 //=================================================================WARDS=====================================================

 export const addWard = createAsyncThunk(
  "/department",
  async (formData, thunkApi) => {
    try {
      thunkApi.dispatch(loadingActions.startLoading());
      const response = await postService.addWard(
        formData
      );
       console.log(response)
      thunkApi.dispatch(messageActions.setMessage(response.message));
      thunkApi.dispatch(loadingActions.endLoading());
      return response.data;
    } catch (error) {
      console.log(error)
      const message =
        (error.response && error.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(messageActions.setMessage(message));

      thunkApi.dispatch(loadingActions.endLoading());
      return thunkApi.rejectWithValue();
    }
  }
);


export const getAllWards = createAsyncThunk(
  "/departments",       
  async (data,thunkApi) => {
    try {
      thunkApi.dispatch(loadingActions.startLoading());
      const response = await postService.getAllWards();
      thunkApi.dispatch(messageActions.setMessage(response.message));
      thunkApi.dispatch(loadingActions.endLoading());
      return response.departments;
     
    } catch (error) {
      const message =
        (error.response && error.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(messageActions.setMessage(message));

      thunkApi.dispatch(loadingActions.endLoading());
      return thunkApi.rejectWithValue();
    }
  }
);
export const updateWard = createAsyncThunk(
  "/department/update",       
  async (formData,thunkApi) => {
    console.log(formData)
    try {
      thunkApi.dispatch(loadingActions.startLoading());
      const response = await postService.updateWard(formData);
      console.log(response)
      thunkApi.dispatch(messageActions.setMessage(response.message));
      thunkApi.dispatch(loadingActions.endLoading());
      return response
     
    } catch (error) {
      const message =
        (error.response && error.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(messageActions.setMessage(message));

      thunkApi.dispatch(loadingActions.endLoading());
      return thunkApi.rejectWithValue();
    }
  }
);
export const deleteWard = createAsyncThunk(
  "/department/delete",       
  async (departmentId,thunkApi) => {
    console.log(departmentId)
    try {
      thunkApi.dispatch(loadingActions.startLoading());
      const response = await postService.deleteWard(departmentId);
      thunkApi.dispatch(messageActions.setMessage(response.message));
      thunkApi.dispatch(loadingActions.endLoading());
      return response;
     
    } catch (error) {
      const message =
        (error.response && error.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(messageActions.setMessage(message));

      thunkApi.dispatch(loadingActions.endLoading());
      return thunkApi.rejectWithValue();
    }
  }
);
 //=================================================================DOCTORS=====================================================

 export const addDoctor = createAsyncThunk(
  "/doctor",
  async (formData, thunkApi) => {
    try {
      thunkApi.dispatch(loadingActions.startLoading());
      const response = await postService.addDoctor(
        formData
      );
       console.log(response)
      thunkApi.dispatch(messageActions.setMessage(response.message));
      thunkApi.dispatch(loadingActions.endLoading());
      return response.data;
    } catch (error) {
      console.log(error)
      const message =
        (error.response && error.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(messageActions.setMessage(message));

      thunkApi.dispatch(loadingActions.endLoading());
      return thunkApi.rejectWithValue();
    }
  }
);


export const getAllDoctors = createAsyncThunk(
  "/doctors",       
  async (hospitalId,thunkApi) => {
    try {
      thunkApi.dispatch(loadingActions.startLoading());
      const response = await postService.getAllDoctors(hospitalId);
       console.log(response)
      thunkApi.dispatch(messageActions.setMessage(response.message));
      thunkApi.dispatch(loadingActions.endLoading());
      return response.doctors;
     
    } catch (error) {
      const message =
        (error.response && error.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(messageActions.setMessage(message));

      thunkApi.dispatch(loadingActions.endLoading());
      return thunkApi.rejectWithValue();
    }
  }
);