import { configureStore } from '@reduxjs/toolkit'
import pictureSlice from './PictureSlice'

const store = configureStore({
    reducer:{
        pictureSlice
    }
})

export default store;