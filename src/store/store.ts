import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@rtk-incubator/rtk-query";

import {storeApi} from "../api";

export const store = configureStore({
    devTools: import.meta.env.DEV,
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
});

setupListeners(store.dispatch);
