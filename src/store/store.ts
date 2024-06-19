import { configureStore } from '@reduxjs/toolkit'

import { storeApi } from '../api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  devTools: import.meta.env.DEV,
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
})

setupListeners(store.dispatch)
