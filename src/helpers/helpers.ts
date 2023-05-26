// generates a spot display number from a spot id AF01	=> 101
export const generateSpotDisplayNumber = (spotId: string) => {
	const spotNumber = spotId.slice(2);
	return parseInt(spotNumber, 10) + 100;
};
