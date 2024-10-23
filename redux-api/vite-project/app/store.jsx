import { configureStore } from '@reduxjs/toolkit'
import moneydata from '../features/DataSlice'

export const store = configureStore({
    reducer: {
        moneydatakey: moneydata
    },

})
