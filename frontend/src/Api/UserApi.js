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
export async function ProfileUpdation(id,photo){
    try {
        const formData = new FormData()
        formData.append("image",photo)
        formData.append("userId",id)
        const confiq  ={
            header:{
                'content-type':"multipart/form-data",
                userId:id
            },WithCreadentials:true
        }
        const response = await userApi.post("/uploadimg",formData,confiq)
        return response
    } catch (error) {
        console.log(error.message);
    }
}