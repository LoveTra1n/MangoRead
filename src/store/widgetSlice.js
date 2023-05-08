import {createSlice} from "@reduxjs/toolkit";

export const widgetSlice = createSlice({
    name:'widgetSlice',
    initialState:{
        filterGenre:false,
        genre_title:'',
        type:'',
        before:0,
        after:2022,
        loading:false,
        update:false,
        authPopUp:false,
        check19:false,
        reg:true,
        login:false,
        commentModal:false,
        morePopup:false,
    },
    reducers:{
        showAuth:(state, action)=>{
            state.authPopUp=action.payload
        },
        regLine:(state, action)=>{
            state.reg=action.payload
        },
        loginLine:(state, action)=>{
            state.login=action.payload
        },
        moreOpen:(state, action)=>{
            state.morePopup=action.payload
        },
        showGenre:(state, action)=>{
            state.filterGenre=action.payload
        },
        setGenre:(state, action)=>{
            state.genre_title=action.payload
        },
        setTypes:(state, action)=>{
            state.type=action.payload
        },
        setAfters:(state, action)=>{
            state.after=action.payload
        },
        setBefores:(state, action)=>{
            state.before=action.payload
        },
        updateAction:(state, action)=>{
            state.update = !state.update
            state.check19=true
        },
        loadingAction:(state, action)=>{
            state.loading = action.payload
        },
        openCreateComm:(state, action)=>{
            state.commentModal = action.payload
        }
    }
})

export const {showGenre,setGenre,setAfters,setBefores,setTypes,updateAction,loadingAction,showAuth,regLine,loginLine,openCreateComm,moreOpen}=widgetSlice.actions
export default widgetSlice.reducer