import { useState, useEffect } from "react";
import {
  Text,
  Link,
  useColorModeValue,
  useColorMode,
  Box,
  HStack,
  VStack,
  Spacer,
  Heading,
  Image,
  Select,
  Button,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { ContextProps } from "../../../props/contextProps";
// import { sendMessage } from '../../functions/firebase';

export const Contact = () => {
  const bg = useColorModeValue("bgLight", "bgDark");

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <Box w='full' id='contactMe'>
      {/* Desktop */}
      <Box display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}>
        <ContactDesktop width={width} height={height} bg={bg} />
      </Box>
      {/* Mobile */}
      <Box display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}>
        <ContactMobile width={width} height={height} bg={bg} />
      </Box>
    </Box>
  );
};

export interface ContactInfo {
  name: string;
  lastName: string;
  tel: string;
  email: string;
  interest: string;
  details?: string;
}

const ContactMobile = ({ width, height, bg }: ContextProps) => {
  const { colorMode } = useColorMode();
  const isDark = "dark" === colorMode;

  return (
    <VStack bg={bg} width={width}>
      <Box h='4rem' />
      <VStack w='full'>
        <Spacer />
        <Heading fontSize='2xl'>Contact me</Heading>
        <Spacer />
        <Link w='80%' href='https://wa.me/5491165324519' isExternal>
          <Button variant='callToAction' w='full'>
            <HStack w='full'>
              <Spacer />
              <Text>Send e-mail</Text>
              <Spacer />
            </HStack>
          </Button>
        </Link>
        <Text>o</Text>
        <Link
          w='80%'
          minW='fit-content'
          href='https://wa.me/5491165324519'
          isExternal
        >
          <Button variant='wpp' w='full'>
            <HStack w='full'>
              <Spacer />
              <Image
                src='https://i.ibb.co/mz6BtQ3/Whats-App-svg.png'
                alt='wsp'
                boxSize='30px'
              />
              <Text>Send Whatsapp</Text>
              <Spacer />
            </HStack>
          </Button>
        </Link>
      </VStack>
      <Box h='4rem' />
    </VStack>
  );
};

const ContactDesktop = ({ width, height, bg }: ContextProps) => {
  const { colorMode } = useColorMode();
  const isDark = "dark" === colorMode;

  return (
    <VStack bg={bg} width={width}>
      <Box h='4rem' />
      <Spacer />
      <VStack>
        <Heading>Contact</Heading>
      </VStack>
      <Spacer />
      <VStack w={width / 2} p='8px'>
        <HStack w='full'>
          <Spacer />

          <VStack w='full'>
            <Link w='50%' href='mailto:info@amukar.com' isExternal>
              <Button variant='callToAction' w='full'>
                <HStack w='full'>
                  <Spacer />
                  <EmailIcon w={6} h={6} />
                  <Text>Send e-mail</Text>
                  <Spacer />
                </HStack>
              </Button>
            </Link>
            <Text>o</Text>
            <Spacer />
            <Link w='50%' href='https://wa.me/5491165324519' isExternal>
              <Button variant='wpp' w='full'>
                <HStack w='full'>
                  <Spacer />
                  <Image
                    src='https://i.ibb.co/mz6BtQ3/Whats-App-svg.png'
                    alt='wsp'
                    boxSize='30px'
                  />
                  <Text>Send Whatsapp</Text>
                  <Spacer />
                </HStack>
              </Button>
            </Link>
          </VStack>
          <Spacer />
        </HStack>
      </VStack>
      <Box h='4rem' />
    </VStack>
  );
};
