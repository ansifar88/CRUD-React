import { adminApi } from "../Utils/Api";

export async function AdminLogin(details){
    try {
        const data = await adminApi.post('/login',details)
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export async function GetUsers(){
    try {
        const data = await adminApi.get('/getallusers')
        console.log(data);
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export async function EditUser(id,name,email,mobile){
    try {
        const data = await adminApi.get('/edituser',{id,name,email,mobile})
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export async function userDetails(userid){
    try {        
        const userDetails = await adminApi.get(`/userDetails/${userid}`)
        return userDetails
    } catch (error) {
        console.log(error.message);
    }
}
export async function editUserData(id,name,email,mobile){
    try {
        const updatedUser = await adminApi.post('/updateUser',{id,name,email,mobile})
        return updatedUser
    } catch (error) {
        console.log(error.message);
    }
} 

export async function DeleteUser(userid){
    try {
        const data = await adminApi.post(`/deleteUser/${userid}`)
        return data
    } catch (error) {
        console.log(error.message);
    }
}
export async function AddUser(credentials){
    try {
        const data = await adminApi.post('/addUser',{credentials})
        return data
    } catch (error) {
        console.log(error.message);
    }
}