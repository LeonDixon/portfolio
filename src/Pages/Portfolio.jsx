import React from "react";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import { Box, Container, useColorModeValue, Portal } from "@chakra-ui/react";
import Footer from "./Footer";
import FloatingButton from "../Other/FloatingButton";

const Portfolio = () => {
  const bg = useColorModeValue("gruvbox.bglight", "gruvbox.bgdark");

  return (
    <Box backgroundColor={bg}>
      <Container w='80vw' maxW='container.xl'>
        <Portal>
          <FloatingButton/>
        </Portal>
        <Introduction />
        <AboutMe />
        <AboutMe  />
        <AboutMe />
        <Footer />
      </Container>
    </Box>
  );
};

export default Portfolio;