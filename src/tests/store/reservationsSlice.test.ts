import { describe, test } from '@jest/globals';
import reservationsSlice, { startBooking } from '../../store/reservationsSlice';
import {
	initialState,
	withReservationState,
} from '../fixtures/reservationsFixtures';

describe('reservationsSlice', () => {
	test('should return the initial state', () => {
		const state = reservationsSlice(initialState, { type: 'test' });

		expect(state).toEqual(initialState);
	});

	test('should handle start Booking', () => {
		console.log(startBooking);
		const state = reservationsSlice(initialState, {
			type: 'Reservations/startBooking',
			payload: {
				id: '1',
				spotId: '1',
				plateNumber: 'ABC-123',
				startTime: '2021-10-13T15:00:00.000Z',
				endTime: null,
			},
		});

		expect(state).toEqual(withReservationState);
	});
});
