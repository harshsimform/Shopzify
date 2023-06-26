export const getBadgeColor = (badge: string) => {
	switch (badge) {
		case 'top':
			return { colorScheme: 'green', bgColor: 'green.100' };
		case 'trending':
			return { colorScheme: 'purple', bgColor: 'purple.100' };
		case 'new':
			return { colorScheme: 'orange', bgColor: 'orange.100' };
		default:
			return { colorScheme: 'gray', bgColor: 'gray.100' };
	}
};
