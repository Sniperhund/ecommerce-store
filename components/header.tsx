import { auth } from '../lib/firebaseConfig';
import { Router, useRouter } from 'next/router';
import { Button, useToast, Image, Text, Flex, Box, ButtonGroup, Spacer, Link, IconButton, Avatar, Menu, MenuButton, MenuList, MenuItem, MenuDivider, MenuGroup } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';

const navigation = [
    {name: 'Home', href: '#'},
    {name: 'Market', href: '#'},
    {name: 'About', href: '#'},
]

function Header() {
    const toast = useToast();
    return (
        <Flex p="3">
            <Link href="/" paddingRight="2">
                <Button variant="ghost" leftIcon={<Image src="assets/Logo.png" h="8" key="Logo" alt="Logo" />}>
                    Hjemmeside
                </Button>
            </Link>
            <ButtonGroup spacing="6">
                {navigation.map((value, index) => {
                    return (
                        <Box key={index}>
                            <Link href={value.href}>
                                <Button colorScheme="blue">
                                    {value.name}
                                </Button>
                            </Link>
                        </Box>
                    )
                })}
            </ButtonGroup>
            <Spacer />
            <ButtonGroup spacing="6" paddingRight="2">
                <IconButton colorScheme="blue" aria-label="Notifications" icon={<BellIcon />} />
                {profile(toast)}
            </ButtonGroup>
        </Flex>
    )
}

function profile(toast: any) {
    const user = auth.currentUser;

    if (user) {
        var photoURL: string | null = user.photoURL;
        if (photoURL == null) photoURL = "";

        console.log(user);

        return (
            <Menu>
                <MenuButton>
                    <Avatar h="10" w="10" src={photoURL} />
                </MenuButton>
                <MenuList>
                    <MenuGroup title={"Welcome back " + user.displayName}>

                   
                    <MenuItem>Dashboard</MenuItem>
                    <MenuItem>Support</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={(e) => {
                        toast({
                            title: 'Signed out',
                            description: 'You have signed out!',
                            status: 'success',
                            isClosable: true,
                        })
                        auth.signOut();
                    }}>Sign out</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        );
    }
    return (
        <Link href="login">
            <Button>
                Login
            </Button>
        </Link>
    );
}

export default Header;