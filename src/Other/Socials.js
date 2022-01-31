import React from 'react';
import {
  IconButton,
} from "@chakra-ui/react";
import cv from '../Assets/Leon Dixon CV.pdf'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { IoReaderOutline } from 'react-icons/io5'

const Socials = () => {

  return (
    <>
      <IconButton
        bg='transparent'
        fontSize={["sm", "md", "lg", "xl", "2xl"]}
        _hover={{ transform: "scale(1.2)" }}
        as={FiGithub}
        color='#FF7F00'
        onClick={() => window.open('https://github.com/LDixon2000')}
      />
      <IconButton
        bg='transparent'
        fontSize={["sm", "md", "lg", "xl", "2xl"]}
        _hover={{ transform: "scale(1.2)" }}
        as={FiLinkedin}
        color='#0074B0'
        onClick={() => window.open('https://www.linkedin.com/in/leon-dixon-8b6487194/')}
      />
      <IconButton
        bg='transparent'
        fontSize={["sm", "md", "lg", "xl", "2xl"]}
        _hover={{ transform: "scale(1.2)" }}
        as={IoReaderOutline}
        onClick={() => window.open(cv)}
      />
      
    </>
  );
};

export default Socials;
