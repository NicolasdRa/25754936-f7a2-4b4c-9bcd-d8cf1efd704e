import { Typography } from '@mui/material';
import { StyledContainer, StyledWrapper } from './styles';
import { SpotLogList } from '../SpotLogList/SpotLogList';

export const ReservationsChart = () => {
	return (
		<StyledWrapper>
			<Typography variant='h4'>Reservation Chart History</Typography>
			<StyledContainer>
				<SpotLogList />
			</StyledContainer>
		</StyledWrapper>
	);
};
