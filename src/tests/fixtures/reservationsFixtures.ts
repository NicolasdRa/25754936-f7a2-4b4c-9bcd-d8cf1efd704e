import { ReservationsSlice } from '../../store/reservationsSlice';

export const initialState: ReservationsSlice = {
	data: [],
};

export const withReservationState: ReservationsSlice = {
	data: [
		{
			id: '1',
			spotId: '1',
			plateNumber: 'ABC-123',
			startTime: '2021-10-13T15:00:00.000Z',
			endTime: null,
		},
	],
};
