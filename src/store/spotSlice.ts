import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Spot {
	spotId: string;
	state: 'available' | 'in-use';
}

// Type for the slice state
interface SpotsSlice {
	data: Spot[];
}

// Initial state
const initialState: SpotsSlice = {
	data: [
		{ spotId: 'AF1', state: 'available' },
		{ spotId: 'AF2', state: 'available' },
		{ spotId: 'AF3', state: 'available' },
		{ spotId: 'AF4', state: 'available' },
		{ spotId: 'AF5', state: 'available' },
		{ spotId: 'AF6', state: 'available' },
		{ spotId: 'AF7', state: 'available' },
		{ spotId: 'AF8', state: 'available' },
		{ spotId: 'AF9', state: 'available' },
		{ spotId: 'AF10', state: 'available' },
	],
};
export const spotsSlice = createSlice({
	name: 'Spots',
	initialState,
	reducers: {
		// Standard reducer logic, with auto-generated action types
		setInUse(state: SpotsSlice, action: PayloadAction<string>) {
			const spot = state.data.find((item) => item.spotId === action.payload);
			if (spot) {
				spot.state = 'in-use';
			}
		},
		setAvailable: (state: SpotsSlice, action: PayloadAction<string>) => {
			const spot = state.data.find((item) => item.spotId === action.payload);
			if (spot) {
				spot.state = 'available';
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { setInUse, setAvailable } = spotsSlice.actions;

// Selectors
export const selectSpots = (state: RootState) => state.spots.data;

export default spotsSlice.reducer;
