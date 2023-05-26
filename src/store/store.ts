import { configureStore } from '@reduxjs/toolkit';
import spotsSlice from './spotSlice';
import reservationsSlice from './reservationsSlice';

export const store = configureStore({
	reducer: {
		spots: spotsSlice,
		reservations: reservationsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
