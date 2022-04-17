import Head from "next/head";
// UI
import {
  useColorModeValue,
  Container,
  VStack,
  Divider,
  Box,
} from "@chakra-ui/react";
// own components
import { NavBar } from "../src/components/NavBar";
import { Footer } from "../src/components/Footer";
// Hard data for navBar
import { theNavBarES } from "../src/helpers/navBarHelpers";
//Lenguage Pages

import { Portada } from "../src/components/Landing/ES/portada";
import { Contacto } from "../src/components/Landing/ES/contacto";

export default function Home() {
  const bg = useColorModeValue("bgLight", "bgDark");
  return (
    <VStack bg={bg}>
      <Container maxW='full' p={0} bg={bg} h='6vh'>
        <Head>
          <title>Amukar</title>
          <meta name='description' content='Amukar - Conectando Argentina' />
          <meta
            name='image'
            content='https://i.ibb.co/3kmQ59f/memoji-guino.webp'
          />
        </Head>
        <NavBar props={theNavBarES} />
      </Container>
      <Divider />
      <Portada />
      {/* <Divider />
      <AboutMe/> */}
      {/* <Divider />
      <Skills /> */}
      {/* <Divider /> */}
      <Contacto />
      <Divider />
      <Footer />
    </VStack>
  );
}
