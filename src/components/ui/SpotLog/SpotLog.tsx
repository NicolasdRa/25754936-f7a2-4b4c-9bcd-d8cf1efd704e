import { Typography } from '@mui/material';

import { StyledLogListWrapper, StyledWrapper } from './styles';

import { Spot } from '../../../store/spotSlice';

import { generateSpotDisplayNumber } from '../../../helpers/helpers';

interface SpotLogProps {
	data: Spot;
}

export const SpotLog: React.FC<SpotLogProps> = ({ data }) => {
	const { spotId } = data;

	return (
		<StyledWrapper>
			<Typography variant='h6' component='div'>
				{`#${generateSpotDisplayNumber(spotId)}`}
			</Typography>

			<StyledLogListWrapper>{/* here map reservations */}</StyledLogListWrapper>
		</StyledWrapper>
	);
};
