import { ParkingSpot } from '../ParkingSpot/ParkingSpot';
import { StyledWrapper } from './styles';

import { Spot, selectSpots } from '../../../store/spotSlice';
import { useAppSelector } from '../../../store/hooks';

export const ParkSpotsList = () => {
	const parkSpots = useAppSelector(selectSpots);

	return (
		<StyledWrapper>
			{parkSpots.map((spot: Spot) => {
				return <ParkingSpot key={spot.spotId} data={spot} />;
			})}
		</StyledWrapper>
	);
};
