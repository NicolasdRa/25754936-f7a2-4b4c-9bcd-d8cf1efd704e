import { Button } from '@mui/material';
import { StyledSideNav, StyledSlotsWrapper, StyledWrapper } from './styles';
import { ParkSpotsList } from '../ParkSpotsList/ParkSpotsList';
import { ReservationsChart } from '../ReservationsChart/ReservationsChart';

const handleEnterGarage = () => {
	console.log('enter garage');
};

export const Dashboard = () => {
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
