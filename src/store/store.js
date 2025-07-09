import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";




console.log("enter in block")



const profileNameslice = createSlice({
    name : "profileName",
    initialState : {Pname:"guest"},
    reducers : {
        updateName :(state,action)=>{
            
            state.Pname= action.payload;
          
        }
    }
});
const isLoginSLice= createSlice({
    name: "login",
    initialState : {status: false},
    reducers :{
        setLogin:(state,action)=>{
            console.log("is login " + state.status);
              state.status = action;
            
        }
    }
});


const uiuxSlice=createSlice({
    name: "uiux",
    initialState: {
        sidebarState: true,
    },
    reducers: {
        handleSidebar: (state,action)=>{
            state.sidebarState= action.payload;
        }
    }

})




const ReactStore= configureStore({
    reducer :{
        profileName : profileNameslice.reducer,
        login : isLoginSLice.reducer,
        uiux: uiuxSlice.reducer,
    }
})
 export const  profileAction = profileNameslice.actions;
 export const LoginAction= isLoginSLice.actions;
 export const uiuxAction=uiuxSlice.actions;
 export default ReactStore;