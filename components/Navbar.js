import {
    Box,
    Stack,
    Heading,
    Flex,
    IconButton,
    useDisclosure
} from "@chakra-ui/react";

import Link from "next/link";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";


const NavBar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="#000957"
            color="white"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"} mr={5}>
                    Franio.net
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <IconButton onClick={handleToggle} bg='' _hover={{ bgColor: "#344CB7" }} icon={<HamburgerIcon />}></IconButton>
            </Box>
            <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: isOpen ? "flex" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 2, md: 0 }}
                spacing='2rem'
            >
                <Link href='/'>
                    <a>Resume</a>
                </Link>

                <Link href='/'>
                    <a>About me</a>
                </Link>

                <Link href='/'>
                    <a>Contact</a>
                </Link>

                <Link href='/'>
                    <a>Blog</a>
                </Link>

            </Stack>

            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                
                <IconButton bg='' _hover={{ bgColor: "#344CB7" }} icon={<MoonIcon />}></IconButton>
            </Box>
        </Flex>
    );
};

export default NavBar;
