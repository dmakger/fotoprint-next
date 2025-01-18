import { CategoryAPI } from "@/entities/Metric/api/category.api";
import { ProductAPI } from "@/entities/Product/api/product.api";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [ProductAPI.reducerPath]: ProductAPI.reducer,
    [CategoryAPI.reducerPath]: CategoryAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            }).concat(
                ProductAPI.middleware,
                CategoryAPI.middleware,
            ),
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']