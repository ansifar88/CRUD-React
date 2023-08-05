import { userApi } from "../Utils/Api";


export async function userReg(credentials){
    try {
        const data = await userApi.post('/signup',credentials)
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export async function UserLogin(details){
    try {
        const data = await userApi.post("/login",details)
        return data
    } catch (error) {
        console.log(error);
    }
}