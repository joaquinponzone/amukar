import {
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Button,
  IconButton,
  Container,
  HStack,
  Heading,
  Spacer,
  Box,
  Collapse,
  Stack,
  Center,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export interface TheNavItem {
  label: string;
  href: string;
}

export interface TheNavBar {
  photoURL: string;
  title?: string;
  navItems: TheNavItem[];
}

export interface NavBarProps {
  props: TheNavBar;
}

export const NavBar = ({ props }: NavBarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("bgLight", "bgDark");
  const isDark = colorMode === "dark";
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container
      maxW='100%'
      maxH={"6rem"}
      p={4}
      style={{ position: "fixed", zIndex: 100 }}
      bg={bg}
    >
      <HStack>
        <Button
          as='a'
          variant='headers'
          ml={4}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            maxH={"-webkit-fill-available"}
            p={1}
            src={props.photoURL}
            alt='Amukar'
          />
        </Button>
        {props.title != "" ? <Title title={props.title} /> : null}
        <Spacer />

        <Box display={{ lg: "flex", md: "none", sm: "none", base: "none" }}>
          <Spacer />
          {props.navItems.map((navItem, index) => (
            <NextLink href={navItem.href} passHref key={index}>
              <Button as='a' variant='headers'>
                {navItem.label}
              </Button>
            </NextLink>
          ))}
          <Button onClick={toggleColorMode} variant='headers'>
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Box>
        <Box display={{ lg: "none", md: "flex", sm: "flex" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant='headers'
            aria-label={"Toggle Navigation"}
          />
        </Box>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Stack bg={isDark ? "bgDark" : "bgLight"} p={4}>
          <Button onClick={toggleColorMode} variant='headers'>
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
          {props.navItems.map((navItem, index) => (
            <Center key={index}>
              <NextLink href={navItem.href} passHref>
                <Button w='100%' variant='headers' as='a' onClick={onToggle}>
                  {navItem.label}
                </Button>
              </NextLink>
            </Center>
          ))}
        </Stack>
      </Collapse>
    </Container>
  );
};

const Title = (props) => {
  return (
    <HStack>
      <Container maxW='2em' />
      <Heading as='h1' fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}>
        {props.title}
      </Heading>
    </HStack>
  );
};
