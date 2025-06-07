import axios from 'axios';


const API_URL = "http://localhost:5000/api/auth"
///api/auth/confirm/verification/code

//============REGISTER USER================

const register = async (
    email,
    password
       ) => {
    return await axios.post(`${API_URL}/register`, {
        email,
        password
        })
};

//============VERIFY USER================

const verify = async (token) => {
    return await axios.get(`${API_URL}/verify/${token}`)
    .then((response) => {
if(response.data.accessToken){
    return  response.data
} 
    })

}

//============SIGN IN USER================

const singIn = async (email, password) => {
    return await axios.post(`${API_URL}/signin`,{
        email,
        password
    })
    .then((response) => {
        return response.data.user;
    });
};


//============LOGOUT USER================


const logout = () => {
    localStorage.clear()
    window.location.replace("/")
};

//============RESET PASSWORD REQUEST================

const resetPasswordRequest = async (email) => {
    return await axios.post(API_URL + 'reset-password-request', {email}
    )
    .then((response) => {
      return  response.data
    });

}


//============RESET PASSWORD RESPONSE================

const resetPasswordResponse = async (password,confirmPassword, id, token) => {
    return await axios.post(API_URL + 'reset-password-confirmation', {password,confirmPassword, id, token}
    )
    .then((response) => {
      return  response.data
    });

}


export const authService = {
    register, verify, singIn,logout,resetPasswordRequest,resetPasswordResponse
};
