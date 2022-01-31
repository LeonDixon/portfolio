import React from 'react';
import { motion } from "framer-motion";
import ToggleTheme from '../Utils/ToggleTheme';
import Socials from './Socials';
import { Container, VStack } from '@chakra-ui/react';

const MotionContainer = motion(Container);


const FloatingButton = () => {
  return (
    <MotionContainer
      w='0'
      opacity="0"
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      maxW="container.xl"
      position="fixed"
      top="20px"
      left={["88%", "90%", "80%"]}
      // 
    >
      <VStack>
      <ToggleTheme />
      <Socials />
      </VStack>
    </MotionContainer>
  );
};

export default FloatingButton;
