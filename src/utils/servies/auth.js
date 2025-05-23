import axiosInstance from "../axiosInstance"

const register = async(data)=>{
    try
    {
        const res  = await axiosInstance.post("auth/register", data)
        return res.data
    }
    catch(error)
    {
        console.error("Register error:", error);
		throw new Error(error.response?.data?.message || "Server Error");
    }
}


const login = async(data)=>{
    try
    {
        const res  = await axiosInstance.post("auth/login", data)
        return res.data
    }
    catch(error)
    {
        console.error("Register error:", error);
		throw new Error(error.response?.data?.message || "Server Error");
    }
}

export {register,login}