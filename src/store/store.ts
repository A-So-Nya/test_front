import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataReducer';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
    middleware: (gDM) => gDM().concat(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
