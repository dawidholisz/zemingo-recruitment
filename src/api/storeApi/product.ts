import {storeApi} from "./storeApi.ts";
import {Product} from "../../types";

const productApi = storeApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            providesTags: [{type: "Product" as const, id: "LIST"}],
            query: () => "product/all"
        }),
        addProduct: builder.mutation<Product[], Product>(
            {
                invalidatesTags: [{type: "Product", id: "LIST"}],
                query: (body) => ({
                    url: "product",
                    method: "PUT",
                    body
                })
            }
        )
    }),
    overrideExisting: false,
})

export const {useGetProductsQuery, useAddProductMutation} = productApi
