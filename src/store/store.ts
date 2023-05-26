import { configureStore } from '@reduxjs/toolkit';
import spotsSlice from './spotSlice';

export const store = configureStore({
	reducer: {
		spots: spotsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
