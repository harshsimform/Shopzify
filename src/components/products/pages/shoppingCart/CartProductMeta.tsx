import {
	Badge,
	Box,
	HStack,
	Image,
	Stack,
	Text,
	useColorModeValue as mode,
} from '@chakra-ui/react';
import { formatCurrency } from '../../../customComp/FormatCurrency';

export type CartProductMetaProps = {
	name: string;
	image: string;
	category: string;
	discountedPrice: number;
};

export const CartProductMeta = (props: CartProductMetaProps) => {
	const { image, name, category, discountedPrice } = props;
	return (
		<Stack direction="row" spacing="5" width="full">
			<Image
				rounded="lg"
				width="120px"
				height="120px"
				fit="cover"
				src={image}
				alt={name}
				draggable="false"
				loading="lazy"
			/>
			<Box pt="4">
				<Stack spacing="0.5">
					<Text fontSize={'lg'}>{name}</Text>
				</Stack>
				<HStack spacing="1" color={mode('gray.600', 'gray.400')}>
					<Text fontSize="md">Category: {category}</Text>
				</HStack>
				<HStack spacing="1" color={mode('gray.600', 'gray.400')}>
					<Text fontSize="md">Price: {formatCurrency(discountedPrice)}</Text>
				</HStack>
				<Badge variant="solid" colorScheme="teal" fontSize={'xs'}>
					#1 BEST SELLER
				</Badge>
			</Box>
		</Stack>
	);
};
