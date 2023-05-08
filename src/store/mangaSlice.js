import {createSlice} from "@reduxjs/toolkit";

const mangaSlice = createSlice({
    name:"mangaSlice",
    initialState:{
        currentManga:{
            manga:null,
        },
    },reducers:{
        addCurrentManga:(state, action)=>{
            state.currentManga=action.payload
        }
    }
})

export const {addCurrentManga} = mangaSlice.actions
export default mangaSlice.reducer