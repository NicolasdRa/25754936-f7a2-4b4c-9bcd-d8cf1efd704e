// generates a spot display number from a spot id AF01	=> 101
export const generateSpotDisplayNumber = (spotId: string) => {
	const spotNumber = spotId.slice(2);
	return parseInt(spotNumber, 10) + 100;
};

// chooses three random characters from a string
export const chooseThreeRandomCharacters = (str: string) => {
	let result = '';
	for (let i = 0; i < 3; i++) {
		result += str.charAt(Math.floor(Math.random() * str.length));
	}

	return result;
};

// generates a random plate
export const generatePlate = () => {
	const letterOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numberOptions = '0123456789';

	const plate = `${chooseThreeRandomCharacters(
		letterOptions,
	)}-${chooseThreeRandomCharacters(numberOptions)}`;

	return plate;
};
