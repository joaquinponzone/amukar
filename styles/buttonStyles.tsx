import { useColorModeValue } from "@chakra-ui/color-mode";
export const ContainerStyle = {
  variants: {
    cardInfo: () => ({
      // bgGradient: useColorModeValue("linear(to-b, gray.100, blue.100)", "linear(to-b, gray.900, blue.700)"),
      color: useColorModeValue("bgDark", "bgLight"),
      _hover: {
        transition: ".5s",
        transform: "scale(1.01)",
      },
    }),
  },
};
export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    headers: () => ({
      bg: useColorModeValue("bgLight", "bgDark"),
      color: useColorModeValue("bgDark", "bgLight"),
      margin: "2px",
      _hover: {
        boxShadow: "md",
        transform: "scale(1.02)",
        bg: useColorModeValue("gray.300", "gray.600"),
      },
    }),
    callToAction: () => ({
      bg: "yellow.500",
      color: "bgLight",
      margin: "2px",
      _hover: {
        boxShadow: "md",
        transform: "scale(1.02)",
        bg: useColorModeValue("#3182CE", "#2B6CB0"),
      },
    }),
    wpp: () => ({
      bg: "whatsapp.500",
      color: "white",
      _hover: {
        boxShadow: "md",
        transform: "scale(1.02)",
      },
    }),
  },
  defaultProps: {},
};
