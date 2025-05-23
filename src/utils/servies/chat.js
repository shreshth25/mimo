import axiosInstance from "../axiosInstance"

const fetchChats = async(data)=>{
    try
    {
        const res  = await axiosInstance.post("chat/", data)
        return res.data
    }
    catch(error)
    {
        console.error("Fetch chats error:", error);
		throw new Error(error.response?.data?.message || "Server Error");
    }
}


const fetchUsers = async()=>{
    try
    {
        const res  = await axiosInstance.get("user/all")
        return res.data
    }
    catch(error)
    {
        console.error("Register error:", error);
		throw new Error(error.response?.data?.message || "Server Error");
    }
}

export {fetchChats,fetchUsers}