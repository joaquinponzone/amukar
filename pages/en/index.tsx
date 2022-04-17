import Head from "next/head";
import {
  useColorModeValue,
  Container,
  VStack,
  Divider,
} from "@chakra-ui/react";

import { Landing } from "../../src/components/Landing/EN/landing";
import { Contact } from "../../src/components/Landing/EN/contact";

import { theNavBarEN } from "../../src/helpers/navBarHelpers";
import { NavBar } from "../../src/components/NavBar";
import { Footer } from "../../src/components/Footer";

export default function Home() {
  const bg = useColorModeValue("bgLight", "bgDark");
  return (
    <VStack bg={bg}>
      <Container maxW='full' p={0} bg={bg} h='6vh'>
        <Head>
          <title>Amukar</title>
          <meta name='description' content='Amukar - Conecting Argentina' />
          <meta
            name='image'
            content='https://i.ibb.co/3kmQ59f/memoji-guino.webp'
          />
        </Head>
        <NavBar props={theNavBarEN} />
      </Container>
      <Divider />
      <Landing />
      {/* <Divider /> */}
      {/* <AboutMe/>
      <Divider /> */}
      {/* <Skills />
      <Divider /> */}
      <Contact />
      <Divider />
      <Footer />
    </VStack>
  );
}
