import { Typography } from '@mui/material';

import { StyledLogListWrapper, StyledWrapper } from './styles';
import { PlateEntry } from '../PlateEntry/PlateEntry';

import { Spot } from '../../../store/spotSlice';
import {
	Reservation,
	selectReservationsBySpotId,
} from '../../../store/reservationsSlice';
import { useAppSelector } from '../../../store/hooks';

import { generateSpotDisplayNumber } from '../../../helpers/helpers';

interface SpotLogProps {
	data: Spot;
}

export const SpotLog: React.FC<SpotLogProps> = ({ data }) => {
	const { spotId } = data;
	const spotReservations = useAppSelector(selectReservationsBySpotId(spotId));

	return (
		<StyledWrapper>
			<Typography variant='h6' component='div'>
				{`#${generateSpotDisplayNumber(spotId)}`}
			</Typography>

			<StyledLogListWrapper>
				{spotReservations.map((reservation: Reservation) => (
					<PlateEntry key={reservation.id} data={reservation} />
				))}
			</StyledLogListWrapper>
		</StyledWrapper>
	);
};
