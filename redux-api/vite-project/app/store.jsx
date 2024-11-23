import { configureStore } from '@reduxjs/toolkit'
import moneydata from '../features/DataSlice'
import adddata from '../features/CountSlice'

export const store = configureStore({
    reducer: {
        moneydatakey: moneydata,
        moneymanagerkey: adddata
    },

})
