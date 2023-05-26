import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';

import { StyledSideNav, StyledSlotsWrapper, StyledWrapper } from './styles';
import { ParkSpotsList } from '../ParkSpotsList/ParkSpotsList';
import { ReservationsChart } from '../ReservationsChart/ReservationsChart';

import { Spot, selectSpots, setInUse } from '../../../store/spotSlice';
import { useAppDispatch } from '../../../store/hooks';

export const Dashboard = () => {
	const dispatch = useAppDispatch();
	const spots = useSelector(selectSpots);

	const handleEnterGarage = () => {
		const firstFreeSpot = spots.find((spot: Spot) => spot.state === 'available');

		if (!firstFreeSpot) {
			Swal.fire({
				title: 'Please wait...',
				text: 'No free parking spots available',
				icon: 'error',
				confirmButtonText: 'Cool',
			});
		} else {
			dispatch(setInUse(firstFreeSpot.spotId));
		}
	};

	return (
		<StyledWrapper>
			<StyledSideNav>
				<Button onClick={handleEnterGarage}>Enter Garage</Button>
			</StyledSideNav>
			<StyledSlotsWrapper>
				<ParkSpotsList />
				<ReservationsChart />
			</StyledSlotsWrapper>
		</StyledWrapper>
	);
};
