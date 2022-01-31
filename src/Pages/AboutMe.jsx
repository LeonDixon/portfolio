import React from "react";
import {
  Box,
  Text,
  ListIcon,
  List,
  ListItem,
} from "@chakra-ui/react";
import { SiJavascript, SiTypescript, SiReact, SiSass, SiChakraui } from 'react-icons/si'
import {  FaNodeJs } from 'react-icons/fa'
import BoxCard from "../Components/BoxCard";

const AboutMe = () => {
  function CardContents() {
    return (
    <>
      <Box p='6'>
              <Text variant="cardText">
              Hello! My name is Leon, and I love creating visually pleasing and functional applications. My interest in Software Development originates from gaming - I was intrigued by how they were made and loved the idea you could create anything you want to. 
              </Text>
            </Box>
            <Box p='6' pt='20px'>
              <Text variant="cardText">
              My first interaction with Web Development was in Unversity as I previously assumed it was boring - no idea why. The first website I made was horrendous! Quickly, I realised I could develop visually appealing websites with practice, and I enjoyed the process.
              </Text>
            </Box>
            <Box p='6' pt='20px'>
              <Text variant="cardText">
                The technologies which I currently use are:
              </Text>
              <List>
                <ListItem>
                  <ListIcon as={SiJavascript} color='#F0DB4F' bg='#323330' />
                  <Text color='#F0DB4F' display='inline'>JavaScript</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaNodeJs} color='#86BE48'/>
                  <Text color='#86BE48' display='inline'>Node JS</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={SiTypescript} color='#007ACC' bg='#323330' />
                  <Text color='#007ACC' display='inline'>TypeScript</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={SiSass} color='#C45F92' />
                  <Text color='#C45F92' display='inline'>SASS</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={SiReact} color='#00D8FF' />
                  <Text color='#00D8FF' display='inline'>React</Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={SiChakraui} color='#70CBD0'/>
                  <Text color='#70CBD0' display='inline'>Chakra UI</Text>
                </ListItem>
              </List>
            </Box>
      </>
      )
  }

  return (
    <BoxCard header='About Me' Contents={CardContents} />
  );
};

export default AboutMe;
