'use client';

import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    carouselPosition:0
}

const carouselSlice = createSlice({
    name:'CarouselSlice',
    initialState,
    reducers:{
        increaseValue(state, action: PayloadAction<number>){
            state.carouselPosition += action.payload;
        },
        decreaseValue(state, action: PayloadAction<number>){
            state.carouselPosition -= action.payload;
        }
    }
})

export default carouselSlice.reducer;
export const {increaseValue, decreaseValue} = carouselSlice.actions;