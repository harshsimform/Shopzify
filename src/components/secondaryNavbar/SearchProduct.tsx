import {
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	useColorModeValue,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	Flex,
	useBreakpointValue,
	InputRightElement,
	Kbd,
	useDisclosure,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const SearchProduct = () => {
	const inputBorderColor = useColorModeValue('gray.200', 'gray.600');
	const kbdColor = useColorModeValue('gray.600', 'gray.200');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const isScreenFixed = useBreakpointValue({ base: false, md: true });
	const [searchInput, setSearchInput] = useState('');
	const [reset, setReset] = useState(0);

	const handleReset = () => {
		setReset((prevKey) => prevKey + 1);
	};
	const navigate = useNavigate();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.ctrlKey && e.key === 'z') {
				onOpen();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const handleSearch = () => {
		if (searchInput !== '') {
			const trimmedInput = searchInput.replace(/\s+/g, '').toLowerCase();
			handleReset();
			navigate('/search-products', { state: { searchInput: trimmedInput } });
			setSearchInput('');
			onClose();
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<>
			<InputGroup maxW="lg">
				<InputLeftElement
					pointerEvents="none"
					children={<SearchIcon color="gray.300" />}
				/>
				<Input
					isReadOnly
					type="text"
					placeholder="Search for Products, brands and more"
					cursor={'pointer'}
					borderRadius="md"
					focusBorderColor={inputBorderColor}
					onClick={onOpen}
				/>
				{isScreenFixed ? (
					<InputRightElement pointerEvents="none" mr={6}>
						<Flex>
							<Kbd color={kbdColor}>ctrl</Kbd>+<Kbd color={kbdColor}>z</Kbd>
						</Flex>
					</InputRightElement>
				) : (
					<></>
				)}
			</InputGroup>

			<Modal isOpen={isOpen} onClose={onClose} size="xl" key={reset}>
				<ModalOverlay />
				<ModalContent mx={3}>
					<ModalBody mx={isScreenFixed ? '' : -4}>
						<Flex>
							<InputGroup>
								{isScreenFixed ? (
									<InputLeftElement
										pointerEvents="none"
										mt={isScreenFixed ? 1 : 0}
										children={<SearchIcon fontSize={20} color="teal.500" />}
									/>
								) : (
									<></>
								)}
								<Input
									type="text"
									height={isScreenFixed ? 50 : '2.5rem'}
									fontSize={'lg'}
									placeholder="Search for Products, brands and more"
									borderColor={isScreenFixed ? 'transparent' : 'transparent'}
									focusBorderColor={
										isScreenFixed ? 'transparent' : 'transparent'
									}
									bgColor={'transparent'}
									value={searchInput}
									onChange={handleInputChange}
									onKeyDown={handleKeyPress}
								/>
							</InputGroup>
							<IconButton
								display={isScreenFixed ? 'none' : 'block'}
								aria-label="Search product"
								ml={2}
								icon={<SearchIcon />}
								onClick={handleSearch}
							/>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SearchProduct;
