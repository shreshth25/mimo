import { createSlice } from "@reduxjs/toolkit";

const getInitialState = ()=>{
    try
    {
        let storedUser = JSON.parse(localStorage.getItem('user'))
        if(storedUser && storedUser.token && storedUser.profile)
        {
            return {
                'profile': storedUser.profile,
                'token': storedUser.token
            }
        }
    }
    catch(e)
    {
        console.error("Failed to parse user from localStorage", e);
    }

    return {
        'profile': null,
        'token': null,
    }
}
const authSlice = createSlice({
    name: "authentication",
    initialState: getInitialState(),
    reducers:{
        saveUser: (state, action)=>{
            state.profile = action.payload.profile;
            state.token = action.payload.token

            let data = {
                'profile': action.payload.profile,
                'token': action.payload.token,
            }

            localStorage.setItem('user', JSON.stringify(data))
        },
        logoutUser: (state)=>{
            state.profile = null;
            state.token = null
            localStorage.removeItem('user')
        }
    }
})

const authReducer = authSlice.reducer
export default authReducer

export const {saveUser, logoutUser} = authSlice.actions