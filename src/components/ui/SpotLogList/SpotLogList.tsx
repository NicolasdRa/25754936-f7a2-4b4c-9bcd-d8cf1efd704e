import { StyledWrapper } from './styles';
import { SpotLog } from '../SpotLog/SpotLog';

import { useAppSelector } from '../../../store/hooks';
import { Spot, selectSpots } from '../../../store/spotSlice';

export const SpotLogList = () => {
	const parkSpots = useAppSelector(selectSpots);

	return (
		<StyledWrapper>
			{parkSpots.map((spot: Spot) => {
				return <SpotLog key={spot.spotId} data={spot} />;
			})}
		</StyledWrapper>
	);
};
