export const dateCalculator = (DateFrom: string, DateTo: string) => {

	const date1 = new Date(DateFrom);
	let date2 = new Date(DateTo);

	if (DateTo === 'NULL') {
		date2 = new Date();
	}
	// To calculate the time difference of two dates
	const DifferenceInTime = date2.getTime() - date1.getTime();

	// To calculate the no. of days between two dates
	const DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);
	if (DifferenceInDays > 0) return DifferenceInDays.toFixed();
	return 0
}

export const biggestDate = (firstDate: string, secondDate: string) => {
	const date1 = new Date(firstDate).getTime();
	let date2 = new Date(secondDate).getTime();

	if (secondDate === 'NULL') {
		date2 = new Date().getTime();
	}

	if (date1 > date2) return firstDate;
	return secondDate;
}

export const smallestDate = (firstDate: string, secondDate: string) => {
	const date1 = new Date(firstDate).getTime();
	let date2 = new Date(secondDate).getTime();

	if (secondDate === 'NULL') {
		date2 = new Date().getTime();
	}

	if (date1 < date2) return firstDate;
	return secondDate;
}