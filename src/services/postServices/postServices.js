import axios from "axios";
import authHeader from "../authHeader";

const API_URL = "http://localhost:8080/api/";

 //=================================================================HOSPITALS=====================================================
const getAllHospitals = async () => {
  return await axios.get(API_URL + "hospitals",{headers: authHeader()}).then((response) => {
   //console.log(response)
      return response.data;
  });
};


const addHospital = async (finalData) => {
  
    const { 
        name,
        email,
        phoneNumber,
        description,
        businessUrl,
        streetAddress,
        city,
        region,
        country,
        subscriptionFee,
        userId,
        workingHours,
        hospitalRepresentativeInfo,
        administrators,
        activateAccount,
        validated} = finalData
  return await axios.post(API_URL + "hospital/register", { 
    userId,
    name,
    email,
    phoneNumber,
    description,
    businessUrl,
    streetAddress,
    city,
    region,
    country,
    subscriptionFee,
    workingHours,
    hospitalRepresentativeInfo,
    administrators,
    activateAccount,
    validated},{headers: authHeader()}).then((response) => {
      return response.data;
  });
};


 //=================================================================WARDS=====================================================
// "/api/department/update",
// "/api/department/delete/:departmentId",
 const getAllWards = async () => {
  return await axios.get(API_URL + "departments",{headers: authHeader()}).then((response) => {
      return response.data;
  });
};
 const updateWard = async (formData) => {
  const {
    departmentId,
    hospitalId,
name,
description,
headOfDepartment,
specialty
  } = formData
  return await axios.post(API_URL + "department/update",{
    departmentId,
    hospitalId,
name,
description,
headOfDepartment,
specialty
  },{headers: authHeader()}).then((response) => {
      return response.data;
  });
};
 const deleteWard = async (departmentId) => {
  console.log(departmentId)
  return await axios.post(API_URL + `department/delete/${departmentId}`,{headers: authHeader()}).then((response) => {
      return response;
  });
};


const addWard = async (formData) => {
  
    const { 
hospitalId,
name,
description,
headOfDepartment,
specialty,} = formData
        
  return await axios.post(API_URL + "department/add", { 
hospitalId,
name,
description,
headOfDepartment,
specialty,
  },{headers: authHeader()}).then((response) => {
    console.log(response)
      return response.data;
  });
};
 //=================================================================DOCTORS=====================================================
//"/api/doctor/register",
// "/api/doctor/update",
//"/api/doctors",
//"/api/doctor/:doctorId"
//"/api/doctor/delete/:doctorId"

 const getAllDoctors = async (hospitalId) => {
  console.log(hospitalId)
  console.log(authHeader())
  return await axios.get(API_URL + "doctors",{hospitalId},{headers: authHeader()}).then((response) => {
    console.log(response)
      return response.data;
  });
};

const addDoctor = async (formData) => {
  
    const { 
      hospitalId,
       departmentId,
      firstName,
      lastName,
      email,
      phoneNumber,
      specialty,
      streetAddress,
      city,
      region,
      country,
      activateAccount} = formData
        
  return await axios.post(API_URL + "doctor/register", { 
    hospitalId,
     departmentId,
    firstName,
    lastName,
    email,
    phoneNumber,
    specialty,
    streetAddress,
    city,
    region,
    country,
    activateAccount
  },{headers: authHeader()}).then((response) => {
    console.log(response)
      return response.data;
  });
};

const postService = {
  getAllHospitals,
  addHospital,
  getAllDoctors,addDoctor,addWard,getAllWards,updateWard,deleteWard
};
export default postService;
