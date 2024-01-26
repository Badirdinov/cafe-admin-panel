import { configureStore } from '@reduxjs/toolkit'
import users from "./slice/users";

export const store = configureStore({
    reducer: {
        users: users
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch