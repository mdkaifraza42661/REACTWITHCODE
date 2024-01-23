import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Feature/Todo/TdoSlice'

export const Store = configureStore({
    reducer: todoReducer
})