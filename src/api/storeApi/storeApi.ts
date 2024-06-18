import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL
    }),
    endpoints: ()=>({}),
    tagTypes: ["Product", "InventoryItem"]
});
