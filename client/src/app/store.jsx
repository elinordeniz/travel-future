import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {apiSlice} from "../features/api/apiSlice";
import searchSlice from "../features/search/searchSlice";
import errorSlice from "../features/errors/errorSlice";


export const store= configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        search: searchSlice,
        error: errorSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(apiSlice.middleware),
        devTools: true

})


setupListeners(store.dispatch) //it is for options using in use Queries rtk query