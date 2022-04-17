import {
  useColorModeValue,
  Center,
  Text,
  VStack,
  Spacer,
  HStack,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import { ContextProps } from "../../../props/contextProps";
import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import useScrollPosition from "../../../hooks/useScrollPosition";
import URL_backgrounds from "../URL_backgrounds.json";

export const Landing = () => {
  const bg = useColorModeValue("bgLight", "bgDark");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });
  return (
    <Box w='full'>
      {/* Desktop */}
      <Box display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}>
        <LandingDesktop width={width} height={height} bg={bg} />
      </Box>
      {/* Mobile */}
      <Box display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}>
        <LandingMobile width={width} height={height} bg={bg} />
      </Box>
    </Box>
  );
};

const LandingMobile = ({ width, height, bg }: ContextProps) => {
  const [showArrow, setShowArrow] = useState(true);
  const scroll = useScrollPosition();
  useEffect(() => {
    if (scroll > 100) {
      setShowArrow(false);
    }
    if (scroll < 10) {
      setShowArrow(true);
    }
  }, [scroll]);

  return (
    <HStack
      backgroundImage={URL_backgrounds[1]}
      backgroundSize='cover'
      // backgroundAttachment='fixed'
      backgroundPosition='center'
      w='full'
      h={height}
    >
      <Spacer />
      <VStack h={height}>
        <Box h='20vh' />
        <Image w='100%' src='https://i.imgur.com/WbgTgzk.png' />
        <Text fontSize={["20px", "20px", "0px", "0px"]} textColor={"white"}>
          Conectando Argentina
        </Text>
        <Box h='20vh' />
        {showArrow ? (
          <Button
            as='a'
            backgroundColor={"transparent"}
            color={"yellow.500"}
            onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
          >
            <ChevronDownIcon w={20} h={20} />
          </Button>
        ) : (
          <Button
            as='a'
            backgroundColor={"transparent"}
            color={"yellow.500"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronUpIcon w={20} h={20} />
          </Button>
        )}
        <Spacer />
      </VStack>
      <Spacer />
    </HStack>
  );
};

const LandingDesktop = ({ width, height, bg }: ContextProps) => {
  const [showArrow, setShowArrow] = useState(true);
  const scroll = useScrollPosition();
  useEffect(() => {
    if (scroll > 100) {
      setShowArrow(false);
    }
    if (scroll < 10) {
      setShowArrow(true);
    }
  }, [scroll]);

  return (
    <VStack
      backgroundImage={URL_backgrounds[1]}
      backgroundSize='cover'
      // backgroundAttachment='fixed'
      backgroundPosition='center'
      w='full'
      h='54vh'
    >
      <Spacer />
      <Box>
        <Center>
          <Image w='50%' src='https://i.imgur.com/WbgTgzk.png' />
        </Center>
      </Box>
      <Box>
        <Text fontSize={[0, 0, "20px", "25px"]} textColor={"white"}>
          Conecting Argentina
        </Text>
      </Box>
      {/* <Spacer /> */}
      {/* <Box>
        {showArrow ? (
          <Button
            as='a'
            backgroundColor={"transparent"}
            color={"yellow.500"}
            onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
          >
            <ChevronDownIcon w={20} h={20} />
          </Button>
        ) : (
          <Button
            as='a'
            backgroundColor={"transparent"}
            color={"yellow.500"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronUpIcon w={20} h={20} />
          </Button>
        )}
      </Box> */}
      <Spacer />
    </VStack>
  );
};
