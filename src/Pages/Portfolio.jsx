import React from "react";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import { Box, Container, useColorModeValue, Portal } from "@chakra-ui/react";
import Footer from "./Footer";
import FloatingButton from "../Other/FloatingButton";
import Projects from "./Projects";

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
        <Projects />
        <Footer />
      </Container>
    </Box>
  );
};

export default Portfolio;