import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
// import { ContextProvider } from "../src/context/provider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <ContextProvider> */}
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      {/* </ContextProvider> */}
    </>
  );
}

export default MyApp;
