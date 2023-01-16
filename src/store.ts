import {configureStore} from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./confige";
import {articlesReducer} from "./store/articles-slice";
import {detailReducer} from "./store/details-slice";

export const store = configureStore({
    reducer: {
        articlesReducer,
        detailReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api
            }
        },
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState >;
export type AppDispatch = typeof store.dispatch;

