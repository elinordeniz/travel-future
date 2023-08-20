import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";


const initialState={
    fromError: {isError: null, msg: "Departure point is required"},
    toError: {isError: null, msg: "Destination point is required."},
    departDateError: {isError: null, msg: "Depart Date is required"},
    returnDateError: {isError: false, msg: "Return Date is required, or select one way trip."},

}

 const errorSlice= createSlice({
    name:"error",
    initialState,
    reducers:{
        setFromError: (state, action)=>{
            state.fromError.isError=action.payload
        },
        setToError: (state, action)=>{
            state.toError.isError=action.payload
        },
         setReturnDateError: (state, action)=>{
            state.returnDateError.isError=action.payload
        },
         setDepartDateError: (state, action)=>{
            state.departDateError.isError=action.payload
        }
    }
 })

  

 export const {setFromError, setToError, setReturnDateError, setDepartDateError} = errorSlice.actions;

 export const selectFromError= (state)=> state.error.fromError;
 export const selectToError= (state)=> state.error.toError;
 export const selectDepartDateError= (state)=> state.error.departDateError;
 export const selectReturnDateError= (state)=> state.error.returnDateError;


 export default errorSlice.reducer;