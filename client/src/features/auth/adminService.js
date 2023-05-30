import axios from "axios";

const apiUrl = '/api/admins/';
const apiUrl2 = '/api/users/';

//Regsiter User
const Register = async (doThis) => {
  
    const response = await axios.post(apiUrl,doThis);

    if(response.data){
        localStorage.setItem('admin',JSON.stringify(response.data));
    }
    return response.data
}

//Login user method
const Login = async (dothis2) => {
    const response = await axios.post(apiUrl + 'login',dothis2);

    if(response.data){
        localStorage.setItem('admin', JSON.stringify(response.data))
    }

    return response.data
}

//delete user method
const Delete = async (doThis) => {
  
    const response = await axios.delete(apiUrl2,doThis);

    // if(response.data){
    //     localStorage.removeItem('user',JSON.stringify(response.data));
    // }
    return response.data
}

//Logout user method
const Logout = () => {
    localStorage.removeItem('admin')
}


const adminService = {Register,Login,Logout,Delete};

export default adminService;