import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    user: "",
    token: "",
    isLogin: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLogin = action.payload.isLogin
        }
    }
})
export const { addUser } = loginSlice.actions
export default loginSlice.reducer