import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Reservation {
	id: string;
	spotId: string;
	plateNumber: string;
	startTime: string;
	endTime: string | null;
}

// Type for the slice state
export interface ReservationsSlice {
	data: Reservation[];
}

// Initial state
const initialState: ReservationsSlice = {
	data: [],
};
export const reservationsSlice = createSlice({
	name: 'Reservations',
	initialState,
	reducers: {
		// standard reducer logic, with auto-generated action types
		startBooking(state: ReservationsSlice, action: PayloadAction<Reservation>) {
			state.data.push(action.payload);
		},
		endBooking: (state, action: PayloadAction<string>) => {
			const reservation = state.data.find((item) => item.id === action.payload);
			if (reservation) {
				reservation.endTime = new Date().toLocaleString();
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { startBooking, endBooking } = reservationsSlice.actions;

// Selectors
export const selectReservations = (state: RootState) => state.reservations.data;

export const selectReservationsBySpotId =
	(spotId: string) => (state: RootState) =>
		state.reservations.data.filter((item) => item.spotId === spotId).reverse();

export const selectCurrentReservationBySpotId =
	(spotId: string) => (state: RootState) =>
		state.reservations.data.find(
			(item) => item.spotId === spotId && !item.endTime,
		);

//Export the reducer as a default export
export default reservationsSlice.reducer;
