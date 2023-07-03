import React from 'react';
import {
	Box,
	Flex,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	useBreakpointValue,
} from '@chakra-ui/react';

const ProductsSkeleton = () => {
	const slidesPerView = useBreakpointValue({
		base: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
		'2xl': 5,
		'3xl': 7,
		'4xl': 8,
		'5xl': 9,
	});

	const skeletonArray = [...Array(slidesPerView)].map((_, index) => (
		<Skeleton key={index} w="full" h="320px" borderRadius="3xl" mx={'0.3rem'} />
	));

	return (
		<Box marginX={5}>
			<Flex justifyContent="space-between">
				<SkeletonText mt="7" noOfLines={1} w="7rem" skeletonHeight="6" />
				<Flex mt={5}>
					<Skeleton w="12" h="10" borderRadius="md" mr="2" />
					<Skeleton w="12" h="10" borderRadius="md" />
				</Flex>
			</Flex>
			<Flex mt="8" direction="column">
				<Flex>{skeletonArray}</Flex>
			</Flex>
		</Box>
	);
};

export default ProductsSkeleton;
