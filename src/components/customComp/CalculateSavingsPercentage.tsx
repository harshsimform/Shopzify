export const calculateSavingsPercentage = (
	originalPrice: number,
	discountedPrice: number
) => {
	const savings = originalPrice - discountedPrice;
	const savingsPercentage = (savings / originalPrice) * 100;
	return Math.round(savingsPercentage);
};
