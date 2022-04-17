import React from "react";
import {
  useColorModeValue,
  useColorMode,
  Box,
  HStack,
  Text,
  Spacer,
  VStack,
} from "@chakra-ui/react";

import { ContextProps } from "../props/contextProps";
export const Footer = () => {
  const bg = useColorModeValue("bgLight", "bgDark");
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  return (
    <Box w='full'>
      {/* Desktop */}
      <Box display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }}>
        <FooterDesktop width={width} height={height} bg={bg} />
      </Box>
      {/* Mobile */}
      <Box display={{ base: "flex", sm: "none", md: "none", lg: "none" }}>
        <FooterMobile width={width} height={height} bg={bg} />
      </Box>
    </Box>
  );
};

const FooterMobile = ({ width, height, bg }) => {
  const year = new Date().getFullYear();
  const { colorMode } = useColorMode();
  const isDark = "dark" === colorMode;
  return (
    <VStack>
      <HStack w='full' h='6vh' spacing='3rem'>
        <Spacer />
        <Text>©{year} Amukar.</Text>
        <Text>All rights reserved.</Text>
      </HStack>
    </VStack>
  );
};

const FooterDesktop = ({ width, height, bg }: ContextProps) => {
  const year = new Date().getFullYear();
  const { colorMode } = useColorMode();
  const isDark = "dark" === colorMode;

  return (
    <HStack w='full' minH={"6vh"} bg={bg} margin='5px'>
      <Spacer />
      <Text>©{year} Amukar.</Text>
      <Spacer />
      <Text>All rights reserved.</Text>
      <Spacer />
    </HStack>
  );
};
