import Api from "../config/AoxisConfig"
export const LoginApi =(data)=>{
    return Api.post("user/login",data)
}
export const RegisterApi =(data)=>{
    return Api.post("user/register",data)
}
export const ProfileApi =(token)=>{
    return Api.get("user/Profile",{
       headers:{
        Authorization:`Bearer ${token}`
       }
    })
}
// product api




export const ProductAddApi =(data)=>{
    return Api.post("product/add-product",data)
}
export const ProductGetApi =()=>{
    return Api.get("product/get-all-data")
}
export const ProductGetApiByid =(id)=>{
    return Api.get(`product/get-data-byid/${id}`)
}
