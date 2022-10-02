import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const client = axios.create();

export interface DataType {
    price?: number;
    firstContribution?: number;
    term?: number;
}

export type DataState = {
    isLoading?: boolean;
    error?: any;
};

export const postData = createAsyncThunk(
    'data/sendData',
    async (data: DataType): Promise<any> => {
        const response = await client.post(
            'https://eoj3r7f3r4ef6v4.m.pipedream.net',
            data,
            { headers: { 'Content-Type': 'application/json' } },
        );
        return response.data;
    },
);

const initialState: DataState = {
    isLoading: false,
    error: null,
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postData.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(postData.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(postData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            });
    },
});

// Action creators are generated for each case reducer function
export const {} = dataSlice.actions;

export default dataSlice.reducer;
