import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        currentUser:null,
        password:'',
        checker:false,
        jwt:''
    },reducers:{
        addImage:(state, action)=>{
            state.currentUser.image=action.payload
        },
        addCurrentUser:(state, action)=>{
            state.password=action.payload
            state.currentUser=action.payload
            state.checker = true
            state.jwt=action.payload
        },
        logout:(state,action)=>{
            state.currentUser=false
            state.password=''
            state.checker=false
        }
    }
})

export const {addCurrentUser,addImage,logout} = userSlice.actions
export default userSlice.reducer