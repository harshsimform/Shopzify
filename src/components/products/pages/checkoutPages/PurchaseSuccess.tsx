import React from 'react';
import {
	Box,
	Text,
	VStack,
	Button,
	Image,
	useColorModeValue,
	useBreakpointValue,
	Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import SuccessIcon from '/success/animation-success.gif';

const PurchaseSuccess: React.FC = () => {
	const isScreenFixed = useBreakpointValue({ base: false, md: true });
	const navigate = useNavigate();
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			mx="4"
			marginTop={isScreenFixed ? '12rem' : '2rem'}
		>
			<Box bg={useColorModeValue('white', 'gray.800')}>
				<Flex justifyContent="center" alignItems="center" height="65vh">
					<VStack spacing={4} align="center">
						<Image src={SuccessIcon} boxSize={'15rem'} alt="Order Placed" />
						<Text
							fontSize={'xl'}
							color={useColorModeValue('teal.500', 'teal.400')}
							fontWeight="bold"
						>
							Thank you for your purchase!
						</Text>
						<Text>
							Pull up a chair, sit back and relax as your order is on its way to
							you!
						</Text>
						<Button
							colorScheme="teal"
							onClick={() => navigate('/orders')}
							color="white"
							bgColor={useColorModeValue('teal.400', 'teal.500')}
							_hover={{
								bgColor: 'teal.500',
							}}
						>
							See Order Details
						</Button>
					</VStack>
				</Flex>
			</Box>
		</Flex>
	);
};

export default PurchaseSuccess;
