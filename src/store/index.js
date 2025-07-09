//  import {configureStore} from '@reduxjs/toolkit';
// import {createSlice} from '@reduxjs/toolkit';
// const counterSlice =  createSlice({
//     name: 'counter',
//     initialState: {counterVal:0},
//     reducers :{
//         increment :(state)=>{
//             state.counterVal +=1;

//         },
//         decrement :(state)=>{
//             state.counterVal -=1;

//         },
//         add : (state,action)=>{
//              state.counterVal += action.payload;

//         },
//         subtract :(state,action)=>{
//             state.counterVal -= action.payload

//         },
//     }


// });
// const privacySlice = createSlice({
//     name: 'Privacy',
//     initialState: false,
//     reducers:{
//         togglePrivacy : (state)=>{
//             return !state;
//         }
//     }
// })


// const counterStore = configureStore({
//     reducer:{
//     counter : counterSlice.reducer,
//     privacy : privacySlice.reducer
// }
// });
// export const counterActions = counterSlice.actions;
// export const privacyActions = privacySlice.actions;
//  export default counterStore;







 // const initial_VALUE ={
//     counter :0
// }
// const reducer =(store = initial_VALUE,action )=>{
//     if(action.type === "INCREMENT"){
//         return {
//             ...store,
//             counter: store.counter + 1
//         }
//     }

//     if(action.type === "DECREMENT"){
       
//         return {
//             ...store,
//             counter: store.counter - 1
//         }
//     }
//     if(action.type === "Add"){
//         return{
//             ...store,counter:store.counter + action.payload
//         }
//     }
//     if(action.type ==="subtract"){
//         return{
//             ...store, 
//             counter :store.counter - action.payload
//         }
//     }
//     return store;

// }
