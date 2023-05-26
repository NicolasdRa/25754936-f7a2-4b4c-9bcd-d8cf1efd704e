import { Typography } from '@mui/material';

import { StyledButton, StlyedIndicator, StyledWrapper } from './styles';

import { Spot, setAvailable } from '../../../store/spotSlice';
import { useAppDispatch } from '../../../store/hooks';

import { generateSpotDisplayNumber } from '../../../helpers/helpers';

interface ParkSpotProps {
	data: Spot;
}

export const ParkingSpot: React.FC<ParkSpotProps> = ({ data }) => {
	const { spotId, state } = data;
	const dispatch = useAppDispatch();

	const handleExit = () => {
		if (state === 'available') return;

		dispatch(setAvailable(spotId));
	};

	return (
		<StyledWrapper key={spotId}>
			<Typography variant='h6' component='div'>
				{generateSpotDisplayNumber(spotId)}
			</Typography>
			<StlyedIndicator state={state} />
			<StyledButton disabled={state === 'available'} onClick={handleExit}>
				Exit
			</StyledButton>
		</StyledWrapper>
	);
};
