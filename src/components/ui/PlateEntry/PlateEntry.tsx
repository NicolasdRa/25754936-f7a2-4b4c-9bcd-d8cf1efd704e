import { useEffect, useState } from 'react';

import { Reservation } from '../../../store/reservationsSlice';

import { StyledButton } from './styles';

interface PlateEntryProps {
	data: Reservation;
}

export const PlateEntry: React.FC<PlateEntryProps> = ({ data }) => {
	const [active, setActive] = useState(false);

	const { plateNumber, endTime } = data;

	useEffect(() => {
		endTime !== null ? setActive(false) : setActive(true);
	}, [endTime]);

	return (
		<>
			<StyledButton active={active ? 'active' : undefined} variant='outlined'>
				Plate Nr: {plateNumber}
			</StyledButton>
		</>
	);
};
