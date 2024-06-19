import { storeApi } from './storeApi.ts'
import { InventoryItem } from '../../types'

const inventoryItemApi = storeApi.injectEndpoints({
  endpoints: (builder) => ({
    getInventoryItems: builder.query<InventoryItem[], void>({
      providesTags: [{ type: 'InventoryItem' as const, id: 'LIST' }],
      query: () => 'inventory',
    }),
    updateInventoryItems: builder.mutation<InventoryItem[], InventoryItem[]>({
      invalidatesTags: [{ type: 'InventoryItem', id: 'LIST' }],
      query: (body) => ({
        url: 'inventory',
        method: 'POST',
        body,
      }),
    }),
    resetInventoryItems: builder.mutation<InventoryItem[], void>({
      invalidatesTags: [{ type: 'InventoryItem', id: 'LIST' }],
      query: () => ({
        url: 'inventory/reset',
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false,
})
export const {
  useGetInventoryItemsQuery,
  useUpdateInventoryItemsMutation,
  useResetInventoryItemsMutation,
} = inventoryItemApi
