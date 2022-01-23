import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '../feautures/channelSlice';

export const store = configureStore({
    reducer: {
        channel: channelReducer,
    }
})