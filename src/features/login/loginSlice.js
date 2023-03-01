import {createSlice} from '@reduxjs/toolkit'


const user = window.localStorage.getItem("user")
let initialState; 
if(user){
    initialState = {
        user: user.user,
        token: user.token,
        isLogin: true,
        permissions: user.permissions
    }
}else{
        initialState = {
        user: "",
        token: "",
        isLogin: false,
        permissions: []
    }
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLogin = action.payload.isLogin
            state.permissions = action.payload.permissions
        },
       
    }
})
export const { addUser } = loginSlice.actions
export default loginSlice.reducer